from jinja2 import contextfilter
from jinja2.runtime import Context
from subprocess import Popen, PIPE
import xml.etree.ElementTree as xml


@contextfilter
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
