import re
from collections import UserDict

from jinja2 import contextfilter
from slugify import slugify
from watchdog.observers import Observer


class KartObserver(Observer):
    def run(self):
        while self.should_keep_running():
            try:
                self.dispatch_events(self.event_queue, self.timeout)
                if self.event_queue.empty():
                    self.action()
            except Exception:
                continue


class KartMap(UserDict):
    def __init__(self, base_url, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.base_url = base_url

    def url(self, *name):
        name = ".".join(name)
        if not name:
            return ""
        if name in self.data.keys():
            result = self.data[name]["url"]
        elif name + ".1" in self.data.keys():
            result = self.data[name + ".1"]["url"]
        elif "/" in name:
            result = name
        else:
            regex = re.compile(f"{name}[.].")
            regex_list = list(filter(regex.match, self.data.keys()))
            if regex_list:
                result = self.data[regex_list[0]]["url"]
            else:
                return ""
        return self.base_url + result


def paginate(objects, per_page, template, base_url, slug, additional_data={}):
    urls = {}
    paginated_objects = [
        objects[x * per_page : (x + 1) * per_page]
        for x in range(len(objects) // per_page + 1)
    ]
    for i, objects in enumerate(paginated_objects, 1):
        url = f"/{i}/" if i > 1 else "/"
        if i > 2:
            previous_page_url = f"/{i-1}/"
        elif i == 2:
            previous_page_url = "/"
        else:
            previous_page_url = ""
        if i < len(paginated_objects):
            next_page_url = f"/{i+1}/"
        else:
            next_page_url = ""
        paginator = {
            "objects": objects,
            "index": i,
            "next_page_url": base_url + next_page_url if next_page_url else "",
            "previous_page_url": base_url + previous_page_url
            if previous_page_url
            else "",
        }
        data = {"paginator": paginator}
        data.update(additional_data)
        urls.update(
            {
                f"{slug}.{i}": {
                    "url": base_url + url,
                    "data": data,
                    "template": template,
                    "renderer": "default_site_renderer",
                }
            }
        )
    return urls


def date_to_string(date):
    return date.strftime("%b %d, %Y")


@contextfilter
def parse(context, string):
    template = context.environment.from_string(string)
    return template.render(
        page=context["page"], site=context["site"], url=context["url"]
    )


def slug_from_path(base_dir, path):
    path = path.relative_to(base_dir)
    path = str(path)[: -len(path.suffix)]
    result = slugify(path)
    return path  # result
