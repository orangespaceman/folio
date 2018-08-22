---
title: JS Tweening boxes
excerpt: Experiments with a JavaScript tweening class that allows smooth scrolling of html elements
links:
 code: https://github.com/orangespaceman/js-tweening-boxes
 demo: https://orangespaceman.github.io/js-tweening-boxes/
images:
  featured: featured.png
  thumbs:
    desktop: thumb-desktop.png
technologies:
  - HTML
  - CSS
  - JavaScript
---

## Overview

I don't know if this will ever come in useful, but i created this a year or so ago as a proof-of-concept.  It uses a parent html element in a similar way to a Photoshop or Flash mask, shifting the position of the 'stage' below to move and display child elements based on user interaction.

I used the [jstween library](http://jstween.blogspot.com/) to handle the movement, and wrote some JavaScript to handle the logic.

Click on one of the links to move the content...

{% include ArticleIframe/ArticleIframe.html src="https://orangespaceman.github.io/js-tweening-boxes/" ratio="50" %}

The html is pretty simple, just a number of div elements with a class of 'box', within a parent container.

{% highlight html linenos %}
<div id="stagecontainer">
  <div id="stage">
    <div class="box" id="boxlinks">
      <h3>box links</h3>
      <ul>
        <li><a href="#box1">box 1</a></li>
          ...
        <li><a href="#box9">box 9</a></li>
      </ul>
    </div>

    <div class="box" id="box1">
      <h3>box 1</h3>
      <p>Lorem ipsum ...</p>
      <p><a class="back" href="#boxlinks">&laquo; back</a></p>
    </div>

    ...

    <div class="box" id="box9">
      <h3>box 9</h3>
      <p>Lorem ipsum ...</p>
      <p><a class="back" href="#boxlinks">&laquo; back</a></p>
    </div>
  </div>
</div>
{% endhighlight %}

The CSS is used to set a fixed size for the main container, and to style each box within this container.  This allows the content to be displayed in a nice way if JavaScript is not available.  The only difference is in this case, each box would be displayed one below the next, rather than having a different arrangement.

{% highlight css linenos %}
#stage {
    width : 400px;
    height : 250px;
    overflow : hidden;
}

.box {
    width : 300px;
    height : 150px;
}
{% endhighlight %}


The JavaScript loops through each box, adding a few extra CSS styles that allow it to be positioned.  It also sets listeners on the 'box' and 'back' links, and when they are pressed, the stage 'scrolls' to this position.

It is possible to tweak quite a few styles easily.  To change the tween type, and time it takes to complete a tween, just change the two values you use when initialising the JavaScript:

{% highlight javascript linenos %}
// initialise the stage scroller, set default values
stageScroller.init(Tween.elasticEaseOut, 3)
{% endhighlight %}

If you want to change the positioning of the boxes, just change the following two lines in the main JavaScript file.  At the moment, it places them at various points around a circle, but there's no reason why they can't be positioned completely randomly.

{% highlight javascript linenos %}
this.boxes[x].top = Math.round(Math.cos((2 * Math.PI * x)/this.boxes.length) * 480);
this.boxes[x].left = Math.round(Math.sin((2 * Math.PI * x)/this.boxes.length) * 480);
{% endhighlight %}

