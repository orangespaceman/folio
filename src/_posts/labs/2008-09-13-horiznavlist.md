---
title: Horiznavlist
excerpt: A quick way to turn an unordered list of links into horizontal navigation.
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/horiznavlist
 demo: http://thegingerbloke.github.io/horiznavlist/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - HTML
  - CSS
---

# Horizontal Navigation List

This code quickly turns any unordered list of links into horizontal navigation.  These lists of links should semantically be marked up as an unordered list `UL` element.  The following example shows this is possible simply by adding the class of `horiznavlist` to the parent list element.


<iframe class="ArticleIframe" src="http://thegingerbloke.github.io/horiznavlist/" width="600" height="180"></iframe>


It may be necessary to add a class of `clearfix` in order to correctly position the list, as the containing elements are floated.

{% highlight html linenos %}
<ul id="sitewidenav" class="horiznavlist clearfix">
    <li id="navvisitors"><a href="#">Visitors</a></li>
    <li id="navcourses"><a href="#">Courses</a></li>
    <li id="navresearch"><a href="#">Research</a></li>
    <li id="navfaculties"><a href="#">Faculties</a></li>
    <li id="navvacancies"><a href="#">Job Vacancies</a></li>
</ul>
{% endhighlight %}


The CSS code necessary to implement the horiznavlist is fairly straightforward.

It is necessary to use `!important` to overwrite any default styles that may have been applied elsewhere in the code, meaning horiznavlist can be applied to any list element.


{% highlight css linenos %}
/*
 * ul --> change | into | horizontal | navigation | links
 */
        ul.horiznavlist { }

        /* float selected element and all other links */
        ul.horiznavlist li {
            display : block;
            float : left;
            padding : 0px 6px 0px 0px;
            border-right : 1px solid #333;
            background : none;
        }

        /* remove left padding from first item in a list */
        ul.horiznavlist li:first-child {
            padding-left : 0px !important;
        }

        /* remove right padding from last item in a list */
        ul.horiznavlist li:last-child {
            padding-right : 0px !important;
            border-right : 0px !important;
        }
{% endhighlight %}


It is easy to use a single vertical separator line, by applying a CSS border as is shown in the example above.  However it is just as easy to use a graphic by applying a CSS background image instead.

This is a superior technique to the more commonly seen paragraph text with a pipe character `|` used to separate links, as it adds semantic meaning and the ability to apply styles to each element, as well as to the list in general.
