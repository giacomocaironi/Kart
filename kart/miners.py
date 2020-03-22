import os
import frontmatter
import yaml


class Miner:
    # def __init__(self, model, location):
    #     self.model = model
    #     self.location = location
    #     self.data = {}
    #
    # def parse(self):
    #     pass
    pass


class DefaultCollectionMiner(Miner):
    def __init__(self, model, location, collection_name):
        self.model = model
        self.location = location
        self.data = {}
        self.collection_name = collection_name

    def parse(self):
        self.data[self.collection_name] = []
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                metadata, content = frontmatter.parse(f.read())
                object = metadata
                object["content"] = content
                self.data[self.collection_name].append(object)
        return self.data


class DefaultPageMiner(Miner):
    def __init__(self, location):
        self.location = location
        self.data = {}

    def parse(self):
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                metadata, content = frontmatter.parse(f.read())
                object = metadata
                object["content"] = content
                self.data[file.split(".")[0]] = object
        return self.data


class DefaultDataMiner(Miner):
    def __init__(self, location):
        self.location = location
        self.data = {}

    def parse(self):
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                self.data[file.split(".")[0]] = yaml.full_load(f.read())
        return self.data
