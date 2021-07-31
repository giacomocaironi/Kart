---
title: Write a documentation
---
# Write a documentation

If you want to write the documentation of you project with Kart you can!, even though Kart is more suited towards sites such as blogs. If you nevertheless want to do it, this is the guide for you. I have also created a cookiecutter so that typing this in you terminal:

```shell-session
$ cookiecutter gl:giacomocaironi/Kart --directory="cookiecutters/documentation"
```

will get you up and running with a documentation without creating it from scratch. In either case I recommend you follow this guide to understand better how a documentation is created with Kart.

## Modify main.py

Tipically a documentation is structured differently from a blog, it's structured more like a tree: the documentation is divided in sections, and this sections can have sub-sections... When using a software that generates a documentation the structure of the site is reflected in the structure of the source files.

From what we have seen Kart doesn't work in this way, there is a distinction between a file and a page. Fortunately in Kart there are two classes that break this rule and accept a tree of files to create a documentation. These two classes are ``DefaultDocumentationMiner`` and ``DefaultDocumentationMapper``. Let's add them to our ``main.py``

```python
...
k.miners = [
  ...
  miners.DefaultDocumentationMiner(directory='docs'),
]

k.mappers = [
  ...
  mappers.DefaultDocumentationMapper(template="documentation.html", base_url='base_url_for_the_documentation')
]
...
```

``DefaultDocumentationMiner`` will look in the directory specified for the documentation files. If you plan on leaving the directory as ``docs`` you can omit the parameter. ``DefaultDocumentationMapper`` will then build the documentation at the specified ``base_url``. If your site is only the documentation you can set this parameter as an empty string or omit it entirely.


## Add some files

Let's start by writing some documentation files in the ``docs`` directory. For example create ``first-page.md``

```markdown
---
title: First documentation page
---
# First documentation page
```

If you go now go to ``localhost:9000/base_url_for_the_documentation/first-page`` you will see that no page is displayed. That's because before adding a new page to the documentation we have to create a ``navigation.yml`` file, where we are going to tell kart how to structure the documentation.

Now create ``navigation.yml`` with this content

```yaml
- page: first-page.md
```

Every time you create a new page you have to modify ``navigation.yml`` and add a new ``page`` field. The order of the pages in the documentation will mirror the order in ``navigation.yml``. Now create a few more pages before moving on to the next section.

## Navigate between pages

Now that we have a few pages we need a way to move between them. To do this we have to modify the Jinja2 template for our documentation.

```html
...

<div>
  {% if 'previous_page' in page %}
    Previous <a href="{{ url(page.previous_page) }}"> {{ site.docs[page.previous_page].title }} </a>
  {% endif %}
  {% if 'next_page' in page %}
    Next <a href="{{ url(page.next_page) }}"> {{ site.docs[page.next_page].title }} </a>
  {% endif %}
</div>

{% endblock content %}
```

In this template we have access to two variables, ``previous_page`` and ``next_page``, which, if set, tells us which pages we have to link to. With this information we can create the necessary links.

## Subsections

Right now our documentation has only one level, it doesn't have any subsections. To create a new subsection simply create a new directory inside the ``docs`` directory, and then create new files inside it.

As we have seen before, every time we add a new page to our documentation we have to modify ``navigation.yml``. In this case we have added a section, not a page, thus the syntax will be slightly different.

```yaml
- page: first-page.md
- page: second-page.md
- section: new-subsection
  name: New subsection
- page: third-page.md
```

In this case ``new-subsection`` is the name of the subsection directory, while ``New subsection`` is the name of the subsection. We are going to need it in the following section. You will also need to create a new ``navigation.yml`` inside the new subsection directory. In this file you can specify new subsections, so there is no limit at the depth of your documentation.

## Navigation menu

Now that our documentation has grown in complexity we can create a sidebar that will display the tree-like structure of the site. To achieve this we have to modify our template file.

```html
...
{% for nav_item in site.docs_global_toc %}

  {% set level = nav_item.level * 15 %}

  {% if nav_item.slug %}

    <a href="{{ url(nav_item.slug) }}" style="padding-left:{{level}}px">
      {{nav_item.title}}
    </a>

  {% else %}

    <h5 class='sidebar-title'>{{nav_item.title}}</h5>

  {% endif %}

{% endfor %}
...
```

Ok let's understand what this snippet does. All the information to create the sidebar is contained in the ``site.docs_global_toc`` variable. This is a list of navigation items. A navigation items contains a ``title``, a ``slug`` and a ``level`` field. If the value of ``slug`` is none, it means that the navigation_item is not a page, but it indicates a new subsection. In that case we don't create a link, but a new html header. The ``level`` field is the section depth of the navigation_item. If it is 0, it means that it is in the top level, 1 that it is in a subsection and so on. In this particular case we multiply it by 15 and use it to add padding to each item.

## Conclusion

You have seen that is possible to create a documentation for you project using Kart. If you want to do it I'd suggest to take also a look at the [source code](https://gitlab.com/giacomocaironi/Kart/-/tree/master/docs) for this documentation, as it's been created with Kart.
