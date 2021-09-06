import mistune
from jinja2 import contextfilter
from mistune.directives.admonition import Admonition
from pygments import highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name

from kart.ext.documentation import DocumentationDirective
from kart.markdown import KartMistuneRenderer


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
            formatter = HtmlFormatter(wrapcode=True, hl_lines=[])
            return highlight(text, lexer, formatter)


@contextfilter
def markdown_to_html(context, string):
    return mistune.Markdown(
        renderer=DocumentationMistuneRenderer(context=context, escape=False),
        plugins=[
            mistune.plugins.plugin_strikethrough,
            mistune.plugins.plugin_table,
            mistune.plugins.plugin_task_lists,
            DocumentationDirective(),
            Admonition(),
        ],
    )(string)
