---
title: Index
---
# What is Kart?
Kart is a static site generator written in python. By default it uses Jinja2 templates and Markdown to render the site. It is blog aware but it has also the ability to generate complex sites, such as this one.

# Why should I use it?
Kart comes out of the box with the ability to generate a very simple blog with paginated post and tag indexes. However, in my opinion, it shines when you need extra flexibility, such as when you need more control over the urls of your site

# How does Kart achieve this flexibility?
The core of Kart is an instance of the Kart class. However the majority of the code is done by mappers, miners and renderers, which are custom classes that are responsible for generating the majority of the site. Kart is very flexible because is very easy to get rid of the defaults class and plug in your own classes. An explanation of this can be found in the step by step tutorial and a more complete one in the documentation section of the site

# How do I get started?
If you just want to create a very simple blog head over to the getting started section. If you then want to customize your site or if you don't want to create a blog go to the step by step tutorial.
