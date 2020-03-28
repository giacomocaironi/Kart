from kart import miners, mappers, renderers
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
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
        for renderer in self.renderers:
            renderer.render(
                self.map, self.site, build_location=build_location,
            )

    def serve(self, port=9000):
        os.chdir(self.build_location)
        server_address = ("", port)
        with TCPServer(server_address, SimpleHTTPRequestHandler) as httpd:
            httpd.serve_forever()

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
            self.build()
            self.serve(args.port)
