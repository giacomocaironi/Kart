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

    def __recursive_read_data(self, dir, level=0):
        filename = [x.name for x in dir.iterdir()]
        if "navigation.yml" in filename:
            nav_file = dir.joinpath("navigation.yml").open()
            nav_data = yaml.load(nav_file.read(), Loader=Loader)
            paths = [dir.joinpath(x["location"]) for x in nav_data]
        else:
            paths = dir.iterdir()
            nav_data = []

        for i, item in enumerate(paths):
            if item.is_file():
                object = self.collect_single_file(item)
                slug, page = list(object.items())[0]
                toc_entry = {"title": page["title"], "slug": slug, "level": level}
                self.global_toc.append(toc_entry)
                if object:
                    self.markdown_data.update(object)
            elif item.is_dir():
                toc_entry = {"title": nav_data[i]["name"], "slug": None, "level": level}
                self.global_toc.append(toc_entry)
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

        self.read_data()
        observer.schedule(Handler(), self.dir, recursive=True)


class DocumentationMapper(Mapper):
    def __init__(self, template="page.html"):
        self.template = template

    def map(self, site):

        urls = {}

        map_page = None
        page_link = None

        for slug, page in site["docs"].items():

            if "url" in page:
                url = page["url"]
            elif slug == "index":
                url = "/"
            else:
                url = f"/{slug}/"

            if map_page:
                page["previous_page"] = page_link
            page_link = {"url": url, "title": page["title"]}
            if map_page:
                map_page["data"]["next_page"] = page_link

            map_page = {
                "url": url,
                "data": {**page},
                "template": self.template,
                "renderer": "default_site_renderer",
            }

            urls[slug] = map_page

        for x in site["global_toc"]:
            if x["slug"]:
                x["url"] = urls[x["slug"]]["url"]
            else:
                x["url"] = None

        return urls
