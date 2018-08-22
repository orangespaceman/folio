---
title: "XVMB: XVMB Vault of Marketing Bollocks"
excerpt: A site that features some of the 'best' bits of marketing bollocks that we've experienced in recent years.
tag: featured-lab
links:
 code: https://github.com/orangespaceman/xvmb
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  desktop:
    - desktop-home.jpg
technologies:
  - HTML
  - CSS
  - JavaScript
  - AJAX
  - PHP
collaborators:
  - adrianrowbotham
---

## Overview

A site that features some of the 'best' bits of marketing bollocks that we've experienced in recent years.

**"do we have any visibility on&hellip;"**

Every 5 seconds it picks a new item from the database, a random background image, a random rotation (using the [CSS3 transform rotate](https://developer.mozilla.org/en/CSS/-moz-transform) property) and a different font (from [font squirrel](http://www.fontsquirrel.com/)). It also picks a random position based on the current browser width and height.

[jQuery UI draggable](http://jqueryui.com/demos/draggable/) is used to allow each note to be moved around the screen.  It also moves this note to the top of the pile by changing the z-index, in case it's been hidden under newer notes.

It has a submission form in the top right corner that uses ajax to add new notes without having to lose the current list.  It is IP restricted - if the site recognises your IP address then you can add new content, otherwise it's kept in a queue for validation.

