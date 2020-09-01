---
title: Publish your site
index: 6
---
# Publish your site

## Modify the configuration file

Now that you know how to create a blog it is time to publish it. First of all you have to open the main.py file and look for this lines:

```python
kart.config["name"] = "My blog"
kart.config["base_url"] = ""
```
Modify this lines accordingly. The first one will modify the title of your site. The second line is the location where your site will be hosted. It is very important because if your site is not hosted in the root url the site may not be able to load its static files, like CSS. Your site will be ugly and you wont understand why.

## The root folder

In this tutorial we haven't told about the "root" folder, which was created by the quickstart command. Every file you put in this folder will be copied in the _site directory. It is useful for files such as favicons or CNAMES(for custom domains). If you want to add this type of files now is the time to do it.

## Build the site for production

When you want to build your site for publishing it you must use a different command:

```bash
$ python main.py build
```

Now you can push your _site folder to your favourite host. If you are just starting and you know github I suggest looking at their [Github Pages](https://pages.github.com/).

## Where to go

You have only scratched the surface of what Kart is capable to offer. If you want how to create custom templates and mappers, to personalize the look of the site, you can look at the step by step tutorial section. You will learn how to pass custom data to your templates and how to use the jinja2 template engine to modify the look of your site as you like.

The examples section will cover some advanced cases, such as pagination.
