from kart.mappers import KartMap

from livereload import Server
import os
import shutil
import argparse


class Kart:
    def __init__(
        self,
        miners=[],
        content_modifiers=[],
        mappers=[],
        map_modifiers=[],
        renderers=[],
        config={},
    ):
        self.miners = miners
        self.content_modifiers = content_modifiers
        self.mappers = mappers
        self.map_modifiers = map_modifiers
        self.renderers = renderers
        self.config = config

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

    def build(self, build_location="_site"):
        self.build_location = build_location
        self.prepare()
        self.create_map()
        shutil.rmtree(self.build_location, ignore_errors=True)
        os.makedirs(self.build_location, exist_ok=True)
        self.write()

    def serve(self, port=9000):
        self.build()
        server = Server()
        server.watcher.ignore_dirs("_site")
        server.watch(".", self.build)
        server.serve(root=self.build_location, port=port, host="0.0.0.0")

    def run(self):
        parser = argparse.ArgumentParser()
        parser.add_argument(
            "command", help="command to execute", choices={"build", "serve"}
        )
        parser.add_argument(
            "-p", "--port", help="port to bind to", default=9000, type=int
        )
        parser.add_argument("--production", action="store_true")
        args = parser.parse_args()
        if not args.production:
            self.config["base_url"] = ""
        if args.command == "build":
            self.build()
        if args.command == "serve":
            self.build_location = "_site"
            self.serve(args.port)
