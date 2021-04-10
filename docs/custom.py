from collections import OrderedDict
from pathlib import Path

import yaml
from kart.mappers import Mapper
from kart.miners import DefaultMarkdownMiner
from watchdog.events import RegexMatchingEventHandler

try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader


class DocumentationMiner(DefaultMarkdownMiner):
    def __init__(self, directory="docs"):
        self.dir = Path(directory)

    def collect_markdown(self, file):
        return self.collect_single_file(file)

    def __recursive_read_data(self, dir, level=0):
        filename = [x.name for x in dir.iterdir()]
        if "navigation.yml" in filename:
            navigation_file = dir.joinpath("navigation.yml").open()
            navigation_data = yaml.load(navigation_file.read(), Loader=Loader)
            paths = [dir.joinpath(x["location"]) for x in navigation_data]
        else:
            paths = dir.iterdir()
            navigation_data = []

        for i, item in enumerate(paths):
            if item.is_file():
                object = self.collect_markdown(item)
                slug, page = list(object.items())[0]
                self.global_toc.append(
                    {"title": page["title"], "slug": slug, "level": level}
                )
                if object:
                    self.markdown_data.update(object)
            elif item.is_dir():
                self.global_toc.append(
                    {"title": navigation_data[i]["name"], "slug": None, "level": level}
                )
                self.__recursive_read_data(item, level + 1)

    def read_data(self):
        self.markdown_data = OrderedDict()
        self.global_toc = []
        self.__recursive_read_data(self.dir)

    def collect(self):
        return {"docs": self.markdown_data, "global_toc": self.global_toc}

    def start_watching(self, observer):
        read_data = self.read_data

        class Handler(RegexMatchingEventHandler):
            def on_moved(self, event):
                read_data()

            def on_modified(self, event):
                read_data()

            def on_deleted(self, event):
                read_data()

            def on_created(self, event):
                read_data()

        self.read_data()
        observer.schedule(Handler(), self.dir, recursive=True)


class DocumentationMapper(Mapper):
    def __init__(self, template="page.html"):
        self.urls = {}
        self.template = template

    def map(self, site):

        map_page = None
        page_link = None

        for slug, page in site["docs"].items():

            if "url" in page:
                url = page["url"]
            elif slug == "index":
                url = "/"
            else:
                url = f"/{slug}/"

            data = {**page}

            if map_page:
                data["previous_page"] = page_link
            page_link = {"url": url, "title": page["title"]}
            if map_page:
                map_page["data"]["next_page"] = page_link

            map_page = {
                "url": url,
                "data": data,
                "template": self.template,
                "renderer": "default_site_renderer",
            }

            self.urls[slug] = map_page

        for x in site["global_toc"]:
            if x["slug"]:
                x["url"] = self.urls[x["slug"]]["url"]
            else:
                x["url"] = None

        return self.urls
