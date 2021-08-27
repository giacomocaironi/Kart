from collections import OrderedDict
from pathlib import Path

from watchdog.events import RegexMatchingEventHandler

from kart.miners import DefaultMarkdownMiner

try:
    from yaml import CSafeLoader as YamlLoader
except ImportError:
    from yaml import SafeLoader as YamlLoader
from kart.mappers import Mapper


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


class DefaultDocumentationMapper(Mapper):
    def __init__(self, template="page.html", base_url=""):
        self.template = template
        self.base_url = base_url

    def map(self, site):
        urls = {}
        previous_slug = None
        for slug, page in site["docs"].items():
            if "url" in page:
                url = page["url"]
            elif slug == "index":
                url = "/"
            else:
                url = f"/{slug}/"
            if len(urls):
                page["previous_page"] = previous_slug
                urls[previous_slug]["data"]["next_page"] = slug
            previous_slug = slug
            map_page = {
                "url": self.base_url + url,
                "data": {**page},
                "template": self.template,
                "renderer": "default_site_renderer",
            }
            urls[slug] = map_page
        return urls
