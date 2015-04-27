---
title: JS Grid Overlay
excerpt: A handy javascript tool allowing you to overlay a grid or graphic to check pixel perfection across browsers
links:
 code: https://github.com/thegingerbloke/js-grid-overlay
 demo: http://thegingerbloke.github.io/js-grid-overlay/
images:
  featured: featured.png
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - JavaScript
collaborators:
  - richardhallows
  - michaelallanson
---

## Overview

When working with layouts demanding cross browser pixel perfection, it is often beneficial to be able to underlay or overlay the design grid or a graphic to check alignment.

This is a javascript technique I developed a few years ago that allows you to do just that.  To show or hide the design grid (or other graphic), just import the following javascript file, and then use the keys **Control** and **;** to show or hide the grid.

There are numerous other useful techniques on the web that offer similar grid-based functionality, but this one differs slightly as it allows you to use a graphic, change it's positioning depending on your situation, and use it either within an element or for the whole page.

## The function call

The function call takes four variables:

  - **gridElement**: the id or html tag to place the grid behind
  - **gridSrc**:  the image source for the grid - relative to the html page
  - **gridPos**:  the CSS positioning statement (eg 'left top' '50% 50%')
  - **gridRepeat**: the CSS repeat value (eg 'no-repeat','repeat-x','repeat-y')

If you would like to overlay a grid (or any other image) over a full design, when you define the gridElement variable, put in an element that does not exist in the document, for example the word 'template'.

Call the following function [when the page has finished loading](http://ejohn.org/projects/flexible-javascript-events/) (or preferably [when the DOM has finished loading](http://dean.edwards.name/weblog/2006/06/again/)).

{% highlight javascript linenos %}
// initialise javascript grid overlay
grid.init("box", "./grid.gif", "left top", "no-repeat");
{% endhighlight %}

Try it on the example below - click in the iframe and then press **Control** and **;**

{% include ArticleIframe/ArticleIframe.html src="http://thegingerbloke.github.io/js-grid-overlay/" ratio="60" %}

## One function call for the entire site:

If you rename all image templates to their corresponding page ids, and place them in a directory called "_templates" you can have every page call up its template automatically.  This is the technique I use at the start of every new site build.

{% highlight javascript linenos %}
var pageid = document.getElementsByTagName("body")[0].id;
grid.init("template", "/_templates/" + pageid + ".jpg", "left top", "no-repeat");
{% endhighlight %}
