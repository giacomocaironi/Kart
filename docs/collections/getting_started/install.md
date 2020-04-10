---
title: Installation
index: 1
---
# Installation

### Install Python

To build a site using Kart you will need python3. Probably it will come with your OS, but anyway it is useful to install the latest version. You can find the precompiled packages [here](https://www.python.org/downloads/). If you use linux you can the latest version of python with your packet manager.

For linux based distribution I will suggest also checking out [pyenv](https://github.com/pyenv/pyenv), which will let you manage in a better way multiple versions of python at the same time.

### Virtual environments

When creating a python project it is often useful to create a virtual environment. A complete explanation of virtual environments can be found [here](https://docs.python.org/3/tutorial/venv.html). In a nutshell it enables you to separate the project dependencies from code run outside of the project. If you use pyenv creating virtualenvs is a little different, but the instructions can be found in the pyenv repository.

Even though creating a virtual environment is not required, it is recommended.

### Kart

Enter a shell and install Kart using pip, the package manager for python. If you are using a virtual environment, you should first head over to your project directory and activate the virtualenv

```bash
$ pip install Kart
```
This command will install Kart and all its dependencies

You have installad all the software required to create a site using Kart. Now you can go to the the next section to learn how to build a basic blog.
