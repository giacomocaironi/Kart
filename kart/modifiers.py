from abc import ABC, abstractmethod

from kart.utils import KartDict, KartMap


class ContentModifier(ABC):
    """Base ContentModifier class"""

    @abstractmethod
    def modify(self, config: dict, site: KartDict):
        """Takes as input the site and modifies it"""


class MapModifier(ABC):
    """Base MapModifier class"""

    @abstractmethod
    def modify(self, config: dict, site: KartDict, map: KartMap):
        """Takes as input the site and the site map and modifies them"""


class RuleContentModifier(ContentModifier):
    """ContentModifier that executes a list of user defined functions"""

    def __init__(self, rules: list = []):
        self.rules = rules  # a rule is a function

    def modify(self, config: dict, site: KartDict):
        for rule in self.rules:
            rule(site)


class RuleMapModifier(MapModifier):
    """MapModifier that executes a list of user defined functions"""

    def __init__(self, rules: list = []):
        self.rules = rules  # a rule is a function

    def modify(self, config: dict, site: KartDict, map: KartMap):
        for rule in self.rules:
            rule(map, site)


class CollectionSorter(ContentModifier):
    """Modifier which sorts a collection based on a key"""

    def __init__(self, collection, key, reverse=False):
        self.collection = collection
        self.key = key
        self.reverse = reverse

    def modify(self, config: dict, site: KartDict):
        """Sorts the collection"""
        data = site[self.collection]
        sorted_data = sorted(data.items(), key=lambda x: x[1][self.key])
        if self.reverse:
            sorted_data.reverse()
        site[self.collection] = KartDict(sorted_data)
