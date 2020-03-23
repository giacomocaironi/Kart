def url(name, object):
    pass


class AutomaticMapper:
    def __init__(self):
        self.urls = []

    def map(self, site):
        return {}


class DefaultMapper:
    def __init__(self):
        self.rules = []  # a rule is a function
        self.urls = []

    def map(self, site):

        for rule in self.rules:
            self.url.append(rule(site))

        return self.urls


class ManualMapper:
    def __init__(self):
        self.urls = []

    def map(self, site):
        return [
            {
                "name": "about",
                "url": "/blog/about/",
                "data": site["pages"]["about"],
                "default_template": "minimal.html",
                "renderers": ["main_renderer"],
            },
            {
                "name": "index",
                "url": "/blog/",
                "data": site["pages"]["index"],
                "default_template": "minimal.html",
                "renderers": ["main_renderer"],
            },
        ]
