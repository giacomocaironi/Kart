from jinja2 import Environment, FileSystemLoader
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
