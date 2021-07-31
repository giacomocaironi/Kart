from collections import OrderedDict
from pathlib import Path

from watchdog.events import RegexMatchingEventHandler

from kart.utils import slug_from_path

try:
    from yaml import CSafeLoader as YamlLoader
except ImportError:
    from yaml import SafeLoader as YamlLoader


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
        raise NotImplementedError

    def collect_single_file(self, file):
        raise NotImplementedError

    def read_data(self):
        self.data = OrderedDict()
        for file in filter(Path.is_file, self.dir.iterdir()):
            object = self.collect_single_file(file)
            if object:
                self.data.update(object)

    def start_watching(self, observer):
        class Handler(RegexMatchingEventHandler):
            def on_moved(_, event):
                self.data.pop(slug_from_path(self.dir, Path(event.src_path)))
                self.data.update(self.collect_single_file(Path(event.src_path)))

            def on_modified(_, event):
                self.data.update(self.collect_single_file(Path(event.src_path)))

            def on_deleted(_, event):
                self.data.pop(slug_from_path(self.dir, Path(event.src_path)))

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
            slug = slug_from_path(self.dir, file)
            object["slug"] = slug
            object["content"] = content
            object["content_type"] = "markdown"
            if "draft" in object.keys():
                if object["draft"]:
                    return False
            return {slug: object}


class DefaultCollectionMiner(DefaultMarkdownMiner):
    def __init__(self, collection_name, directory="collections"):
        self.collection_name = collection_name
        self.dir = Path() / directory / collection_name

    def collect(self):
        return {self.collection_name: self.data}


class DefaultTaxonomyMiner(DefaultMarkdownMiner):
    def __init__(self, taxonomy_name, directory="taxonomies"):
        self.taxonomy_name = taxonomy_name
        self.dir = Path() / directory / taxonomy_name

    def collect(self):
        return {self.taxonomy_name: self.data}


class DefaultPageMiner(DefaultMarkdownMiner):
    def __init__(self, directory="pages"):
        self.dir = Path(directory)

    def collect(self):
        return {"pages": self.data}


class DefaultDataMiner(DefaultMiner):
    def __init__(self, directory="data"):
        self.dir = Path(directory)

    def collect_single_file(self, file):
        with file.open("r") as f:
            slug = slug_from_path(self.dir, file)
            return {slug: YamlLoader(f.read()).get_data()}

    def collect(self):
        return {"data": self.data}


class DefaultDocumentationMiner(DefaultMarkdownMiner):
    def __init__(self, directory="docs"):
        self.dir = Path(directory)

    def __recursive_read_data(self, dir, level=0):
        if dir.joinpath("navigation.yml").exists():
            nav_file = dir.joinpath("navigation.yml").open()
            nav_data = YamlLoader(nav_file.read()).get_data()
            paths = []
            for x in nav_data:
                if "page" in x.keys():
                    paths.append(dir.joinpath(x["page"]))
                elif "section" in x.keys():
                    paths.append(dir.joinpath(x["section"]))
        else:
            paths = dir.iterdir()
            nav_data = []

        for i, item in enumerate(paths):
            if item.is_file():
                object = self.collect_single_file(item)
                slug, page = list(object.items())[0]
                toc_entry = {"title": page["title"], "slug": slug, "level": level}
                self.docs_global_toc.append(toc_entry)
                if object:
                    self.markdown_data.update(object)
            elif item.is_dir():
                toc_entry = {"title": nav_data[i]["name"], "slug": None, "level": level}
                self.docs_global_toc.append(toc_entry)
                self.__recursive_read_data(item, level + 1)

    def read_data(self):
        self.markdown_data = OrderedDict()
        self.docs_global_toc = []
        self.__recursive_read_data(self.dir)

    def collect(self):
        return {"docs": self.markdown_data, "docs_global_toc": self.docs_global_toc}

    def start_watching(self, observer):
        class Handler(RegexMatchingEventHandler):
            def on_any_event(_, event):
                self.read_data()

        self.read_data()
        observer.schedule(Handler(), self.dir, recursive=True)
