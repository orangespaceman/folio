---
title: CSS3 Transition Blocks
excerpt: Playing around with CSS3 transitions
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/css3-transition-blocks
 demo: http://thegingerbloke.github.io/css3-transition-blocks/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - CSS
---

# CSS3 Transition Blocks

CSS3 transitions allow you to create animations without needing to use JavaScript.  After reading an [article on A List Apart](http://www.alistapart.com/articles/understanding-css3-transitions/) I created a little experiment to test this.

The example below contains 25 blocks of different dimensions.  Various CSS values are alternating between two states.

(At the moment this only works in Safari/Chrome, but these transitions will soon be available to most modern browsers.)

{% include ArticleIframe/ArticleIframe.html src="http://thegingerbloke.github.io/css3-transition-blocks/" ratio="80" %}

The code is straightforward, each block is a simple HTML element:

{% highlight html linenos %}
<p id="element-1" class="el">1</p>
<p id="element-2" class="el">2</p>
...
<p id="element-25" class="el">25</p>
{% endhighlight %}

For each element, two random sets of CSS properties ('from' and 'to') are generated:

{% highlight css linenos %}
  @keyframes element-1-anim {
      from {
          background:rgba(96, 69, 248, 0.62);
          left:79%;
          top:89%;
          width:23px;
          height:53px;
          z-index:26;
          line-height:53px;
          opacity:0.47;
          text-shadow: rgba(8, 60, 23, 0.83) 9px -7px 7px;
          transform: scale(0.56) rotate(65deg);
      }
      to {
          background:rgba(100, 165, 96, 0.77);
          left:65%;
          top:66%;
          width:95px;
          height:53px;
          z-index:45;
          line-height:53px;
          opacity:0.81;
          text-shadow: rgba(7, 20, 87, 0.48) 6px -2px 5px;
          transform: scale(0.69) rotate(337deg);
      }
  }

  p#element-1 {
      animation-name: element-1-anim;
      animation-duration: 5s;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
  }
{% endhighlight %}

The [list of CSS properties that can be adjusted](http://www.w3.org/TR/css3-transitions/#properties-from-css-) shows what is possible with CSS3 transitions.
