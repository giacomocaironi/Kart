import re

import mistune
from jinja2 import Environment
from mistune.directives.base import Directive
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name

from kart.utils import date_to_string


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

    def render_html(self, text, name, title=None):
        html = '<section class="admonition ' + name + '">\n'
        if title:
            html += "<p class='admonition-title'>" + title + "</p>\n"
        if text:
            html += '<div class="admonition-text">\n' + text + "</div>\n"
        return html + "</section>\n"

    def render_ast(self, children, name, title=None):
        return {
            "type": "admonition",
            "children": children,
            "name": name,
            "title": title,
        }

    def __call__(self, md):
        for name in self.SUPPORTED_NAMES:
            self.register_directive(md, name)

        if md.renderer.NAME == "html":
            md.renderer.register("admonition", self.render_html)
        elif md.renderer.NAME == "ast":
            md.renderer.register("admonition", self.render_ast)


DEFINITION_LIST_PATTERN = re.compile(r"([^\n]+\n(:[ \t][^\n]+\n)+\n?)+")


markdown = mistune.Markdown(
    renderer=KartMistuneRenderer(escape=False),
    plugins=[
        mistune.plugins.plugin_strikethrough,
        mistune.plugins.plugin_footnotes,
        mistune.plugins.plugin_table,
        mistune.plugins.plugin_task_lists,
        mistune.plugins.plugin_def_list,
        Admonition(),
    ],
)


def markdown_generator(site, map):
    def markdown_func(string):
        env = Environment()
        env.filters.update(date_to_string=date_to_string)
        template = env.from_string(string)
        template.globals.update(url=map.url)
        markdown = mistune.Markdown(
            renderer=KartMistuneRenderer(escape=False),
            plugins=[
                mistune.plugins.plugin_strikethrough,
                mistune.plugins.plugin_footnotes,
                mistune.plugins.plugin_table,
                mistune.plugins.plugin_task_lists,
                mistune.plugins.plugin_def_list,
                Admonition(),
            ],
        )
        return markdown(template.render(site=site))

    return markdown_func
