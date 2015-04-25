---
title: Javascript Canvas Letters
excerpt: Animated pixel letters created with JavaScript and canvas
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/canvas-letters
 demo:
images:
  featured: featured.png
  thumbs:
    desktop: thumb-desktop.png
  desktop:
    - a.png
technologies:
  - JavaScript
  - Canvas
---

## Overview

Here's a little JavaScript experiment with canvas to animate letters.

{% include ArticleIframe/ArticleIframe.html src="http://thegingerbloke.github.io/canvas-letters/full-screen/" ratio="90" %}

Each letter is made up of a small matrix containing 35 numbers, representing 5 columns and seven rows.  These are then stored in JavaScript arrays.  The image below displays how the letter A' is turned into an array.

{% highlight javascript linenos %}
characters = {
    "a": [0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1]
};
{% endhighlight %}

When initialising this script, a string of text is passed which renders each letter individually.  There are a few optional parameters that control the rendering of the text:

{% highlight javascript linenos %}
var canvasElement = new canvasLetters();

canvasElement.init({
  inline : true,
  canvasId : "canvas-one",
  blockColour : "ff9900",
  canvasColour : "000000",
  blockSize : 5,
  textString : "This is a test.",
  breakWord : false,
  clearance : 5,
  ordering : 'horizontal',
  loop : true,
  speed : 5,
  animate : true
});
{% endhighlight %}

It's also possible to create a configurable tool to allow the display of letters to be changed on the fly

{% include ArticleIframe/ArticleIframe.html src="http://thegingerbloke.github.io/canvas-letters/inline/" ratio="170" %}
