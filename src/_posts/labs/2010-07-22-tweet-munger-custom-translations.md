---
title: Tweet Munger Custom Translations
excerpt: Translate (mung) tweets from a specific user account through a custom set of translations, then re-tweet from a new account.
links:
 code: https://github.com/orangespaceman/tweet-munger-custom-translations/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - PHP
  - Twitter
---

## Overview

Along the lines of the original [Tweet Munger](../tweet-munger/) project, this version of the Tweet Munger takes the Twitter feed from a specified user, translates it and then re-posts the results to a new twitter account.  The difference with this version is that instead of using an external translation service, you can define your own translations.

It's easy to set up a new account, the code is available in Github with instructions for how to set it up.  You'll need a server running PHP, and the ability to run crontab (unless you want to hit refresh every 10 minutes).  I have created a set of Pirate translations, but it would be easy to add additional types...


## Example

<blockquote class="twitter-tweet" lang="en"><p>Back in London now. Missing the loveliness of N Wales but always good to be at the good old metrop x</p>&mdash; Stephen Fry (@stephenfry) <a href="https://twitter.com/stephenfry/status/343740307592060928">June 9, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Turns into:

<blockquote class="twitter-tweet" lang="en"><p>aft in London now. Missin&#39; th&#39; loveliness o&#39; N Wales but always good t&#39; be at th&#39; good auld metrop x</p>&mdash; Stephen Frirate (@StephenFrirate) <a href="https://twitter.com/StephenFrirate/status/343742037646004226">June 9, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
