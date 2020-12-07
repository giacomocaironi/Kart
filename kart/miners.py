import os
from collections import OrderedDict

import yaml
from watchdog.events import RegexMatchingEventHandler

try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader


class Miner:
    def read_data(self):
        raise NotImplementedError

    def collect(self):
        raise NotImplementedError

    def start_watching(self):
        raise NotImplementedError

    def stop_watching(self):
        raise NotImplementedError


class DefaultMiner(Miner):
    def collect(self):
        pass

    def collect_single_file(self, filename, file_location):
        raise NotImplementedError

    def read_data(self):
        self.data = OrderedDict()
        for filename in os.listdir(self.working_dir):
            file_location = os.path.join(self.working_dir, filename)
            filename = filename.split(".")[0]
            object = self.collect_single_file(filename, file_location)
            if object:
                self.data.update(object)

    def start_watching(self, observer):
        def create(filename, file_location):
            self.data.update(self.collect_single_file(filename, file_location))

        def delete(filename, file_location):
            self.data.pop(filename)

        class Handler(RegexMatchingEventHandler):
            def on_moved(self, event):
                filename = event.src_path.split(".")[0].split("/")[-1]
                delete(filename, event.src_path)
                create(filename, event.dest_path)

            def on_modified(self, event):
                filename = event.src_path.split(".")[0].split("/")[-1]
                create(filename, event.src_path)

            def on_deleted(self, event):
                filename = event.src_path.split(".")[0].split("/")[-1]
                delete(filename, event.src_path)

            def on_created(self, event):
                filename = event.src_path.split(".")[0].split("/")[-1]
                create(filename, event.src_path)

        self.read_data()
        observer.schedule(Handler(), self.working_dir, recursive=False)

    def stop_watching(self):
        pass


class DefaultCollectionMiner(DefaultMiner):
    def __init__(self, collection_name, model=None, location="collections"):
        self.model = model
        self.collection_name = collection_name
        self.working_dir = os.path.join(location, collection_name)

    def collect_single_file(self, filename, file_location):
        with open(file_location, "r") as f:
            data = f.read().split("---")
            metadata = yaml.load(data[1], Loader=Loader)
            content = "".join(data[2:])
            object = metadata
            slug = filename.split(".")[0]
            object["slug"] = slug
            object["content"] = content
            object["content_type"] = "markdown"
            if "draft" in object.keys():
                if object["draft"]:
                    return False
            return {slug: object}

    def collect(self):
        return {self.collection_name: self.data}


class DefaultPageMiner(DefaultMiner):
    def __init__(self, location="pages"):
        self.working_dir = location

    def collect_single_file(self, filename, file_location):
        with open(file_location, "r") as f:
            data = f.read().split("---")
            metadata = yaml.load(data[1], Loader=Loader)
            content = "".join(data[2:])
            object = metadata
            slug = filename.split(".")[0]
            object["content"] = content
            object["content_type"] = "markdown"
            object["slug"] = slug
            return {slug: object}

    def collect(self):
        return {"pages": self.data}


class DefaultDataMiner(DefaultMiner):
    def __init__(self, location="data"):
        self.working_dir = location

    def collect_single_file(self, filename, file_location):
        with open(file_location, "r") as f:
            filename = filename.split(".")[0]
            return {filename: yaml.load(f.read(), Loader=Loader)}

    def collect(self):
        return {"data": self.data}
