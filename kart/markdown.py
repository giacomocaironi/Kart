import mistune
from mistune.directives.base import Directive
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


class Admonition(Directive):
    SUPPORTED_NAMES = {
        "attention",
        "caution",
        "danger",
        "error",
        "hint",
        "important",
        "note",
        "tip",
        "warning",
        "info",
    }

    def parse(self, block, m, state):
        options = self.parse_options(m)
        if options:
            return {"type": "block_error", "raw": "Admonition has no options"}
        name = m.group("name")
        title = m.group("value")
        text = self.parse_text(m)

        rules = list(block.rules)
        rules.remove("directive")
        children = block.parse(text, state, rules)
        return {"type": "admonition", "children": children, "params": (name, title)}

    def __call__(self, md):
        for name in self.SUPPORTED_NAMES:
            self.register_directive(md, name)

        if md.renderer.NAME == "html":
            md.renderer.register("admonition", render_html_admonition)
        elif md.renderer.NAME == "ast":
            md.renderer.register("admonition", render_ast_admonition)


def render_html_admonition(text, name, title=None):
    html = '<section class="admonition ' + name + '">\n'
    if title:
        html += "<p class='admonition-title'>" + title + "</p>\n"
    if text:
        html += '<div class="admonition-text">\n' + text + "</div>\n"
    return html + "</section>\n"


def render_ast_admonition(children, name, title=None):
    return {
        "type": "admonition",
        "children": children,
        "name": name,
        "title": title,
    }


DEFINITION_LIST_PATTERN = re.compile(r"([^\n]+\n(:[ \t][^\n]+\n)+\n?)+")


def parse_def_list(block, m, state):
    lines = m.group(0).split("\n")
    definition_list_items = []
    for line in lines:
        if not line:
            continue
        if line.strip()[0] == ":":
            definition_list_items.append(
                {"type": "def_list_item", "text": line[1:].strip()}
            )
        else:
            definition_list_items.append(
                {"type": "def_list_header", "text": line.strip()}
            )
    return {"type": "def_list", "children": definition_list_items}


def render_html_def_list(text):
    return "<dl>\n" + text + "</dl>\n"


def render_html_def_list_header(text):
    return "<dt>" + text + "</dt>\n"


def render_html_def_list_item(text):
    return "<dd>" + text + "</dd>\n"


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
        mistune.plugins.plugin_task_lists,
        Admonition(),
        plugin_def_list,
    ],
)
