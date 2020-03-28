from jinja2 import Environment, FileSystemLoader
from feedgen.feed import FeedGenerator
import os


class DefaultSiteRenderer:
    def __init__(self, name="main_renderer", template_folder="templates"):
        self.name = name
        self.template_folder = template_folder

    def url(self, name):
        try:
            result = self.map[name]["url"]
        except:
            result = self.map[name + ".1"]["url"]
        return result

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
                url=self.url, date_to_string=self.date_to_string
            )
            rendered_file = jinja_template.render(page=page["data"], site=site)
            os.makedirs(build_location + page["url"], exist_ok=True)
            with open(build_location + page["url"] + "index.html", "w") as f:
                f.write(rendered_file)


class DefaultFeedRenderer:
    def __init__(self, name="feed_renderer"):
        self.name = name

    def render(self, map, site, build_location="_site"):
        base_url = site["config"]["base_url"]
        for name, page in map.items():
            if self.name != page["renderer"]:
                continue
            fg = FeedGenerator()
            fg.title(site["config"]["name"])
            fg.id(base_url)
            fg.link({"href": base_url})
            fg.link({"href": base_url + "/" + name, "rel": "self"})
            for post in site["posts"][:10]:
                fe = fg.add_entry()
                fe.title(post["title"])
                fe.id(base_url + map["posts." + post["slug"]]["url"])
                fe.link(
                    {"href": base_url + map["posts." + post["slug"]]["url"],}
                )
                fe.description(post["short_content"])
            fg.atom_file(os.path.join(build_location, "atom.xml"))
