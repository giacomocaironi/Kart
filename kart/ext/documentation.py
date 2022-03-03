from pathlib import Path

from slugify import slugify
from watchdog.events import RegexMatchingEventHandler

from kart.miners import DefaultMarkupMiner
from kart.utils import KartDict

try:
    from yaml import CSafeLoader as YamlLoader
except ImportError:
    from yaml import SafeLoader as YamlLoader

import importlib
import inspect

import mistune
from jinja2 import contextfilter
from jinja2.runtime import Context
from mistune.directives import Directive

from kart.mappers import Mapper
from kart.ext.markdown import KartMistuneRenderer, TocRenderer
from kart.utils import KartObserver


class DefaultDocumentationMiner(DefaultMarkupMiner):
    """Miner that recursively looks for data in the ``docs`` folder"""

    def __init__(self, directory: str = "docs"):
        "Initializes miner. Sets the ``dir`` variable"
        self.dir = Path(directory)

    def __recursive_read_data(self, config: dict, dir: Path, level: int = 0):
        """Helper function"""
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
                object = self.collect_single_file(item, config)
                slug, page = list(object.items())[0]
                toc_entry = {"title": page["title"], "slug": slug, "level": level}
                self.docs_global_toc.append(toc_entry)
                if object:
                    self.markdown_data.update(object)
            elif item.is_dir():
                toc_entry = {"title": nav_data[i]["name"], "slug": None, "level": level}
                self.docs_global_toc.append(toc_entry)
                self.__recursive_read_data(config, item, level + 1)

    def read_data(self, config: dict):
        self.markdown_data = KartDict()
        self.docs_global_toc = []
        self.__recursive_read_data(config, self.dir)

    def collect(self, config: dict):
        return {"docs": self.markdown_data, "docs_global_toc": self.docs_global_toc}

    def start_watching(self, config: dict, observer: KartObserver):
        """Registers a watchdog handler that calls read_data() when a file has changed"""

        class Handler(RegexMatchingEventHandler):
            def on_any_event(_, event):
                self.read_data()

        self.read_data(config)
        observer.schedule(Handler(), self.dir, recursive=True)


class DefaultDocumentationMapper(Mapper):
    """Mapper intended to be used with DefaultDocumentationMapper"""

    def __init__(self, template: str = "page.html", base_url: str = ""):
        self.template = template
        self.base_url = base_url

    def map(self, config: dict, site: KartDict) -> dict:
        urls = {}
        previous_slug = None
        for slug, page in site["docs"].items():
            if "url" in page:
                url = page["url"]
            elif slug == "index":
                url = "/"
            else:
                url = "/" + "/".join(slugify(part) for part in slug.split(".")) + "/"
            if "template" in page:
                template = page["template"]
            else:
                template = self.template
            if len(urls):
                page["previous_page"] = previous_slug
                urls[previous_slug]["data"]["next_page"] = slug
            previous_slug = slug
            map_page = {
                "url": self.base_url + url,
                "data": {**page},
                "template": template,
                "renderer": "default_site_renderer",
            }
            urls[slug] = map_page
        return urls


class DocumentationDirective(Directive):
    """Mistune class that add the ``function`` and ``class`` directive to build a techical documentation"""

    def parse(self, block, m, state):
        name = m.group("name")
        title = m.group("value")
        text = self.parse_text(m)
        children = block.parse(text, state, block.rules)
        return {"type": name, "children": children, "params": (name, title)}

    def render_html_function(self, text, name, loc):
        """Renders the ``function`` directive"""
        module_name = ".".join(loc.split(".")[:-1])
        func_name = loc.split(".")[-1]
        module = importlib.import_module(module_name)
        module = importlib.reload(module)
        func = module.__dict__[func_name]
        sig = inspect.signature(func)
        html = "<dl>"
        html += f'<dt id="{loc}">function {loc}{sig}</dt>'
        html += f"<dd><p>{func.__doc__}</p></dd>"
        html += "</dl>"
        return html

    def render_html_class(self, text, name, loc):
        """Renders the ``class`` directive"""
        module_name = ".".join(loc.split(".")[:-1])
        func_name = loc.split(".")[-1]
        module = importlib.import_module(module_name)
        module = importlib.reload(module)
        cls = module.__dict__[func_name]
        parents = []
        for p in cls.__bases__:
            parents.append(p.__module__ + "." + p.__name__)
        html = '<dl classs="class">'
        html += f'<dt id="{loc}">class {loc}({", ".join(parents)})</dt>'
        html += f"<dd><p>{cls.__doc__}</p></dd>"
        functions = []
        for x in inspect.getmembers(cls):
            try:
                if x[1].__module__ != module_name:
                    continue
                if x[1].__qualname__.split(".")[0] != cls.__name__:
                    continue
            except Exception:
                continue
            functions.append(cls.__dict__[x[0]])
        if functions:
            html += "<dl>"
        for func in functions:
            sig = inspect.signature(func)
            if inspect.isabstract(cls) and func.__name__ in cls.__abstractmethods__:
                html += "<dt>@abstractmethod</dt>"
            html += f"<dt>{func.__name__}{sig}</dt>"
            if inspect.getdoc(func):
                html += f"<dd><p>{inspect.getdoc(func)}</p></dd>"
        if functions:
            html += "</dl>"

        html += "</dl>"
        return html

    def render_ast(self, children, name, title=None):
        return {"type": name, "children": children, "name": name, "title": title}

    def __call__(self, md):
        for name in {"function", "class"}:
            self.register_directive(md, name)
            if md.renderer.NAME == "ast":
                md.renderer.register(name, self.render_ast)

        if md.renderer.NAME == "html":
            md.renderer.register("function", self.render_html_function)
            md.renderer.register("class", self.render_html_class)


@contextfilter
def markdown_to_html(context: Context, markdown: str) -> str:
    """Converts markdown data to html.
    It supports markdown directives to extract the documentation out of python
    docstrings.
    """
    return mistune.Markdown(
        renderer=KartMistuneRenderer(context=context, escape=False),
        plugins=[DocumentationDirective()],
    )(markdown)


class DocumentationTocRenderer(TocRenderer):
    """Mistune renderer used by markdown_to_toc()"""

    def __init__(self):
        self._methods = {"class": self._class}
        self.SUPPORTED_ELEMENTS = {"heading", "text", "class", "function"}

    def function(self, _, type, name, **kwargs):
        """Renders the ``function`` directive"""
        return {"title": name.split(".")[-1], "id": name, "level": 2}

    def _class(self, _, type, name, **kwargs):
        """Renders the ``class`` directive"""
        return {"title": name.split(".")[-1], "id": name, "level": 2}


def markdown_to_toc(markdown: str) -> str:
    """Extracts a list of header from markdown data"""
    return mistune.Markdown(
        renderer=DocumentationTocRenderer(),
        plugins=[DocumentationDirective()],
    )(markdown)
