from kart import collectors
from kart import mappers


class Kart:
    def __init__(self):
        self.collector = collectors.DefaultCollector
        self.mapper = mappers.ManualMapper

    def build(self):
        print(self.collector().parse())
