import argparse
import os
import shutil
import sys
import threading
import traceback
from copy import deepcopy
from http.server import HTTPServer, SimpleHTTPRequestHandler

from kart.utils import KartMap, KartObserver


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
        self.build_location = build_location
        self.lock = threading.Lock()

    def prepare(self):
        self.site = {"config": self.config}
        for miner in self.miners:
            miner.read_data()
            self.site.update(miner.collect())
        for modifier in self.content_modifiers:
            modifier.modify(self.site)

    def create_map(self):
        self.map = KartMap(self.config["base_url"])
        for mapper in self.mappers:
            self.map.update(mapper.map(deepcopy(self.site)))
        for modifier in self.map_modifiers:
            modifier.modify(self.map, self.site)

    def write(self):
        for renderer in self.renderers:
            map = deepcopy(self.map)
            site = deepcopy(self.site)
            renderer.render(map, site, self.build_location)

    def build(self):
        self.prepare()
        self.create_map()
        shutil.rmtree(self.build_location, ignore_errors=True)
        os.makedirs(self.build_location, exist_ok=True)
        self.write()

    # _site and _map are set and retrieved with a threading lock to prevent data races
    # _site and _map are set only when the creation of the map has finished
    # therefore it is not possible to access only partial data,
    # preventing errors when serving the site during development

    def update_data(self):
        self.site = {"config": self.config}
        for miner in self.miners:
            self.site.update(miner.collect())
        for modifier in self.content_modifiers:
            modifier.modify(self.site)
        self.create_map()
        _site = deepcopy(self.site)
        _map = deepcopy(self.map)
        _urls = {}
        for slug, page in self.map.items():
            _urls[page["url"]] = slug
        with self.lock:
            self._site = _site
            self._map = _map
            self._urls = _urls

    def get_url_data(self, url):
        with self.lock:
            _map = self._map
            _urls = self._urls
        if url not in _urls.keys():
            # TODO: generalize using regex
            if url.split("/")[1] == "static":
                url = "/static/*"
            else:
                url = "/*"
        page = _map[_urls[url]]
        return page

    def get_global_data(self):
        with self.lock:
            return self._map, self._site

    def serve(self, port=9000):
        get_url_data = self.get_url_data
        get_global_data = self.get_global_data
        renderer_dict = {}
        observer = KartObserver()
        observer.action = self.update_data
        for miner in self.miners:
            miner.start_watching(observer)
        observer.start()
        for renderer in self.renderers:
            renderer_dict[renderer.name] = renderer
            renderer.start_serving()

        class RequestHandler(SimpleHTTPRequestHandler):
            def do_GET(self):
                page = get_url_data(self.path)
                map, site = get_global_data()
                if page:
                    try:
                        renderer_dict[page["renderer"]].serve(self, page, map, site)
                    except Exception:
                        print(traceback.format_exc())

        httpd = HTTPServer(("", port), RequestHandler)
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
                pass

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
