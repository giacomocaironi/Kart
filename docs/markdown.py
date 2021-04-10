import mistune
from kart.markdown import KartMistuneRenderer
from mistune import HTMLRenderer
from mistune.directives.admonition import Admonition, render_ast_admonition
from mistune.scanner import escape
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name


class TextExtractor(HTMLRenderer):
    NAME = "text"

    def text(self, text):
        return escape(text)

    def link(self, link, text=None, title=None):
        if text is None:
            text = link
        s = self._safe_url(link)
        return s + (text or link)

    def image(self, src, alt="", title=None):
        return

    def emphasis(self, text):
        return text

    def strong(self, text):
        return text

    def codespan(self, text):
        escape(text)

    def linebreak(self):
        return ""

    def inline_html(self, html):
        return escape(html)

    def paragraph(self, text):
        return text + ". "

    def heading(self, text, level):
        return text + ". "

    def newline(self):
        return ""

    def thematic_break(self):
        return ""

    def block_text(self, text):
        return text

    def block_code(self, code, info=None):
        return escape(code) + " "

    def block_quote(self, text):
        return text + " "

    def block_html(self, html):
        return escape(html)

    def block_error(self, html):
        return

    def list(self, text, ordered, level, start=None):
        if ordered:
            html = ""
            if start is not None:
                html += str(start)
            return html + text + "\n"
        return text + "\n"

    def list_item(self, text, level):
        return text + "\n"


def markdown_to_text(string):
    return mistune.Markdown(renderer=TextExtractor())(string)


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


class DocumentationMistuneRenderer(KartMistuneRenderer):
    def block_code(self, text, lang):
        if not lang:
            pass
        elif lang == "markdown" and "---" in text:
            formatter = HtmlFormatter(wrapcode=True)
            data = text.split("---")
            yaml_text = "---" + data[1] + "---"
            yaml_lexer = get_lexer_by_name("yaml", stripall=True)
            result = highlight(yaml_text, yaml_lexer, formatter)
            markdown_text = "---".join(data[2:]).strip()
            if markdown_text:
                markdown_lexer = get_lexer_by_name("markdown", stripall=True)
                result += highlight(markdown_text, markdown_lexer, formatter)
            return result
        else:
            lexer = get_lexer_by_name(lang, stripall=True)
            formatter = HtmlFormatter(wrapcode=True)
            return highlight(text, lexer, formatter)


def markdown_to_html(string):
    return mistune.Markdown(
        renderer=DocumentationMistuneRenderer(escape=False),
        plugins=[
            mistune.plugins.plugin_strikethrough,
            mistune.plugins.plugin_footnotes,
            mistune.plugins.plugin_table,
            mistune.plugins.plugin_task_lists,
            mistune.plugins.plugin_def_list,
            Admonition(),
        ],
    )(string)
