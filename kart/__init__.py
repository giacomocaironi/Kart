from kart import miners, mappers, renderers
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import os
import shutil


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

        self.map = []
        for mapper in self.mappers:
            self.map.extend(mapper.map(self.site))

        for x in os.listdir(build_location):
            shutil.rmtree(os.path.join(build_location, x))

        for renderer in self.renderers:
            renderer.render(self.map, self.site, build_location=build_location)

        # print(self.site)
        # print()
        # print(self.map)

    def serve(self, port=9000):
        os.chdir(self.build_location)
        server_address = ("", port)
        with TCPServer(server_address, SimpleHTTPRequestHandler) as httpd:
            httpd.serve_forever()
