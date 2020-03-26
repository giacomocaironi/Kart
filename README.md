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
You can then build and serve your site executing this script
```bash
python3 main.py serve
```
# Disclaimer
Kart is not yet ready to use in a real-world scenario, as it laks the necessary defaults to even render a simple blog without writing custom python code

If you want an example of a simple site you can look at the test_site folder

A complete explanation of the architecture and a step-by-step tutorial will be written soon
