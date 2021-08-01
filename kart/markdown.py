import mistune
from jinja2 import contextfilter
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
        a = f'<a href="{self.context["url"](link)}"'
        if title:
            a += f' title="{mistune.scanner.escape_html(title)}"'
        a += f">{text}</a>"
        return a

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
        renderer=KartMistuneRenderer(context=context, escape=False),
        plugins=[
            mistune.plugins.plugin_strikethrough,
            mistune.plugins.plugin_table,
            mistune.plugins.plugin_task_lists,
        ],
    )(string)


class TocRenderer(mistune.renderers.BaseRenderer):
    def text(self, text):
        return text

    def heading(self, children, level):
        return {"title": children, "id": slugify(children), "level": level}

    def _get_method(self, name):
        if name in ["heading", "text"]:
            return super(TocRenderer, self)._get_method(name)

        def null(*args, **kwargs):
            return ""

        return null

    def finalize(self, data):
        data = list(data)
        if len(data) == 1:
            return data[0]
        return [x for x in data if x]


def markdown_to_toc(string):
    return mistune.Markdown(
        renderer=TocRenderer(),
    )(string)
