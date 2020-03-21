import setuptools


with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="Kart",
    version="0.0.0",
    author="Giacomo Caironi",
    author_email="giacomo.caironi@gmail.com",
    description="A small static site generator",
    long_description=long_description,
    url="https://github.com/giacomocaironi/Kart",
    packages=setuptools.find_packages(),
)
