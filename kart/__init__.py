from kart.utils import KartMap
from kart.utils import StoppableThread

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import shutil
import argparse
import threading
import sys


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
        self.site = {}
        for miner in self.miners:
            self.site.update(miner.collect())
        self.site["config"] = self.config
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
        self.prepare()
        self.create_map()
        shutil.rmtree(self.build_location, ignore_errors=True)
        os.makedirs(self.build_location, exist_ok=True)
        self.write()

    # _site and _map are set and retrieved with a threading lock to prevent data races
    # _site and _map are set only when the creation of the map has finished
    # therefore it is not possible to access only partial data,
    # preventing errors when serving the site during development

    def get_url_data(self, url):
        with self.lock:
            if url not in [x["url"] for x in self._map.values()]:
                # TODO: generalize using regex
                if url.split("/")[1] == "static":
                    url = "/static/*"
                else:
                    url = "/*"
            page = [x for x in self._map.values() if x["url"] == url][0]
            return page

    def get_global_data(self):
        with self.lock:
            return self._map, self._site

    def serve(self, port=9000):
        get_url_data = self.get_url_data
        get_global_data = self.get_global_data
        renderer_dict = {}
        for renderer in self.renderers:
            renderer_dict[renderer.name] = renderer
            renderer.start_serving()

        class RequestHandler(SimpleHTTPRequestHandler):
            def __init__(self, *args, **kwargs):
                super().__init__(*args, **kwargs)

            def do_GET(self):
                page = get_url_data(self.path)
                map, site = get_global_data()
                if not page:
                    return
                else:
                    try:
                        renderer_dict[page["renderer"]].serve(self, page, map, site)
                    except Exception as e:
                        print(e)

        handler = RequestHandler
        httpd = HTTPServer(("", port), handler)
        httpd.timeout = 0.1
        server_thread = StoppableThread(target=httpd.handle_request)
        self.prepare()
        self.create_map()
        self._site = self.site
        self._map = self.map
        server_thread.start()

        while True:
            try:
                shutil.rmtree(self.build_location, ignore_errors=True)
                self.prepare()
                self.create_map()
            except KeyboardInterrupt:
                print("\rexiting")
                server_thread.stop()
                for renderer in self.renderers:
                    renderer.stop_serving()
                sys.exit()
            except Exception:
                pass
            with self.lock:
                self._site = self.site
                self._map = self.map

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
