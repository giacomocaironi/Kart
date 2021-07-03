import argparse
import fnmatch
import shutil
import sys
import threading
import traceback
from copy import deepcopy
from http.server import HTTPServer
from pathlib import Path

from kart.utils import KartMap, KartObserver, KartRequesHandler, merge_dicts


class Kart:
    def __init__(
        self,
        miners=[],
        content_modifiers=[],
        mappers=[],
        map_modifiers=[],
        renderers=[],
        config={},
        build_location="_site",
    ):
        self.miners = miners
        self.content_modifiers = content_modifiers
        self.mappers = mappers
        self.map_modifiers = map_modifiers
        self.renderers = renderers
        self.config = config
        self.build_location = Path(build_location)
        self.lock = threading.Lock()

    def check_config(self):
        default = {
            "name": "Example",
            "base_url": "https://example.org",
            "pagination": {"per_page": 5, "skip": 1},
        }
        merge_dicts(self.config, default)

    def mine_data(self, start=True):
        self.site = {"config": self.config}
        for miner in self.miners:
            if start:
                miner.read_data()
            self.site.update(miner.collect())
        for modifier in self.content_modifiers:
            modifier.modify(self.site)

    def create_map(self):
        self.map = KartMap(self.config["base_url"])
        for mapper in self.mappers:
            self.map.update(mapper.map(self.site))
        for modifier in self.map_modifiers:
            modifier.modify(self.map, self.site)

    def write(self):
        for renderer in self.renderers:
            renderer.render(self.map, self.site, self.build_location)

    def build(self):
        self.check_config()
        self.mine_data()
        self.create_map()
        shutil.rmtree(self.build_location, ignore_errors=True)
        self.build_location.mkdir(parents=True, exist_ok=True)
        self.write()

    # _site and _map are set and retrieved with a threading lock to prevent data races
    # _site and _map are set only when the creation of the map has finished
    # therefore it is not possible to access only partial data,
    # preventing errors when serving the site during development

    def update_data(self):
        self.check_config()
        self.mine_data(False)
        self.create_map()
        _site = deepcopy(self.site)
        _map = deepcopy(self.map)
        _urls = {}
        _regexes = {}
        for slug, page in self.map.items():
            _urls[page["url"]] = slug
            if "*" in page["url"] or "?" in page["url"]:
                _regexes[page["url"]] = slug
        with self.lock:
            self._site = _site
            self._map = _map
            self._urls = _urls
            self._regexes = _regexes

    def serve_page(self, handler, url):
        with self.lock:
            site_map = self._map
            urls = self._urls
            site = self._site
            regexes = self._regexes
        if url in urls:
            page = site_map[urls[url]]
        else:
            pattern = next((x for x in regexes if fnmatch.fnmatch(url, x)))
            page = site_map[regexes[pattern]]
        if page:
            self.renderer_dict[page["renderer"]].serve(handler, page, site_map, site)

    def serve(self, port=9000):
        self.renderer_dict = {}
        observer = KartObserver()
        observer.action = self.update_data
        for miner in self.miners:
            miner.start_watching(observer)
        observer.start()
        for renderer in self.renderers:
            self.renderer_dict[renderer.name] = renderer
            renderer.start_serving()
        handler_class = KartRequesHandler
        handler_class.action = self.serve_page
        httpd = HTTPServer(("", port), handler_class)
        httpd.timeout = 0.1
        self.update_data()
        shutil.rmtree(self.build_location, ignore_errors=True)

        while True:
            try:
                httpd.handle_request()
            except KeyboardInterrupt:
                print("\rexiting")
                for miner in self.miners:
                    miner.stop_watching()
                for renderer in self.renderers:
                    renderer.stop_serving()
                observer.stop()
                observer.join()
                sys.exit()
            except Exception:
                print(traceback.format_exc())

    def run(self):
        parser = argparse.ArgumentParser()
        parser.add_argument(
            "command", help="command to execute", choices={"build", "serve"}
        )
        parser.add_argument(
            "-p", "--port", help="port to bind to", default=9000, type=int
        )
        args = parser.parse_args()
        if args.command == "build":
            self.build()
        if args.command == "serve":
            self.config["base_url"] = ""
            self.serve(args.port)
