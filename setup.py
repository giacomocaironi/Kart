import setuptools


with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="Kart",
    version="0.2.0",
    author="Giacomo Caironi",
    author_email="giacomo.caironi@gmail.com",
    description="A very flexible static site generator written in python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/giacomocaironi/Kart",
    packages=setuptools.find_packages(),
    install_requires=[
        "jinja2",
        "pyyaml",
        "markdown",
        "python-frontmatter",
        "feedgen",
        "paka.cmark",
    ],
)
