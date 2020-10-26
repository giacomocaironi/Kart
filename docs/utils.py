import mistune
from mistune import HTMLRenderer
from mistune.scanner import escape


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
        return "\n"

    def inline_html(self, html):
        return escape(html)

    def paragraph(self, text):
        return text + "\n"

    def heading(self, text, level):
        return text

    def newline(self):
        return ""

    def thematic_break(self):
        return "\n"

    def block_text(self, text):
        return text

    def block_code(self, code, info=None):
        return escape(code) + "\n"

    def block_quote(self, text):
        return text + "\n"

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


markdown = mistune.Markdown(renderer=TextExtractor())
