---
title: Slide Controller
excerpt: Node.js-based controller for HTML slideshows - S5 and Google slides
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/slide-controller
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  desktop:
    - desktop-goog.jpg
    - desktop-s5.jpg
  mobile:
    - mobile-home.jpg
technologies:
  - HTML
  - CSS
  - JavaScript
  - Node.js
  - Websockets
---

## Overview

When teaching, it helps to be able to control the main slideshow when away from the keyboard.

This is a simple Node app that allows me to run a controller on a phone.

The controller app sits waiting for a slideshow to be started. When a slideshow begins, the controller works out how many slides there are, and also if any of those slides have hidden notes associated with them. If there are notes, these are shown below the control buttons.

The controller has been implemented with both S5 and (old) Google slides, but it would be fairly straightforward to apply a similar logic to other slideshows too.

