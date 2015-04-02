---
title: Select All Checkboxes
excerpt: A javascript snippet that allows you to use a 'select all' checkbox to automatically fill multiple form elements
links:
 code: https://github.com/thegingerbloke/select-all-checkbox
 demo: http://thegingerbloke.github.io/select-all-checkbox/
images:
  featured: featured.png
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - JavaScript
---

# HTML forms - Select all checkbox

When a long form is necessary on a page, it can be daunting (not to mention time-intensive) for a user to fill it out completely.  This script allows a 'parent' checkbox to control the input value of many child checkboxes, potentially saving time and energy clicking each one individually.

{% include ArticleIframe/ArticleIframe.html src="http://thegingerbloke.github.io/select-all-checkbox/" ratio="70" %}

The function call to enable this is straightforward. It takes two parameters:

  - **parentcheckbox** - the id of the parent check box that toggles the rest
  - **childboxcontainer** - the id of the html container for all child checkboxes

{% highlight javascript linenos %}
// initialise the 'select all' checkbox
formUtil.toggleCheckboxes('checkboxall', 'childboxes');
{% endhighlight %}
