---
title: "Boris: Localhost Browser"
excerpt: Boris is a PHP-based localhost browser that allows you to quickly browse through your local projects.
tag: featured-lab
links:
 code:
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  desktop:
    - desktop-1.jpg
    - desktop-2.jpg
    - desktop-3.jpg
    - desktop-4.jpg
technologies:
  - HTML
  - CSS
  - JavaScript
  - Ajax
  - PHP
---

## Overview

For years I have had a simple PHP script sitting in my site root, listing all of the numerous web projects I have on my computer.  I often make small updates to this file, to increase the amount of information it offers, and make browsing around the various projects more simple.

_Boris_ has become the culmination of these efforts; a PHP-based localhost browser that allows you to quickly browse through the files on your local server.

It uses [jquery](http://www.jquery.com/) and [swfaddress](http://www.asual.com/swfaddress/) to allow you to move around the various directories on your local server easily.

Setting it up is easy, just download the latest version from the Github, and save the files into your web root. (There are slightly more detailed installation instructions in the github repo readme)

Any comments/compliments/complaints appreciated, this is just the initial version.

You can now add a bookmarklet to your browser by dragging the following link to your bookmark bar. When looking at any page, site or file on your local server, click on the Borisify link to open that directory through Boris.

[Borisify](javascript:(function(){var%20url=window.location.href;var%20urlArray=url.split('/');urlArray.shift();urlArray.shift();if(url[length-1]!='/'){urlArray.pop();}var%20server='http://'+urlArray.shift()+'/';var%20path=urlArray.join('/');window.open(server+'#/'+path+'/','_blank');})();)

