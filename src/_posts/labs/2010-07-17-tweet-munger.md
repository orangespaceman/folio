---
title: Tweet Munger
excerpt: Translate (mung) tweets from a specific user account through several languages and back, then re-tweet from a new account.
links:
 code: https://github.com/thegingerbloke/tweet-munger
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - PHP
  - Twitter
---

# Tweet Munger

Another project I created some time last year, [Tweet Munger](https://github.com/thegingerbloke/tweet-munger) takes the Twitter feed from a specified user, translates it through several langauges and back into its original tongue, then re-posts the results to a new twitter account.

It's easy to set up a new account, [the code is available in Github](https://github.com/thegingerbloke/tweet-munger) with instructions for how to set it up.  You'll need a server running PHP, and the ability to run crontab (unless you want to hit refresh every 10 minutes).  It uses <strike>Google Translate API</strike> Bing's translate API to convert each tweet. (The Google Translate API is to be retired in December 2011).

## Example

<blockquote class="twitter-tweet" lang="en"><p>Back in London now. Missing the loveliness of N Wales but always good to be at the good old metrop x</p>&mdash; Stephen Fry (@stephenfry) <a href="https://twitter.com/stephenfry/status/343740307592060928">June 9, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Turns into:

<blockquote class="twitter-tweet" lang="en"><p>Now in London. N Wales there is no charm, but it is always a very, very good old x metrop</p>&mdash; Frephen Stry (@FrephenStry) <a href="https://twitter.com/FrephenStry/status/343741792920944640">June 9, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
