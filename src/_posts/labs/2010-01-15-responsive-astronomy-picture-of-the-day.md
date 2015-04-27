---
title: Responsive Astronomy Picture of the Day
excerpt: A responsive (mobile-optimised) version of the Astronomy Picture of the Day web page
links:
 code: https://github.com/thegingerbloke/responsive-astronomy-picture-of-the-day
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  mobile:
    - mobile-before.jpg
    - mobile-after.jpg
technologies:
  - PHP
  - Twitter
---

## Overview

Space is great. Every day the [Astronomy Picture of the Day](http://apod.nasa.gov/apod/) website is updated with a new image showcasing just how incredible the universe is.

The new updates are posted to the [APOD Twitter account](http://twitter.com/apod) every day.  In the UK this tweet is posted at 5:30am, so a lot of people see this update via their mobile phones.  The problem is, the APOD web page is difficult to read on a mobile.


Using the [Tweet Munger (Custom Translations)](../tweet-munger-custom-translations/) lab that I made a few months ago, I've written a quick script to detect when a tweet is posted by APOD to showcase the new picture of the day, created a mobile-optimised version of the web page that's easier to read on a mobile device, and tweeted a link to this from a new account.

The new twitter account is [APODR](http://twitter.com/apodr).

The Tweet Munger script made it really easy to detect new tweets and generate the updated page when a new picture has been posted.

In the new Tweet Munger 'translation' class, I duplicated the pirate default, removed all translations, but instead hooked into the 'additionalMunging' method that allows the tweet to be updated before being posted.

For the tweet itself I simply replaced the APOD URL with my own.  At this point I also grab the [APOD website](http://apod.nasa.gov/apod/) HTML source code, and add in a few little tweaks to optimise it for mobile - adding a [meta viewport](https://developer.mozilla.org/en/Mobile/Viewport_meta_tag#Viewport_basics) element.

