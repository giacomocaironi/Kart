from abc import ABC, abstractmethod
from collections import OrderedDict


class ContentModifier(ABC):
    """"""

    @abstractmethod
    def modify(self, site):
        """"""


class MapModifier(ABC):
    """"""

    @abstractmethod
    def modify(self, map, site):
        """"""


class RuleContentModifier(ContentModifier):
    """"""

    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, site):
        for rule in self.rules:
            rule(site)


class RuleMapModifier(MapModifier):
    """"""

    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, map, site):
        for rule in self.rules:
            rule(map, site)


class CollectionSorter(ContentModifier):
    """"""

    def __init__(self, collection, key, reverse=False):
        self.collection = collection
        self.key = key
        self.reverse = reverse

    def modify(self, site):
        data = site[self.collection]
        sorted_data = sorted(data.items(), key=lambda x: x[1][self.key])
        if self.reverse:
            sorted_data.reverse()
        site[self.collection] = OrderedDict(sorted_data)
