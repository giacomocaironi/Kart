from collections import OrderedDict
from pathlib import Path

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

    def collect_single_file(self, file):
        raise NotImplementedError

    def read_data(self):
        self.data = OrderedDict()
        for file in filter(Path.is_file, self.dir.iterdir()):
            object = self.collect_single_file(file)
            if object:
                self.data.update(object)

    def start_watching(self, observer):
        def create(file):
            self.data.update(self.collect_single_file(file))

        def delete(file):
            self.data.pop(file.stem)

        class Handler(RegexMatchingEventHandler):
            def on_moved(self, event):
                file = Path(event.src_path)
                delete(file)
                create(file)

            def on_modified(self, event):
                file = Path(event.src_path)
                create(file)

            def on_deleted(self, event):
                file = Path(event.src_path)
                delete(file)

            def on_created(self, event):
                file = Path(event.src_path)
                create(file)

        self.read_data()
        observer.schedule(Handler(), self.dir, recursive=False)

    def stop_watching(self):
        pass


class DefaultCollectionMiner(DefaultMiner):
    def __init__(self, collection_name, directory="collections"):
        self.collection_name = collection_name
        self.dir = Path() / directory / collection_name

    def collect_single_file(self, file):
        with file.open("r") as f:
            data = f.read().split("---")
            metadata = yaml.load(data[1], Loader=Loader)
            content = "".join(data[2:])
            object = metadata
            slug = file.stem
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
    def __init__(self, directory="pages"):
        self.dir = Path(directory)

    def collect_single_file(self, file):
        with file.open("r") as f:
            data = f.read().split("---")
            metadata = yaml.load(data[1], Loader=Loader)
            content = "".join(data[2:])
            object = metadata
            slug = file.stem
            object["content"] = content
            object["content_type"] = "markdown"
            object["slug"] = slug
            return {slug: object}

    def collect(self):
        return {"pages": self.data}


class DefaultDataMiner(DefaultMiner):
    def __init__(self, directory="data"):
        self.dir = Path(directory)

    def collect_single_file(self, file):
        with file.open("r") as f:
            return {file.stem: yaml.load(f.read(), Loader=Loader)}

    def collect(self):
        return {"data": self.data}
