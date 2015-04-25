---
title: A Load of Bollocks
excerpt: A site to display animated gifs full-screen in 'modern' browsers
links:
 code: https://github.com/thegingerbloke/aloadofbollocks
 demo: http://aloadofbollocks.com/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  desktop:
    - desktop-home.jpg
    - desktop-gif.jpg
technologies:
  - PHP
  - JavaScript
  - Ajax
  - Animated GIFs
collaborators:
  - gabrielbucknall
---

## Overview

A site to display animated gifs full-screen in 'modern' browsers that support [CSS background-size](https://developer.mozilla.org/en/CSS/background-size).  This new property means it's possible to automatically scale a background image as large as possible within an available area.

The site is split into two parts.  When an individual gif is selected it shows a loading icon, which is swapped out when the proper image has finished loading.  An example: [http://aloadofbollocks.com/monkey-riding-goat](http://aloadofbollocks.com/monkey-riding-goat)

When visiting the [home page](http://aloadofbollocks.com) the latest 10 gifs are displayed.  It's possible to reorder these by popularity, or pull out the next 10 (both via ajax).

It uses a custom config file and the PHP [parse_ini_file](http://php.net/manual/en/function.parse-ini-file.php) function to check the IP address of the visitor against a preset list, to see whether the user is able to add a new gif.

The add form uses live form validation on blur and [after some content has been typed](http://narf.pl/jquery-typing/).

Once an image url has been entered, it uses the PHP [getimagesize](http://php.net/manual/en/function.getimagesize.php) function to test the mimetype to see if it is a valid gif.

It uses [Zero clipboard](http://code.google.com/p/zeroclipboard/) to allow links to be copied to the clipboard with a simple click.

It has custom fonts from [font squirrel](http://www.fontsquirrel.com/) and a mobile stylesheet optimised for iphone and android.
