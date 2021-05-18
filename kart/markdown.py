import mistune
from jinja2 import contextfilter
from mistune.directives.toc import (
    DirectiveToc,
    md_toc_hook,
    render_ast_theading,
    render_ast_toc,
    render_html_theading,
)
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
from slugify import slugify


class KartMistuneRenderer(mistune.HTMLRenderer):
    def __init__(self, context, *args, **kwargs):
        self.context = context
        super().__init__(*args, **kwargs)

    def link(self, link, text=None, title=None):
        if text is None:
            text = link

        s = '<a href="' + self.context["url"](link) + '"'
        if title:
            s += ' title="' + mistune.scanner.escape_html(title) + '"'
        return s + ">" + (text or link) + "</a>"

    def block_code(self, text, lang):
        if lang:
            lexer = get_lexer_by_name(lang, stripall=True)
            formatter = HtmlFormatter(wrapcode=True)
            return highlight(text, lexer, formatter)
        else:
            return f"<pre><code>{mistune.escape(text.strip())}</code></pre>\n"

    def heading(self, text, level, raw=None):
        return f"<h{level} id={slugify(text)}>{text}</h{level}>\n"


@contextfilter
def markdown_to_html(context, string):
    return mistune.Markdown(
        renderer=KartMistuneRenderer(
            context=context,
            escape=False,
        ),
        plugins=[
            mistune.plugins.plugin_strikethrough,
            mistune.plugins.plugin_footnotes,
            mistune.plugins.plugin_table,
        ],
    )(string)


class TocMarkdown(mistune.Markdown):
    def parse(self, s, state=None):
        if state is None:
            state = {}
        s, state = self.before_parse(s, state)
        tokens = self.block.parse(s, state)
        tokens.append({"type": "toc", "raw": None, "params": ("Table of Contents", 4)})
        tokens = self.before_render(tokens, state)
        result = self.block.render(tokens[-1:], self.inline, state)
        result = self.after_render(result, state)
        return result


def record_toc_heading(text, level, state):
    tid = slugify(text)
    state["toc_headings"].append((tid, text, level))
    return {"type": "theading", "text": text, "params": (level, tid)}


class TocPlugin(DirectiveToc):
    def __init__(self, func):
        self.func = func
        super().__init__()

    def __call__(self, md):
        self.register_directive(md, "toc")

        md.block.tokenize_heading = record_toc_heading
        md.before_parse_hooks.append(self.reset_toc_state)
        md.before_render_hooks.append(md_toc_hook)

        if md.renderer.NAME == "html":
            md.renderer.register("toc", self.func)
            md.renderer.register("theading", render_html_theading)
        elif md.renderer.NAME == "ast":
            md.renderer.register("toc", render_ast_toc)
            md.renderer.register("theading", render_ast_theading)


def render_html_toc(toc, title, _):
    s = ""
    if not toc:
        return s
    max_level = toc[0][2]
    for k, text, level in toc:
        if level > max_level:
            text = f'<span style="padding-left:{10*(level-max_level)}px">{text}</span>'
        s += f'<a href="#{k}">{text}</a>'
    return s


def markdown_to_toc(string):
    return TocMarkdown(
        renderer=mistune.HTMLRenderer(),
        plugins=[TocPlugin(render_html_toc)],
    )(string)
