from kart import miners
from kart import mappers


class Kart:
    def __init__(self):
        self.miners = [
            miners.DefaultCollectionMiner(),
            miners.DefaultDataMiner(),
            miners.DefaultPageMiner(),
        ]
        self.mappers = [mappers.ManualMapper()]

    def build(self):

        self.site = {}
        for miner in self.miners:
            self.site.update(miner.collect())

        self.map = {}
        for mapper in self.mappers:
            self.map.update(mapper.map(self.site))

        print(self.site)
        print()
        print(self.map)
