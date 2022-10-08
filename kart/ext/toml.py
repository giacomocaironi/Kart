from pathlib import Path

import tomli

from kart.miners import DefaultMiner
from kart.utils import id_from_path


class TomlDataMiner(DefaultMiner):
    """Miner that get yaml data from the ``data`` folder"""

    extensions = (".toml",)

    def __init__(self, directory: str = "data"):
        "Initializes miner. Sets the ``name`` and ``dir`` variables"
        self.dir = Path(directory)
        self.name = "data"

    def collect_single_file(self, file: Path, config: dict) -> str:
        """Users tomli to get data from a toml file"""
        with file.open("rb") as f:
            slug = id_from_path(self.dir, file)
            return {slug: tomli.load(f)}
