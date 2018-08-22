---
title: Flickr Gallery
excerpt: A simple single-page responsive HTML/CSS/JS image gallery, with a PHP script to generate HTML from flickr
tag: featured-lab
links:
 code: https://github.com/orangespaceman/flickr-gallery
 demo: https://orangespaceman.github.io/flickr-gallery
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  desktop:
    - desktop-home.jpg
    - desktop-import.jpg
  mobile:
    - mobile-home.jpg
technologies:
  - HTML
  - CSS
  - JavaScript
  - PHP
---

## Overview

A proof-of-concept simple single-page responsive HTML/CSS/JS image gallery, with a PHP script to generate this HTML from data retrieved from flickr.

The page is a static HTML file. This means every time the page is loaded, we don't need to wait for the flickr API to respond to dynamically build the page. Instead, the page can be regenerated whenever necessary by accessing the URL of the PHP page - for example it could be done regularly using a cron job (or IFTTT recipe).

The site is simple to set up - just edit the config file and fill in the relevant flickr API keys.

The page is reponsive, the images resize to fill the available space.

The interactions for moving between slides are swipe-enabled, and can also be controlled via the keyboard arrow keys.

{% include ArticleIframe/ArticleIframe.html src="https://orangespaceman.github.io/flickr-gallery/" ratio="100" %}
