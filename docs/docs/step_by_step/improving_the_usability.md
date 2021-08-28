---
title: Improving the usability
---
# Improving the usability

Now you should have a working site. However there is no way for a user to move between the pages of the site if they don't know exactly the url of the page. Through the power of Jinja2 templates we will now address this problem.

## Navigation

Let's now modify a little our template

```html
...
  <body>
    {{page}}
    <hr>
    {{site}}
  </body>
</html>
```

If you try to see the site in the browser you will see a very strange page. Instead of your page now there are two python dictionaries. That's because ``page`` and ``site`` are two dictionaries that are passed to every page, and the templates have to use this information to display the page. We can see that the ``page`` dictionary as a ``content`` field and this is what we use to display what we have written.

The most interesting thing however is the ``site`` dict. In it there is a ``pages`` field containing all the pages of our site. We can use this information to create a header to navigate through the pages. In general everytime you don't know how to add a certain feature to your site you should print what information is available to a page, because most of the things can be done simply using Jinja2 templates.

Let's now modify our template so that we can navigate through our site.

```html
...
  <body>

    <nav>
      {% for slug in site.pages %}
        {% if url(slug) == page.url%}
          <a href="{{ url(slug) }}" style="color: red">{{site.pages[slug].title}}</a>
        {% else %}
          <a href="{{ url(slug) }}">{{site.pages[slug].title}}</a>
        {% endif %}
      {% endfor %}
    </nav>

    <h1>{{page.title}}</h1>

    {{page.content|html}}

  </body>
</html>
```

This template is a little more complicated than the previous one. In the navigation part we iterate through each page slug (the slug is the page identifier), then we check if the slug corrisponds to the current page, so that we can style that url differently. Then we create a new link.

To print the page title we first have to retrieve the page with its slug (site.pages[slug]) then we print the title.

To obtain the location of the page we pass the slug to the ``url`` function. We could also have used simply the ``url`` field of a page, just like this

```html
<a href="{{ site.pages[slug].url }}">{{site.pages[slug].title}}</a>
```

However this is not recommended, as the url function makes the link absolute instead of relative, and this makes a big difference when the site grows.

## Site name

In our navigation bar, other than the link to other pages, we should also have the name of our site. We could hardcode it in our template but there is a better way. If we look in the ``site`` dictionary we can see that there is a ``config`` dictionary, and in it a field called ``name``. It contains the name of the site, and it can be accessed from anywhere in our templates. To use it we have to modify our template

```html
...
    <nav>
      {{site.config.name}}
      {% for slug in site.pages %}
...
```

If we see the page in the browser now there should be the word ``Example`` before our links. That's because it is the default name of the site if none is specified. To set its value we have to modify ``main.py``

```python
...

k.config['name'] = 'The name of your site'

k.run()

```

Now there should be the name of your site on the top of every page!

## Reorganize the templates

Currently we have only one template file. However if our site grows we are going to need many more templates. And most of them will have a lot of things in common. To avoid repeating ourselves we can use some features of Jinja2.

The first feature is the ability to include other templates. For example if our navigation bar is used by many templates, we could move it to a new template, and then include it in the other templates, like this

```html
...
  <body>

    {% include 'nav.html' %}

    <h1>{{page.title}}</h1>

    {{page.content|html}}

  </body>
</html>
```

Obviously ``nav.html`` should be the name of the file which you have created.

The second feature is template inheritance. We could create a base template which contains all the boilerplate so that the child templates only concentrate on the important stuff. For example we could have a ``base.html``

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    {% block title %}
      <title></title>
    {% endblock title %}
  </head>
  <body>

    {% block content %}
    {% endblock content %}

  </body>
</html>
```

And then a child template which inherits from ``base.html``

```html
{% extends "base.html" %}

{% block content %}

  {% include 'nav.html' %}

  <h1>{{page.title}}</h1>

  {{page.content|html}}

{% endblock content %}
```

You can learn more about template inheritance [here](https://jinja.palletsprojects.com/en/3.0.x/templates/#template-inheritance).

Now that we have only one template what we have talked about is not really necessary, but this tips will save you a lot of time if you start to have a lot of templates.
