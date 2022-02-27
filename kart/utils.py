import math
import queue
import traceback
from collections import OrderedDict
from datetime import datetime
from http.server import SimpleHTTPRequestHandler
from pathlib import Path
from typing import Callable, List

from watchdog.observers import Observer


class KartObserver(Observer):
    """Extends whatchdog observer to execute a function after each event"""

    def __init__(self, action: Callable):
        """Initializes the observer with the ``action`` variable"""
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
    """Extends SimpleHTTPRequestHandler execute a function for each request"""

    def do_GET(self):
        """Executes self.action() for every get request"""
        self.action(self, self.path)


class KartDict(OrderedDict):
    """Subclass of OrderedDict with a custom iterator"""

    def __iter__(self):
        """Iterate over the dict values instead of the keys"""
        return iter(self.values())


class KartMap(KartDict):
    """Custom dictionary that holds the site map"""

    def __init__(self, initial_data: dict = {}, site_url: str = "", *args, **kwargs):
        super().__init__(initial_data, *args, **kwargs)
        self.site_url = site_url

    def url(self, *name: List[str]) -> str:
        """Takes as input the slug of a page and returns its absolute url"""
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
    objects: list,
    per_page: int,
    template: str,
    base_url: str,
    slug: str,
    renderer: str,
    additional_data: dict = {},
) -> dict:
    """Splits objects and for each group create an entry in the site map"""
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
            "renderer": renderer,
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
