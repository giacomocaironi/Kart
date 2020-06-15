# from kart import miners, mappers, renderers
from livereload import Server
import os
import shutil
import argparse


class Kart:
    def __init__(self, miners=[], mappers=[], modifiers=[], renderers=[], config={}):
        self.miners = miners
        self.mappers = mappers
        self.modifiers = modifiers
        self.renderers = renderers
        self.config = config

    def prepare(self):
        self.site = {}
        for miner in self.miners:
            self.site.update(miner.collect())
        self.site["config"] = self.config

    def create_map(self):
        self.map = {}
        for mapper in self.mappers:
            self.map.update(mapper.map(self.site))
        for modifier in self.modifiers:
            modifier.modify(self.site)

    def move_static(self):
        os.makedirs(self.build_location, exist_ok=True)
        for x in os.listdir(self.build_location):
            if os.path.isdir(os.path.join(self.build_location, x)):
                shutil.rmtree(os.path.join(self.build_location, x))
            else:
                os.remove(os.path.join(self.build_location, x))
        if "static" in os.listdir():
            shutil.copytree("static", os.path.join(self.build_location, "static"))

        if "root" in os.listdir():
            for top_level_file in os.listdir("root"):
                shutil.copyfile(
                    os.path.join("root", top_level_file),
                    os.path.join(self.build_location, top_level_file),
                )

    def write(self):
        for renderer in self.renderers:
            renderer.url_function = self.url
            renderer.render(self.map, self.site, build_location=self.build_location)

    def url(self, *name):
        name = ".".join(name)
        if not name:
            return ""
        if name in self.map.keys():
            result = self.map[name]["url"]
        elif name + ".1" in self.map.keys():
            result = self.map[name + ".1"]["url"]
        elif "/" in name:
            result = name
        else:
            return ""
        return self.config["base_url"] + result

    def serve(self, port=9000):
        self.build()
        server = Server()
        server.watcher.ignore_dirs("_site")
        server.watch(".", self.build)
        server.serve(root=self.build_location, port=port, host="0.0.0.0")

    def build(self, build_location="_site"):
        self.build_location = build_location
        self.prepare()
        self.create_map()
        self.move_static()
        self.write()

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
