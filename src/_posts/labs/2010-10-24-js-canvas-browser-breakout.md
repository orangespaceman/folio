---
title: Browser Breakout
excerpt: A bookmarklet that lets you play breakout with the images on any webpage
tag: featured-lab
links:
 code: https://github.com/orangespaceman/browser-breakout
 demo: https://orangespaceman.github.io/browser-breakout/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  desktop:
    - desktop-home.jpg
    - desktop-game.jpg
technologies:
  - JavaScript
  - Canvas
---

## Overview

This is a little experiment using JavaScript and canvas to create a bookmarklet that could turn any web page into a game.  Games like [this](http://erkie.github.io/) are fun examples of how to detect specific elements in a web page and interact with them.  I've tried creating something similar called Browser Breakout.

Drag the link below to your bookmarks toolbar or to a tab to start browser breakout on other websites.

***

{% include ArticleIframe/ArticleIframe.html src="https://orangespaceman.github.io/browser-breakout/bookmarklet/" ratio="30" %}

***


The concept of the game is simple, it detects any images (of a reasonable size) on the page and turns them into breakout blocks.

The game itself isn't really finished, more a proof of concept.  There is plenty of room for improvement - the collision detection is temperamental, and the physics logic needs improving.  Also, it's quite inefficient as it redraws the canvas element every frame.  I experimented with only redrawing the ball, the paddles and any images that are interacted with, but it caused more problems than it initially solved.

[This great tutorial](http://billmill.org/static/canvastutorial/) was very helpful for creating the original breakout logic.

