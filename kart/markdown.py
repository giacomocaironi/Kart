import mistune
from mistune.directives.admonition import Admonition, render_ast_admonition
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
from slugify import slugify


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

    def heading(self, text, level, raw=None):
        return f"<h{level} id={slugify(text)}>{text}</h{level}>\n"


class Admonition(Admonition):
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

    def render_html(self, text, name, title=None):
        html = '<section class="admonition ' + name + '">\n'
        if title:
            html += "<p class='admonition-title'>" + title + "</p>\n"
        if text:
            html += '<div class="admonition-text">\n' + text + "</div>\n"
        return html + "</section>\n"

    def __call__(self, md):
        for name in self.SUPPORTED_NAMES:
            self.register_directive(md, name)

        if md.renderer.NAME == "html":
            md.renderer.register("admonition", self.render_html)
        elif md.renderer.NAME == "ast":
            md.renderer.register("admonition", render_ast_admonition)


def markdown_to_html(string):
    return mistune.Markdown(
        renderer=KartMistuneRenderer(escape=False),
        plugins=[
            mistune.plugins.plugin_strikethrough,
            mistune.plugins.plugin_footnotes,
            mistune.plugins.plugin_table,
            mistune.plugins.plugin_task_lists,
            mistune.plugins.plugin_def_list,
            Admonition(),
        ],
    )(string)
