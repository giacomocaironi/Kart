class ContentModifier:
    def modify(self, site):
        raise NotImplementedError


class MapModifier:
    def modify(self, map, site):
        raise NotImplementedError


class RuleContentModifier(ContentModifier):
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, site):
        for rule in self.rules:
            rule(site)


class RuleMapModifier(MapModifier):
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, map, site):
        for rule in self.rules:
            rule(map, site)


class CollectionSorter:
    def __init__(self, collection_name, key, reverse=False):
        self.collection_name = collection_name
        self.key = key
        self.reverse = reverse

    def modify(self, site):
        site[self.collection_name].sort(key=lambda x: x[self.key])
        if self.reverse:
            site[self.collection_name].reverse()
