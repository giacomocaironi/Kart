from jinja2 import Environment, FileSystemLoader
from feedgen.feed import FeedGenerator
import os
from datetime import timezone, time, datetime
import xml.etree.ElementTree as xml


class DefaultSiteRenderer:
    def __init__(
        self,
        url_function=None,
        name="default_site_renderer",
        template_folder="templates",
    ):
        self.name = name
        self.template_folder = template_folder
        self.url_function = url_function
        self.env = Environment(loader=FileSystemLoader(self.template_folder))

    def date_to_string(self, date):
        return date.strftime("%b %d, %Y")

    def render_single(self, page, site):
        if self.name != page["renderer"]:
            return
        template = ""
        if "template" in page["data"].keys():
            template = page["data"]["template"]
        if not template:
            template = page["default_template"]
        jinja_template = self.env.get_template(template)
        page["data"]["url"] = page["url"]

        jinja_template.globals.update(
            url=self.url_function, date_to_string=self.date_to_string
        )
        return jinja_template.render(page=page["data"], site=site)

    def render(self, map, site, build_location="_site"):
        self.map = map
        for page in map.values():
            rendered_file = self.render_single(page, site)
            if rendered_file:
                os.makedirs(build_location + page["url"], exist_ok=True)
                with open(build_location + page["url"] + "index.html", "w") as f:
                    f.write(rendered_file)


class DefaultFeedRenderer:
    def __init__(self, name="default_feed_renderer", collections=["posts"]):
        self.name = name
        self.collections = collections
        self.url_function = None

    def render_single(self, page, site):
        return

    def render(self, map, site, build_location="_site"):
        base_url = site["config"]["base_url"]
        fg = FeedGenerator()
        fg.title(site["config"]["name"])
        if not base_url:
            fg.id("base_url/")
        else:
            fg.id(base_url)
        fg.link({"href": base_url})
        fg.link({"href": base_url + "/atom.xml", "rel": "self"})

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
            fe.updated(datetime.combine(entry["date"], time(12), tzinfo=timezone.utc))
            fe.id(self.url_function(collection, entry["slug"]))
            fe.link({"href": self.url_function(collection, entry["slug"])})
        fg.atom_file(build_location + "/atom.xml")


class DefaultSitemapRenderer:
    def __init__(self, name="default_sitemap_renderer"):
        self.name = name

    def render(self, map, site, build_location="_site"):
        base_url = site["config"]["base_url"]
        root = xml.Element("urlset")
        root.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
        for x in [
            x["url"] for x in map.values() if x["renderer"] == "default_site_renderer"
        ]:
            url = xml.SubElement(root, "url")
            loc = xml.SubElement(url, "loc")
            loc.text = base_url + x
        with open(build_location + "/sitemap.xml", "w") as f:
            f.write(
                '<?xml version="1.0" encoding="UTF-8"?>' + xml.tostring(root).decode()
            )
