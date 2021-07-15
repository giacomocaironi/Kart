---
title: A minimal site
---
# A minimal site

Previously we have seen how to get up and running with kart by using a predefined template. However if you want to customize your site to your needs you need to know how Kart works. In this step by step guide we will create a custom static site from scratch, and by doing this you will understand how to customize your site to your likings.

First of all you have to create a python file that will tell kart how to build your site. The simplest file is:

```python

from kart import Kart, miners, mappers, renderers

k = Kart()

k.miners = [miners.DefaultPageMiner()]

k.mappers = [mappers.DefaultPageMapper()]

k.renderers = [renderers.DefaultSiteRenderer()]

k.run()

```

Copy this to a file ``main.py``. If we try to build the site as we did in the [Getting started](getting-started) guide our script will error saying that it can't find a directory called ``pages``. This error is caused by DefaultPageMiner. The job of a miner is to collect data, and this particular miner looks for files in the ``pages`` directory. If we want we can modify the directory in which it looks just like this:

```python
k.miners = [miners.DefaultPageMiner(directory='custom_directory')]
```

## Create the first page

Now create the directory and copy the following lines in a file called ``index.md``

```markdown
---
title: Homepage
---

This is the homepage of my beautiful site
```

Now when we will run our file again, our miner should collect the file and store it. Then it will pass this information to the mappers. The role of a mapper is to get information from the miners and output a map of our site. In this case we have added a mapper called ``DefaultPageMapper`` to the list of mappers. This mapper, as we can understand from the name, is designed to work in conjuction with the ``DefaultPageMiner`` we have used in the previous line.

## Try running the site

Now that we have a map of our site we have to pass it to the renderers, in this case only ``DefaultSiteRenderer`` so that it can effectively render the pages and then save the files or serve them through a development server.

However if we try to do it now we get another error, this time complaining about a missing template. This is because our site renderer needs templates in order to function. Kart uses [Jinja2](https://jinja.palletsprojects.com/) as the default templating language. So we have to create a new template called ``pages.html`` in a new folder called ``templates``. Again this names are choosen by default, but you can modify them anytime by adding an argument to the mapper and the renderer.

```python

k.mappers = [mappers.DefaultPageMapper(template='custom_template_file')]

k.renderers = [renderers.DefaultSiteRenderer(template_folder='custom_template_folder')]

```

If for a particular reason you need a different template for a specific page you can specify it by adding a ``template`` field on the top of the markdown file

```markdown
---
title: Homepage
template: different_template.html
---

This is the homepage of my beautiful site
```

## Modify the template

Now try to run the development server as we have seen in the [Getting started](getting-started) guide

```bash
$ python main.py serve
```

There shouldn't be any errors! Hurray! Now in your browser go to ``localhost:9000`` to see a preview of your site. However we see only a blank page. That's because we have to put something in our template. Copy the following lines in the template and let's see if anything changes

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    The site is working
  </body>
</html>

```

If you reload the page you should see that indeed our site is really working! However this is not what we have written in the ``index.md`` file. To to that we have to modify the template:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>{{page.title}}</h1>
    {{page.content|html}}
  </body>
</html>

```

Now our templates takes the content of our page ('page.content'), converts is to html (by using the '|html' filter) and then prints it (this is done by the double curly brackets). Moreover we create a header for the title of the page. If you want to know how the syntax work you should definitely check out the [Jinja2 documentation](https://jinja.palletsprojects.com/), our you can follow along and learn it as we progress through the tutorial.

## Adding new pages

Let's add a few more pages. Like we have done with the first page, you simply need to create a new markdown file in the ``pages`` folder

```markdown
---
title: Second page
---

Second page
```

To access the page you have to go to ``localhost:9000/name_of_the_file/`` in your browser. So, for example, you have created a new file called ``new_file.md`` you have to go to ``localhost:9000/new_file/``. You didn't have to do it for the first page because if you create a page called ``index.md`` Kart thinks that it should be at the root of your file.

However this is only a default location. You can change the url of a page by adding an url field at the start of the file.

```markdown
---
title: Second page
url: /new/url/of/the/page/
---

Second page
```

It is important to add a backslash both at the beginning and at the end of the url. Now you should see your page at ``localhost:9000/new/url/of/the/page/``

Now you should have a working site. However a site like this is not really usable. In the following chapter we will address this and improve the overall look and usability of the site.
