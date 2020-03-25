from kart import miners, mappers, renderers
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import os
import shutil
import argparse


class Kart:
    def __init__(self):
        self.miners = [
            miners.DefaultCollectionMiner(),
            miners.DefaultDataMiner(),
            miners.DefaultPageMiner(),
        ]
        self.mappers = [mappers.ManualMapper()]
        self.renderers = [renderers.JinjaSiteRenderer()]

    def build(self, build_location="_site"):

        self.build_location = build_location

        self.site = {}
        for miner in self.miners:
            self.site.update(miner.collect())

        # print(self.site)

        self.map = []
        for mapper in self.mappers:
            self.map.extend(mapper.map(self.site))
        self.url_map = {}
        for page in self.map:
            self.url_map.update({page["name"]: page["url"]})

        # print(self.map)
        # print(self.url_map)

        os.makedirs(build_location, exist_ok=True)
        for x in os.listdir(build_location):
            if os.path.isdir(os.path.join(build_location, x)):
                shutil.rmtree(os.path.join(build_location, x))
            else:
                os.remove(os.path.join(build_location, x))
        shutil.copytree("static", os.path.join(build_location, "static"))
        for renderer in self.renderers:
            renderer.render(
                self.map,
                self.site,
                build_location=build_location,
                url_function=self.url,
            )

        # print(self.map)

    def url(self, name):
        try:
            result = self.url_map[name]
        except:
            result = self.url_map[name + ".1"]
        return result

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
        args = parser.parse_args()
        if args.command == "build":
            self.build()
        if args.command == "serve":
            self.build()
            self.serve()
