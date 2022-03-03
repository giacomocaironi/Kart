import mistune
from jinja2 import contextfilter
from jinja2.runtime import Context
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
from slugify import slugify
from pygments.styles import get_style_by_name


class KartMistuneRenderer(mistune.HTMLRenderer):
    """Custom mistune renderers used by markdown_to_html()"""

    def __init__(self, context, *args, **kwargs):
        self.context = context
        super().__init__(*args, **kwargs)

    def link(self, link, text=None, title=None):
        """Renders the ``link`` block"""
        if text is None:
            text = link
        a = f'<a href="{self.context["url"](link)}"'
        if title:
            a += f' title="{mistune.scanner.escape_html(title)}"'
        a += f">{text}</a>"
        return a

    def block_code(self, text, lang):
        """Renders the ``code`` block"""
        if lang:
            lexer = get_lexer_by_name(lang, stripall=True)
            config = self.context["config"]["code_highlighting"]
            formatter = HtmlFormatter(
                wrapcode=True,
                style=get_style_by_name(config["style"]),
                noclasses=config["noclasses"],
                prestyles="color: #EEFFFF" if config["noclasses"] else "",
            )
            return highlight(text, lexer, formatter)
        else:
            return f"<pre><code>{mistune.escape(text.strip())}</code></pre>\n"

    def heading(self, text, level, raw=None):
        """Renders the ``heading`` block"""
        return f"<h{level} id={slugify(text)}>{text}</h{level}>\n"


@contextfilter
def markdown_to_html(context: Context, markdown: str) -> str:
    """Converts markdown data to html"""
    parsed_markdown = context.environment.from_string(markdown).render(context)
    return mistune.Markdown(
        renderer=KartMistuneRenderer(context=context, escape=False),
        plugins=[
            mistune.plugins.plugin_strikethrough,
            mistune.plugins.plugin_table,
            mistune.plugins.plugin_task_lists,
        ],
    )(parsed_markdown)


class TocRenderer(mistune.renderers.BaseRenderer):
    """Mistune renderer used by markdown_to_toc()"""

    SUPPORTED_ELEMENTS = {"heading", "text"}

    def text(self, text):
        """Renders the ``text`` block"""
        return text

    def heading(self, children, level):
        """Renders the ``heading`` block"""
        return {"title": children, "id": slugify(children), "level": level}

    def _get_method(self, name):
        if name in self.SUPPORTED_ELEMENTS:
            return super()._get_method(name)

        def null(*args, **kwargs):
            return ""

        return null

    def finalize(self, data):
        data = list(data)
        if len(data) == 1:
            return data[0]
        return [x for x in data if x]


def markdown_to_toc(markdown: str) -> str:
    """Extracts a list of header from markdown data"""
    return mistune.Markdown(renderer=TocRenderer())(markdown)
