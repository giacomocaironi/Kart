from jinja2 import Environment, FileSystemLoader
from feedgen.feed import FeedGenerator
import os
from datetime import timezone, time, datetime


class DefaultSiteRenderer:
    def __init__(
        self, url_function=None, name="main_renderer", template_folder="templates"
    ):
        self.name = name
        self.template_folder = template_folder
        self.url_function = url_function

    def date_to_string(self, date):
        return date.strftime("%b %d, %Y")

    def render(self, map, site, build_location="_site"):
        self.map = map
        env = Environment(loader=FileSystemLoader(self.template_folder))
        for page in map.values():
            if self.name != page["renderer"]:
                continue
            template = ""
            if "template" in page["data"].keys():
                template = page["data"]["template"]
            if not template:
                template = page["default_template"]
            jinja_template = env.get_template(template)
            jinja_template.globals.update(
                url=self.url_function, date_to_string=self.date_to_string
            )
            page["data"]["url"] = page["url"]
            rendered_file = jinja_template.render(page=page["data"], site=site)
            os.makedirs(build_location + page["url"], exist_ok=True)
            with open(build_location + page["url"] + "index.html", "w") as f:
                f.write(rendered_file)


class DefaultFeedRenderer:
    def __init__(self, name="feed_renderer", collections=["posts"]):
        self.name = name
        self.collections = collections
        self.url_function = None

    def render(self, map, site, build_location="_site"):
        base_url = site["config"]["base_url"]
        for name, page in map.items():
            if self.name != page["renderer"]:
                continue
            fg = FeedGenerator()
            fg.title(site["config"]["name"])
            if not base_url:
                fg.id("base_url/")
            else:
                fg.id(base_url)
            fg.link({"href": base_url})
            fg.link({"href": base_url + page["url"], "rel": "self"})

            feed_entries = []

            for collection in self.collections:
                for object in site[collection]:
                    feed_entries.append([collection, object])

            feed_entries.sort(key=lambda x: x[1]["date"])

            for collection, entry in feed_entries:
                fe = fg.add_entry()
                if "title" in entry.keys():
                    fe.title(entry["title"])
                elif "name" in entry.keys():
                    fe.title(entry["name"])
                if "description" in entry.keys():
                    fe.description(entry["description"])
                elif "short_content" in entry.keys():
                    fe.description(entry["short_content"])
                fe.updated(
                    datetime.combine(entry["date"], time(12), tzinfo=timezone.utc)
                )
                fe.id(self.url_function(collection, entry["slug"]))
                fe.link({"href": self.url_function(collection, entry["slug"])})
            fg.atom_file(build_location + page["url"])
