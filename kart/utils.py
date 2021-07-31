import math
import queue
import traceback
from collections import UserDict
from http.server import SimpleHTTPRequestHandler

from slugify import slugify
from watchdog.observers import Observer


class KartObserver(Observer):
    def run(self):
        while self.should_keep_running():
            try:
                self.dispatch_events(self.event_queue, self.timeout)
                if self.event_queue.empty():
                    self.action()
            except queue.Empty:
                pass
            except Exception:
                print(traceback.format_exc())


class KartRequesHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        try:
            self.action(self, self.path)
        except Exception:
            print(traceback.format_exc())


class KartMap(UserDict):
    def __init__(self, base_url, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.base_url = base_url

    def url(self, *name):
        name = ".".join(name)
        if not name:
            return ""
        if name in self.data.keys():
            return self.base_url + self.data[name]["url"]
        elif name + ".1" in self.data.keys():
            return self.base_url + self.data[name + ".1"]["url"]
        elif "http" in name:
            return name
        elif "/" in name:
            return self.base_url + name
        print("Invalid url")
        return ""


def paginate(objects, per_page, template, base_url, slug, additional_data={}):
    urls = {}
    paginated_objects = [
        objects[x * per_page : (x + 1) * per_page]
        for x in range(max(math.ceil(len(objects) / per_page), 1))
    ]
    for i, objects in enumerate(paginated_objects, 1):

        if i > 1:
            previous_page = f"{slug}.{i-1}"
        else:
            previous_page = ""

        if i < len(paginated_objects):
            next_page = f"{slug}.{i+1}"
        else:
            next_page = ""

        paginator = {
            "objects": objects,
            "index": i,
            "next_page": next_page,
            "previous_page": previous_page,
        }
        data = {"paginator": paginator}
        data.update(additional_data)
        urls[f"{slug}.{i}"] = {
            "url": base_url + f"/{i}/" if i > 1 else base_url,
            "data": data,
            "template": template,
            "renderer": "default_site_renderer",
        }
    return urls


def date_to_string(date):
    return date.strftime("%b %d, %Y")


def slug_from_path(base_dir, path):
    path = path.relative_to(base_dir)
    path = str(path)[: -len(path.suffix)]
    result = slugify(path)
    return path  # result


def merge_dicts(a, b):
    for key in b:
        if key not in a:
            a[key] = b[key]
        else:
            if isinstance(b[key], dict):
                if isinstance(a[key], dict):
                    merge_dicts(a[key], b[key])
                else:
                    raise Exception
