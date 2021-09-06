import math
import queue
import traceback
from collections import UserDict, OrderedDict
from datetime import datetime
from http.server import SimpleHTTPRequestHandler
from pathlib import Path

from watchdog.observers import Observer


class KartObserver(Observer):
    """Extends whatchdog observer to execute a function after each event"""

    def __init__(self, action):
        super().__init__()
        self.action = action

    def run(self):
        """Ovverrides Observer.run() to execute an function each time an even is handled"""
        while self.should_keep_running():
            try:
                self.dispatch_events(self.event_queue, self.timeout)
                if self.event_queue.empty():
                    self.action()
            except queue.Empty:
                pass
            except Exception:
                print(traceback.format_exc())


class KartRequestHandler(SimpleHTTPRequestHandler):
    """"""

    def do_GET(self):
        self.action(self, self.path)


class KartDict(OrderedDict):
    """"""

    def __iter__(self):
        return iter(self.values())


class KartMap(KartDict):
    """"""

    def __init__(self, initial_data={}, site_url="", *args, **kwargs):
        super().__init__(initial_data, *args, **kwargs)
        self.site_url = site_url

    def url(self, *name):
        name = ".".join(name)
        if not name:
            return ""
        if name in self.keys():
            return self.site_url + self[name]["url"]
        elif name + ".1" in self.keys():
            return self.site_url + self[name + ".1"]["url"]
        elif "http" in name:
            return name
        elif "/" in name:
            return self.site_url + name
        print(f'Invalid url: "{name}"')
        return ""


def paginate(
    objects,
    per_page: int,
    template: str,
    base_url: str,
    slug: str,
    additional_data: dict = {},
):
    """"""
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
            "url": base_url + f"{i}/" if i > 1 else base_url,
            "data": data,
            "template": template,
            "renderer": "default_site_renderer",
        }
    return urls


def date_to_string(date: datetime) -> str:
    "Formats a date to be displayed"
    return date.strftime("%b %d, %Y")


def id_from_path(base_dir: Path, path: Path) -> str:
    "Return the identifier of a page from its relative filepath"
    path = path.relative_to(base_dir)
    id = ".".join(path.parts)[: -len(path.suffix)]
    return id


def merge_dicts(a: dict, b: dict) -> dict:
    """Merge two dicts"""
    for key in b:
        if key not in a:
            a[key] = b[key]
        else:
            if isinstance(b[key], dict):
                if isinstance(a[key], dict):
                    merge_dicts(a[key], b[key])
                else:
                    raise Exception
