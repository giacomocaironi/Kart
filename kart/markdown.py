import mistune
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
import re


class KartMistuneRenderer(mistune.HTMLRenderer):
    def block_code(self, text, lang):
        if not lang:
            text = text.strip()
            return f"<pre><code>{mistune.escape(text)}</code></pre>\n"
        try:
            lexer = get_lexer_by_name(lang, stripall=True)
            formatter = HtmlFormatter(wrapcode=True)
            code = highlight(text, lexer, formatter)
            return code
        except Exception:
            code = mistune.escape(text)
            return f'<pre class="{lang}"><code>{code}</code></pre>\n'

    def header(self, text, level, raw=None):
        slug = re.sub(r"[\W_]+", "-", text)
        return f"<h{level} id={slug}>{text}</h{level}>\n"


DEFINITION_LIST_PATTERN = re.compile(r"[^\n]+\n(:[ \t][^\n]+\n)+")


def parse_def_list(block, m, state):
    lines = m.group(0).split("\n")
    header = {"type": "def_list_header", "text": lines[0]}
    items = []
    for line in lines[1:]:
        items.append({"type": "def_list_item", "text": line[1:].strip()})
    return {"type": "def_list", "children": [header, *items]}


def render_html_def_list(text):
    return f"<dl>{text}</dl>"


def render_html_def_list_header(text):
    return f"<dt>{text}</dt>"


def render_html_def_list_item(text):
    return f"<dd>{text}</dd>"


def plugin_def_list(md):
    md.block.register_rule("def_list", DEFINITION_LIST_PATTERN, parse_def_list)
    md.block.rules.append("def_list")
    if md.renderer.NAME == "html":
        md.renderer.register("def_list", render_html_def_list)
        md.renderer.register("def_list_header", render_html_def_list_header)
        md.renderer.register("def_list_item", render_html_def_list_item)


markdown = mistune.Markdown(
    renderer=KartMistuneRenderer(escape=False),
    plugins=[
        mistune.plugins.plugin_strikethrough,
        mistune.plugins.plugin_footnotes,
        mistune.plugins.plugin_table,
        plugin_def_list,
    ],
)
