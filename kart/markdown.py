import mistune
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
from slugify import slugify
from mistune.directives.toc import (
    DirectiveToc,
    md_toc_hook,
    render_ast_theading,
    render_ast_toc,
    render_html_theading,
)


class KartMistuneRenderer(mistune.HTMLRenderer):
    def block_code(self, text, lang):
        if lang:
            lexer = get_lexer_by_name(lang, stripall=True)
            formatter = HtmlFormatter(wrapcode=True)
            return highlight(text, lexer, formatter)
        else:
            return f"<pre><code>{mistune.escape(text.strip())}</code></pre>\n"

    def heading(self, text, level, raw=None):
        return f"<h{level} id={slugify(text)}>{text}</h{level}>\n"


def markdown_to_html(string):
    return mistune.Markdown(
        renderer=KartMistuneRenderer(escape=False),
        plugins=[],
    )(string)


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
