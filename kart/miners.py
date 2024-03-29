from abc import ABC, abstractmethod
from fnmatch import fnmatch
from pathlib import Path
from typing import Union

from watchdog.events import RegexMatchingEventHandler

from kart.utils import id_from_path

try:
    from yaml import CSafeLoader as YamlLoader
except ImportError:
    from yaml import SafeLoader as YamlLoader

from typing import Dict

from kart.utils import KartDict, KartObserver


class Miner(ABC):
    """Base miner class"""

    @abstractmethod
    def read_data(self, config: dict):
        """Reads data from its source"""

    @abstractmethod
    def collect(self, config: dict) -> Dict:
        """Collects all data"""

    @abstractmethod
    def start_watching(self, config: dict, observer: KartObserver):
        """Start watching for data changes"""

    @abstractmethod
    def stop_watching(self, config: dict):
        """Stop watching for data changes"""


class DefaultMiner(Miner):
    """Base miner class for reading from filesystem"""

    @abstractmethod
    def __init__(self):
        """Initializes miner. Must set the ``name`` and ``dir`` variables"""

    @abstractmethod
    def collect_single_file(self, file: Path, config: dict):
        """Reads data from a single file"""

    def valid_path(self, path: Union[Path, str]) -> bool:
        return any(fnmatch(path, "*" + ext) for ext in self.extensions)

    def read_data(self, config: dict):
        """Implements Miner.read_data().

        It iterates over a directory and calls collect_single_file() for each file
        """
        self.data = KartDict()
        for file in filter(self.valid_path, filter(Path.is_file, self.dir.iterdir())):
            data = self.collect_single_file(file, config)
            if data:
                self.data.update(data)

    def collect(self, config: dict):
        return {self.name: self.data}

    def start_watching(self, config: dict, observer: KartObserver):
        """Registers a watchdog handler that calls collect_single_file() when a file has changed"""

        class Handler(RegexMatchingEventHandler):
            def on_moved(_, event):
                self.data.pop(id_from_path(self.dir, Path(event.src_path)), None)
                if self.valid_path(event.dest_path):
                    self.data.update(
                        self.collect_single_file(Path(event.dest_path), config)
                    )

            def on_modified(_, event):
                if self.valid_path(event.src_path):
                    self.data.update(
                        self.collect_single_file(Path(event.src_path), config)
                    )

            def on_created(_, event):
                _.on_modified(event)

            def on_deleted(_, event):
                self.data.pop(id_from_path(self.dir, Path(event.src_path)), None)

        self.read_data(config)
        observer.schedule(Handler(ignore_directories=True), self.dir, recursive=False)

    def stop_watching(self, config: dict):
        """Implements Miner.stop_watching(). It does nothing as no cleanup is needed"""


class DefaultMarkupMiner(DefaultMiner):
    """Base miner that implements collect_single_file() for markup files"""

    extensions = (".md",)

    def collect_single_file(self, file: Path, config: dict) -> str:
        """
        Stores the data included in the frontmatter in a dictionary, adds
        the content in the ``content`` field and then return the dictionary
        """
        with file.open("r") as f:
            data = f.read().split("---")
            metadata = YamlLoader(data[1]).get_data()
            if "draft" in metadata and metadata["draft"] and not config["dev_mode"]:
                return
            content = "---".join(data[2:])
            slug = id_from_path(self.dir, file)
            data = {}
            data["markup"] = "markdown"
            data.update(metadata)
            data["content"] = content
            data["slug"] = slug
            return {slug: data}


class DefaultCollectionMiner(DefaultMarkupMiner):
    """Miner that looks for data in the ``collections`` folder"""

    def __init__(self, collection: str, directory: str = "collections"):
        "Initializes miner. Sets the ``name``, ``dir`` and ``collection`` variables"
        self.collection = collection
        self.dir = Path() / directory / collection
        self.name = self.collection


class DefaultTaxonomyMiner(DefaultMarkupMiner):
    """Miner that looks for data in the ``taxonomy`` folder"""

    def __init__(self, taxonomy: str, directory: str = "taxonomies"):
        "Initializes miner. Sets the ``name``, ``dir`` and ``taxonomy`` variables"
        self.taxonomy = taxonomy
        self.dir = Path() / directory / taxonomy
        self.name = self.taxonomy


class DefaultPageMiner(DefaultMarkupMiner):
    """Miner that get data from the ``pages`` folder"""

    def __init__(self, directory: str = "pages"):
        "Initializes miner. Sets the ``name`` and ``dir`` variables"
        self.dir = Path(directory)
        self.name = "pages"


class DefaultDataMiner(DefaultMiner):
    """Miner that get yaml data from the ``data`` folder"""

    extensions = (".yml", ".yaml")

    def __init__(self, directory: str = "data"):
        "Initializes miner. Sets the ``name`` and ``dir`` variables"
        self.dir = Path(directory)
        self.name = "data"

    def collect_single_file(self, file: Path, config: dict) -> str:
        """Users YamlLoader to get data from a yaml file"""
        with file.open("r") as f:
            slug = id_from_path(self.dir, file)
            return {slug: YamlLoader(f.read()).get_data()}
