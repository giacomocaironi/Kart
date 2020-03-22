from kart import miners
import os


class DefaultCollector:
    def __init__(
        self,
        collection_miner=miners.DefaultCollectionMiner,
        data_miner=miners.DefaultDataMiner,
        page_miner=miners.DefaultPageMiner,
    ):
        self.collection_miner = collection_miner
        self.data_miner = data_miner
        self.page_miner = page_miner

    def parse(self):
        collections = {}
        for dir in os.listdir("collections"):
            collection_path = os.path.join("collections", dir)
            collections.update(self.collection_miner("a", collection_path, dir).parse())

        data = self.data_miner("data").parse()

        pages = self.page_miner("pages").parse()

        return {"collections": collections, "data": data, "pages": pages}
