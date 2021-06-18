from pathlib import Path

Path("collections/posts").mkdir(parents=True, exist_ok=True)
Path("taxonomies/tags").mkdir(parents=True, exist_ok=True)
Path("data").mkdir(parents=True, exist_ok=True)
Path("pages").mkdir(parents=True, exist_ok=True)
Path("root").mkdir(parents=True, exist_ok=True)
Path("static/css").mkdir(parents=True, exist_ok=True)
Path("static/js").mkdir(parents=True, exist_ok=True)
