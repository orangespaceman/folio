---
title: ISS Tracker
excerpt: See the location of the International Space Station, and when it'll be overhead next
tag: featured-lab
links:
 code: https://github.com/orangespaceman/iss-tracker
 demo: https://orangespaceman.github.io/iss-tracker/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
technologies:
  - HTML
  - CSS
  - JavaScript
  - Geolocation API
collaborators:
  - tomparslow
  - premasagarrose
---

## Overview

A web app that tracks the position of the International Space Station (ISS), and plots this on a map of the world.

It also locates the user's current position, and calculates when the ISS will next fly overhead.

{% include ArticleIframe/ArticleIframe.html src="https://orangespaceman.github.io/iss-tracker/" ratio="90" %}

The clever bits come from the [open notify API](http://open-notify.org/) - this provides both the current position of the ISS and when it'll next fly overhead based on the user's location.

This is all plotted on a Google Map, and updated every few seconds.

## The ISS

 - A habitable artificial satellite in low Earth orbit
 - First launched in 1998
 - The size of a football pitch - 108x73m - the largest artificial body in orbit
 - It completes 15.7 orbits per day
 - Travels at nearly 8km per second
 - It can often be seen at the appropriate time with the naked eye from Earth
