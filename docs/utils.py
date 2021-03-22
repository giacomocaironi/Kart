import mistune
from mistune import HTMLRenderer
from mistune.directives.toc import (
    DirectiveToc,
    md_toc_hook,
    render_ast_theading,
    render_ast_toc,
    render_html_theading,
)
from mistune.scanner import escape
from slugify import slugify


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


class TocMarkdown(mistune.Markdown):
    def parse(self, s, state=None):
        if state is None:
            state = {}
        s, state = self.before_parse(s, state)
        tokens = self.block.parse(s, state)
        tokens.append({"type": "toc", "raw": None, "params": ("Table of Contents", 3)})
        tokens = self.before_render(tokens, state)
        result = self.block.render(tokens[-1:], self.inline, state)
        result = self.after_render(result, state)
        return result


def record_toc_heading(text, level, state):
    tid = slugify(text)
    state["toc_headings"].append((tid, text, level))
    return {"type": "theading", "text": text, "params": (level, tid)}


def render_html_toc(toc, title, _):
    s = ""
    if title:
        s += f'<div class="title">{title}</div>'
    if not toc:
        return s
    for k, text, level in toc:
        if level > 1:
            text = f'<span class="d-inline-block pl-{10*(level-1)}">{text}</span>'
        s += f'<a href="#{k}">{text}</a>'
    return s


class TocPlugin(DirectiveToc):
    def __call__(self, md):
        self.register_directive(md, "toc")

        md.block.tokenize_heading = record_toc_heading
        md.before_parse_hooks.append(self.reset_toc_state)
        md.before_render_hooks.append(md_toc_hook)

        if md.renderer.NAME == "html":
            md.renderer.register("toc", render_html_toc)
            md.renderer.register("theading", render_html_theading)
        elif md.renderer.NAME == "ast":
            md.renderer.register("toc", render_ast_toc)
            md.renderer.register("theading", render_ast_theading)


def markdown_to_toc(string):
    return TocMarkdown(
        renderer=mistune.HTMLRenderer(),
        plugins=[TocPlugin()],
    )(string)
