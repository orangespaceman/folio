---
title: JavaScript Canvas Letters Banner
excerpt: Scrolling pixel letters created with JavaScript and canvas
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/canvas-letters/tree/gh-pages/banner
 demo: http://thegingerbloke.github.io/canvas-letters/banner
images:
  featured: featured.png
  thumbs:
    desktop: thumb-desktop.png
technologies:
  - JavaScript
  - Canvas
---

# JavaScript Canvas Letters Banner


Here's a variation on the original  [Canvas Letters](../javascript-canvas-letters) experiment.

This time the words scroll as a banner rather than animating in at fixed positions.

{% include ArticleIframe/ArticleIframe.html src="http://thegingerbloke.github.io/canvas-letters/banner/" ratio="80" %}

When initialising this script, a string of text is passed which renders each letter individually. There are a few optional parameters that control the rendering of the text:

{% highlight javascript linenos %}
var canvasElement = new canvasLettersBanner();
canvasElement.init({
    inline : true,
    canvasId : "canvas-one",
    blockColour : "ff9900",
    canvasColour : "000000",
    textString : "This is a test.",
    clearance : 5,
    speed : 5
});
{% endhighlight %}
