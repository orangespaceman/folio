---
title: JavaScript Copter, with Canvas
excerpt: An attempt to recreate the classic flash 'copter' game using Javascript and canvas
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/js-canvas-copter
 demo: http://thegingerbloke.github.io/js-canvas-copter/
images:
  featured: featured.png
  thumbs:
    desktop: thumb-desktop.png
technologies:
  - JavaScript
  - Canvas
---

# JavaScript Copter, with Canvas

As a big fan of both the [original flash copter game](http://www.coptergame.net/) and the various phone conversions, I decided to try to recreate the game using Javascript and the canvas element.  A few evenings of tinkering later, I've managed to come up with this:

Click anywhere in the game to start.  Hold the mouse button down to rise, let go to fall.

<iframe class="ArticleIframe" src="http://thegingerbloke.github.io/js-canvas-copter/" width="600" height="430"></iframe>

To play this game you need to use a browser that supports the canvas element.

The game is initialised by the javascript call below:


{% highlight javascript linenos %}
// initialise the copter
var options = {
    copter : {
        height : 15,
        width : 30
    },
    canvas : {
        height : 300,
        width : 500,
        refreshRate : 20
    }
};

jsCopter.init("jscopter", "jscopter-container", options);
{% endhighlight %}


The **options** variable here contains a list of potential options that you can set to customise the game - look at the top of the javascript file to see a full list.  The initialisation call takes three parameters, the id of the new copter canvas element, the id of the html element to create the canvas in, and the options to initialise the game with.

It's not amazing; there are plenty of speed/optimisation issues, some code fudges, and the hit detection isn't very good. I haven't spent too long thinking up the game logic either, the floor and ceiling could certainly be improved.   But it's a proof of concept and an interesting display of the possibilities (and limitations) of Canvas.
