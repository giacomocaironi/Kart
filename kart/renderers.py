from jinja2 import Environment, FileSystemLoader
import os


class JinjaSiteRenderer:
    def __init__(self, name="main_renderer", template_folder="templates"):
        self.name = name
        self.template_folder = template_folder

    def render(self, map, site, url_function, build_location="_site"):
        env = Environment(loader=FileSystemLoader(self.template_folder))
        for page in map:
            if self.name not in page["renderers"]:
                continue
            template = ""
            if "template" in page["data"].keys():
                template = page["data"]["template"]
            if not template:
                template = page["default_template"]
            jinja_template = env.get_template(template)
            rendered_file = jinja_template.render(
                page=page["data"], site=site, url=url_function
            )
            os.makedirs(build_location + page["url"], exist_ok=True)
            with open(build_location + page["url"] + "index.html", "w") as f:
                f.write(rendered_file)
