# Kart
A very flexible static site generator written in python

# Getting started
Install Kart with pip
```bash
$ pip install Kart
```

Build the basic structure
```bash
$ python -m kart init
```

In this configuration Kart will only build a basic blog with a paginated blog index and paginated tags. If you want to customize the urls of the blog you will have to modify main.py with custom python code


You can then build and serve your site with this command
```bash
$ python3 main.py serve
```

# Disclaimer
Kart is not yet ready to use in a real-world scenario. It is still in development its api can change abruptly each minor version.

I am currently writing the [documentation](https://giacomocaironi.gitlab.io/Kart) of kart but it is by no mean complete. If you want to look at some examples you can look the docs folder, where the documentation is held, and the source code of the [example site](https://gitlab.com/giacomocaironi/Kart/-/tree/master/kart_quickstart)
