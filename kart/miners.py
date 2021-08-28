from abc import ABC, abstractmethod
from collections import OrderedDict
from pathlib import Path

from watchdog.events import RegexMatchingEventHandler

from kart.utils import id_from_path

try:
    from yaml import CSafeLoader as YamlLoader
except ImportError:
    from yaml import SafeLoader as YamlLoader


class Miner(ABC):
    @abstractmethod
    def read_data(self):
        pass

    @abstractmethod
    def collect(self):
        pass

    @abstractmethod
    def start_watching(self, observer):
        pass

    @abstractmethod
    def stop_watching(self):
        pass


class DefaultMiner(Miner):
    @abstractmethod
    def __init__(self):
        pass

    @abstractmethod
    def collect_single_file(self, file):
        pass

    def read_data(self):
        self.data = OrderedDict()
        for file in filter(Path.is_file, self.dir.iterdir()):
            object = self.collect_single_file(file)
            if object:
                self.data.update(object)

    def collect(self):
        return {self.name: self.data}

    def start_watching(self, observer):
        class Handler(RegexMatchingEventHandler):
            def on_moved(_, event):
                self.data.pop(id_from_path(self.dir, Path(event.src_path)))
                self.data.update(self.collect_single_file(Path(event.src_path)))

            def on_modified(_, event):
                self.data.update(self.collect_single_file(Path(event.src_path)))

            def on_deleted(_, event):
                self.data.pop(id_from_path(self.dir, Path(event.src_path)))

        self.read_data()
        observer.schedule(Handler(ignore_directories=True), self.dir, recursive=False)

    def stop_watching(self):
        pass


class DefaultMarkdownMiner(DefaultMiner):
    def collect_single_file(self, file):
        with file.open("r") as f:
            data = f.read().split("---")
            metadata = YamlLoader(data[1]).get_data()
            content = "---".join(data[2:])
            object = metadata
            slug = id_from_path(self.dir, file)
            object["slug"] = slug
            object["content"] = content
            object["content_type"] = "markdown"
            if "draft" in object.keys():
                if object["draft"]:
                    return False
            return {slug: object}


class DefaultCollectionMiner(DefaultMarkdownMiner):
    def __init__(self, collection, directory="collections"):
        self.collection = collection
        self.dir = Path() / directory / collection
        self.name = self.collection


class DefaultTaxonomyMiner(DefaultMarkdownMiner):
    def __init__(self, taxonomy, directory="taxonomies"):
        self.taxonomy = taxonomy
        self.dir = Path() / directory / taxonomy
        self.name = self.taxonomy


class DefaultPageMiner(DefaultMarkdownMiner):
    def __init__(self, directory="pages"):
        self.dir = Path(directory)
        self.name = "pages"


class DefaultDataMiner(DefaultMiner):
    def __init__(self, directory="data"):
        self.dir = Path(directory)
        self.name = "data"

    def collect_single_file(self, file):
        with file.open("r") as f:
            slug = id_from_path(self.dir, file)
            return {slug: YamlLoader(f.read()).get_data()}
