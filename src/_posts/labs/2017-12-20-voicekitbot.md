---
title: Voicekitbot
excerpt: Run a custom python script on a Google Voice Kit (Raspberry Pi) to do things, such control Spotify and pick someone in the studio to make tea
tag: featured-lab
links:
  code: https://github.com/making-things-club/voicekitbot
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  photos:
    - voicekitbot.jpg
    - slack.png
video:
  video: video.mp4
  screenshot: screenshot.jpg
technologies:
  - Python
  - Google AIY Voicekit
---

## Overview

A custom python script on a Google Voice Kit (Raspberry Pi) that does...things.

There are two initial pieces of functionality, but it would be simple to extend in future.

First, it listens to commands that will control Spotify (via [Awkbot](/labs/awkbot-slack/)).

Second, if you ask it who should make the tea it checks who is in the studio and picks someone at random.

Full setup notes are on [Github](https://github.com/making-things-club/voicekitbot)
