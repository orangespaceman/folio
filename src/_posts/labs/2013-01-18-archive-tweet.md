---
title: Archive Tweet
excerpt: Retweet things from another account a set time after they were originally posted
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/archive-tweet
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - Node.js
---

# Archive Tweet

Archive Tweeter was an attempt to retweet things from another account a set time after they were originally posted.

The app can be set up to mirror an account a set time after the original posts appeared, whether that is a matter of hours, days or years.

There's not much point to it but it is quite good fun to see what was going on at the same time a few years previously.

The app is fairly clever. When it starts it creates a cache of all tweets going back to the original date, then schedules the first one. At the point that it's posted, it queues up the next, and so on.

It also periodically checks for any tweets, and adds them to the cache.
