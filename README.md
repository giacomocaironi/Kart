# Kart
A very flexible static site generator written in python

# Getting started
Install Kart with pip
```bash
pip install Kart
```
Create a new file named main.py in your top directory with this code
```python
from kart import Kart

kart = Kart()
kart.run()
```
In this configuration Kart will only build a basic blog with a paginated blog index and paginated tags. If you want to customize the urls of the blog you will have to modify main.py with custom python code

For the folder structure you can look at the test_blog example

You can then build and serve your site executing this script
```bash
python3 main.py serve
```
# Disclaimer
Kart is not yet ready to use in a real-world scenario because it is in its early stage of its life and its api can change abruptly each minor verision.

If you want an example of a simple site you can look at the test_* folders

A complete explanation of the architecture and a step-by-step tutorial will be written soon
