import xml.etree.ElementTree as xml
from datetime import date
from pathlib import Path
from subprocess import PIPE, Popen
from typing import Any, Dict

from jinja2 import pass_context
from jinja2.runtime import Context

from kart.miners import DefaultMiner
from kart.utils import id_from_path, str_to_bool


@pass_context
def asciidoc_to_html(context: Context, asciidoc: str) -> str:
    """Converts asciidoc data to html"""
    parsed_asciidoc = context.environment.from_string(asciidoc).render(context)
    config = context["config"]["code_highlighting"]
    pygments_header = ":source-highlighter: pygments\n"
    if config["noclasses"]:
        pygments_header += ":pygments-css: style\n"
        pygments_header += f':pygments-style: {config["style"]}\n'
    parsed_asciidoc = pygments_header + parsed_asciidoc
    p = Popen(["asciidoctor", "-e", "-"], stdin=PIPE, stdout=PIPE)
    return p.communicate(input=parsed_asciidoc.encode("utf-8"))[0].decode("utf-8")


def asciidoc_to_toc(asciidoc: str) -> str:
    """Extracts a list of header from asciidoc data"""
    asciidoc = ":toc:\n:toclevels: 4\n" + asciidoc
    p = Popen(["asciidoctor", "-e", "-a", "toc", "-"], stdin=PIPE, stdout=PIPE)
    html = p.communicate(input=asciidoc.encode("utf-8"))[0].decode("utf-8")
    toc_xml = xml.fromstring("</div>".join(html.split("</div>")[:2]) + "</div>")[1]

    def parse(ul):
        toc = []
        for li in ul:
            for x in li:
                if x.tag == "a":
                    toc.append(
                        {
                            "title": x.text,
                            "id": x.attrib["href"][1:],
                            "level": int(ul.attrib["class"][-1:]) + 1,
                        }
                    )
                elif x.tag == "ul":
                    toc.extend(parse(x))
        return toc

    return parse(toc_xml)


def parse_asciidoc_header(header: str) -> Dict[str, Any]:
    lines = header.splitlines()[1:]
    metadata = {}
    metadata["title"] = lines[0][2:]
    lines.pop(0)
    if not lines[0].startswith("//") and not lines[0].startswith(":"):
        metadata["author"] = lines[0]
        lines.pop(0)
    for line in lines:
        if line.startswith("//"):
            continue
        key = line.split(":")[1]
        value = ":".join(line.split(":")[2:]).strip()
        if key == "tags":
            value = [x.strip() for x in value.split(",")]
        if key == "date":
            value = date.fromisoformat(value)
        try:
            value = str_to_bool(value)
        except:
            pass
        metadata[key] = value
    return metadata


class AsciidocMiner(DefaultMiner):
    """Base miner that implements collect_single_file() for markup files"""

    extensions = (".adoc",)

    def collect_single_file(self, file: Path, config: dict) -> str:
        """
        Stores the data included in the frontmatter in a dictionary, adds
        the content in the ``content`` field and then return the dictionary
        """
        with file.open("r") as f:
            data = f.read().split("\n\n")
            metadata = parse_asciidoc_header(data[0])
            if "draft" in metadata and metadata["draft"] and not config["serving"]:
                return
            content = "\n\n".join(data[1:])
            slug = id_from_path(self.dir, file)
            data = {}
            data["markup"] = "asciidoc"
            data.update(metadata)
            data["content"] = content
            data["slug"] = slug
            return {slug: data}


class AsciidocCollectionMiner(AsciidocMiner):
    """Miner that looks for data in the ``collections`` folder"""

    def __init__(self, collection: str, directory: str = "collections"):
        "Initializes miner. Sets the ``name``, ``dir`` and ``collection`` variables"
        self.collection = collection
        self.dir = Path() / directory / collection
        self.name = self.collection


class AsciidocTaxonomyMiner(AsciidocMiner):
    """Miner that looks for data in the ``taxonomy`` folder"""

    def __init__(self, taxonomy: str, directory: str = "taxonomies"):
        "Initializes miner. Sets the ``name``, ``dir`` and ``taxonomy`` variables"
        self.taxonomy = taxonomy
        self.dir = Path() / directory / taxonomy
        self.name = self.taxonomy


class AsciidocPageMiner(AsciidocMiner):
    """Miner that get data from the ``pages`` folder"""

    def __init__(self, directory: str = "pages"):
        "Initializes miner. Sets the ``name`` and ``dir`` variables"
        self.dir = Path(directory)
        self.name = "pages"
