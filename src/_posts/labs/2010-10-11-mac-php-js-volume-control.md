---
title: Mac PHP/JS Volume Control
excerpt: Control OS X system volume from a browser
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/mac-volume-control-php-js
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  desktop:
    - desktop-home.jpg
  mobile:
    - mobile-home.jpg
technologies:
  - HTML
  - CSS
  - JavaScript
  - Ajax
  - PHP
  - bash
  - Applescript
---

## Overview

Probably the best (or most useful) part of the [Ghetto Blaster](https://petegoodman.com/labs/ghetto-blaster-php-js-soundboard/) thing I put together is the ability to control the Mac system volume remotely.  This is a simple mobile-optimised site that contains just this functionality.

The technology behind it is quite straightforward - JavaScript intercepting a click on an HTML link, sends an Ajax call to a PHP script that executes a command line call via [shell_exec](http://php.net/manual/en/function.shell-exec.php) to trigger an applescript.

Ultimately, the PHP function called via Ajax that controls the volume is this:

{% highlight php linenos %}
function setVolume($vol) {
    shell_exec("osascript -e 'set volume output volume ".$vol."'");
}
{% endhighlight %}

The current volume is displayed by adjusting the colour of the volume blocks.  To add a bit of visual effect, 'active' volume blocks have a bit of glow, added with [CSS3 box shadow](http://www.css3.info/preview/box-shadow/):

{% highlight css linenos %}
ul#vol li.active a span {
    background:#0f4;
    -webkit-box-shadow: 0px 0px 20px #0f4;
}
{% endhighlight %}

The site is optimised for a mobile, specifically an iPhone or Android phone.  It uses CSS3 media queries to determine whether these devices are currently vertical or horizontal, and the layout of the volume control is adjusted accordingly.

{% highlight css linenos %}
  #wrapper {
      width:480px;
      height:208px; /* 320 - bumf */
  }

  ul#vol {
      height:110px;
  }

  ul#vol li {
      width:30px;
      margin-right:7px;
  }


  @media (max-width: 320px) {
      #wrapper {
          width:320px;
          height:356px; /* 480 - bumf */
      }

      ul#vol {
          height:230px;
          width:297px;
      }

      ul#vol li {
          width:20px;
          margin-right:7px;
      }
  }
{% endhighlight %}
