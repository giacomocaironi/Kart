def url(name, object):
    pass


class AutomaticMapper:
    def __init__(self):
        self.urls = []

    def map(self, site):
        return {}


class ManualMapper:
    def __init__(self):
        self.rules = []  # a rule is a function
        self.urls = []

    def map(self, site):

        for rule in self.rules:
            self.urls.extend(rule(site))

        return self.urls
