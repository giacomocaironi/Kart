import os
import yaml

try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader


class Miner:
    def collect(self):
        raise NotImplementedError


class DefaultCollectionMiner(Miner):
    def __init__(self, collection_name, model=None, location="collections"):
        self.model = model
        self.collection_name = collection_name
        self.location = location

    def collect_single_file(self, filename, file_location):
        with open(file_location, "r") as f:
            data = f.read().split("---")
            metadata = yaml.load(data[1], Loader=Loader)
            content = "".join(data[2:])
            object = metadata
            object["slug"] = filename.split(".")[0]
            object["content"] = content
            object["content_type"] = "markdown"
            if "draft" in object.keys():
                if object["draft"]:
                    return False
            return object

    def collect(self):
        self.data = []
        working_dir = os.path.join(self.location, self.collection_name)
        for filename in os.listdir(working_dir):
            file_location = os.path.join(working_dir, filename)
            object = self.collect_single_file(filename, file_location)
            if object:
                self.data.append(object)
        return {self.collection_name: self.data}


class DefaultPageMiner(Miner):
    def __init__(self, location="pages"):
        self.location = location

    def collect(self):
        self.data = {}
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                data = f.read().split("---")
                metadata = yaml.load(data[1], Loader=Loader)
                content = "".join(data[2:])
                object = metadata
                object["content"] = content
                object["content_type"] = "markdown"
                slug = file.split(".")[0]
                self.data[slug] = object
        return {"pages": self.data}


class DefaultDataMiner(Miner):
    def __init__(self, location="data"):
        self.location = location

    def collect(self):
        self.data = {}
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                slug = file.split(".")[0]
                self.data[slug] = yaml.load(f.read(), Loader=Loader)
        return {"data": self.data}
