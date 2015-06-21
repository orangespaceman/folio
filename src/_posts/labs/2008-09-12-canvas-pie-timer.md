---
title: Canvas Pie Timer
excerpt: A small experiment to test the basic animation potential of canvas, and potentially create a working visual timer system.
links:
 code: https://github.com/thegingerbloke/canvas-pie-timer
 demo: https://thegingerbloke.github.io/canvas-pie-timer/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
technologies:
  - JavaScript
  - Canvas
---

## Overview

The html canvas element offers an enormous potential for scripting graphics.

A while ago I put together a small experiment to test the (very!) basic animation potential of canvas.  I wanted to see whether it would be possible to create a circular timer, to count down X number of seconds, and trigger a function call when complete.

{% include ArticleIframe/ArticleIframe.html src="https://thegingerbloke.github.io/canvas-pie-timer/" ratio="60" %}

The javascript for this test is fairly basic, although I found it difficult to find much helpful documentation online.

The initialisation call takes three arguments, firstly the size of the canvas, then a unique id to add to the new html canvas element, and finally the id of an existing html element in order to attach it to the page.  In this experiment, the canvas element is square, with the circle placed directly at the centre, although it would be simple to change it to any size, and position the circle anywhere within it.

{% highlight javascript linenos %}
// initialise canvas
canvasPieTimer.init(100, "canvaspietimer", "pietimerholder");
{% endhighlight %}

This is just a simple test, but it shows the potential for using javascript to update a graphic numerous times a second, without any significant slowdown on the part of the browser.

It would be very simple to pass in a few more parameters, such as foreground & background colours, time limit, and the function you would like called when the time elapses.

Canvas is set to be introduced properly as part of HTML5, and although it isn't yet fully supported by most major browsers, it certainly looks set to become increasingly popular in future years.
