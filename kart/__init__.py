from kart import miners, mappers, renderers
from livereload import Server
import os
import shutil
import argparse


class Kart:
    def __init__(self):
        self.miners = [
            miners.DefaultPostMiner("posts"),
            miners.DefaultCollectionMiner("tags"),
            miners.DefaultDataMiner(),
            miners.DefaultPageMiner(),
        ]
        self.mappers = [
            mappers.DefaultBlogMapper(),
            mappers.DefaultPageMapper(),
            mappers.DefaultFeedMapper(),
        ]
        self.renderers = [
            renderers.DefaultSiteRenderer(),
            renderers.DefaultFeedRenderer(),
        ]
        self.config = {}

    def build(self, build_location="_site"):

        self.build_location = build_location

        self.site = {}
        for miner in self.miners:
            self.site.update(miner.collect())
        self.site["config"] = self.config

        # for key, value in self.site.items():
        #     print(key, value)
        # print(self.site)

        self.map = {}
        for mapper in self.mappers:
            self.map.update(mapper.map(self.site))

        # print(self.map)

        os.makedirs(build_location, exist_ok=True)
        for x in os.listdir(build_location):
            if os.path.isdir(os.path.join(build_location, x)):
                shutil.rmtree(os.path.join(build_location, x))
            else:
                os.remove(os.path.join(build_location, x))
        shutil.copytree("static", os.path.join(build_location, "static"))

        for top_level_file in os.listdir("root"):
            shutil.copyfile(
                os.path.join("root", top_level_file),
                os.path.join(build_location, top_level_file),
            )

        for renderer in self.renderers:
            renderer.url_function = self.url
            renderer.render(
                self.map, self.site, build_location=build_location,
            )

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
            self.build()
            self.serve(args.port)
