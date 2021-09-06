from abc import ABC, abstractmethod
from collections import OrderedDict
from pathlib import Path

from watchdog.events import RegexMatchingEventHandler

from kart.utils import id_from_path

try:
    from yaml import CSafeLoader as YamlLoader
except ImportError:
    from yaml import SafeLoader as YamlLoader
from typing import Dict


class Miner(ABC):
    """Base miner class"""

    @abstractmethod
    def read_data(self):
        """Reads data from its source"""

    @abstractmethod
    def collect(self) -> Dict:
        """Collects all data"""

    @abstractmethod
    def start_watching(self, observer):
        """Start watching for data changes"""

    @abstractmethod
    def stop_watching(self):
        """Stop watching for data changes"""


class DefaultMiner(Miner):
    """Base miner class for reading from filesystem"""

    @abstractmethod
    def __init__(self):
        pass

    @abstractmethod
    def collect_single_file(self, file: Path):
        """Reads data from a single file"""

    def read_data(self):
        """Implements Miner.read_data()

        It iterates over a directory and calls collect_single_file() for each file
        """
        self.data = OrderedDict()
        for file in filter(Path.is_file, self.dir.iterdir()):
            object = self.collect_single_file(file)
            if object:
                self.data.update(object)

    def collect(self):
        """Implements Miner.collect()"""
        return {self.name: self.data}

    def start_watching(self, observer):
        """Implements Miner.start_watching()

        It register a watchdog handler that calls collect_single_file() when a file has changed
        """

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
        """Implements Miner.stop_watching()

        It does nothing as no cleanup is needed
        """


class DefaultMarkdownMiner(DefaultMiner):
    """Base miner that implements collect_single_file() for markdown files"""

    def collect_single_file(self, file):
        """Implements DefaultMiner.collect_single_file()

        It stores the data included in the frontmatter in a dictionary, adds
        the markdown content in the ``content`` field and then return the dictionary
        """
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
    """Miner that looks for data in the ``collections`` folder"""

    def __init__(self, collection, directory="collections"):
        self.collection = collection
        self.dir = Path() / directory / collection
        self.name = self.collection


class DefaultTaxonomyMiner(DefaultMarkdownMiner):
    """Miner that looks for data in the ``taxonomy`` folder"""

    def __init__(self, taxonomy, directory="taxonomies"):
        self.taxonomy = taxonomy
        self.dir = Path() / directory / taxonomy
        self.name = self.taxonomy


class DefaultPageMiner(DefaultMarkdownMiner):
    """Miner that get data from the ``pages`` folder"""

    def __init__(self, directory="pages"):
        self.dir = Path(directory)
        self.name = "pages"


class DefaultDataMiner(DefaultMiner):
    """Miner that get data from the ``data`` folder"""

    def __init__(self, directory="data"):
        self.dir = Path(directory)
        self.name = "data"

    def collect_single_file(self, file):
        """Implements DefaultMiner.collect_single_file()

        It uses the yaml loader to get the data from the yaml file
        """
        with file.open("r") as f:
            slug = id_from_path(self.dir, file)
            return {slug: YamlLoader(f.read()).get_data()}
