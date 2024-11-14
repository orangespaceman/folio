---
title: Eye Lighter
excerpt: Visual display of who is currently working in Studio Awkward, with a programmable LED strip
tag: featured-lab
links:
  code: https://github.com/orangespaceman/eye-lighter
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  photos:
    - 1.jpg
    - 2.jpg
    - 3.jpg
    - 4.jpg
    - 5.jpg
    - 6.jpg
    - 7.jpg
    - 8.jpg
    - 9.jpg
    - 10.jpg
video:
  video: video.mp4
  screenshot: screenshot.jpg
technologies:
  - Raspberry Pi
  - Adafruit Dotstar APA102 LED strip
  - Python
collaborators:
  - ruthwatson
  - samwaters
  - paulferguson
  - matkeller

---

## Overview

There were a group of people based in Studio Awkward.

A while ago, Ruth drew _[shit portraits](https://www.instagram.com/shitportraits.ruth/)_&trade; of us all, and put them in a frame on the wall.

This lab involved replacing our eyes with LEDs that glow when we are in the studio.

The LEDs are a strip of Adafruit Dotstar APA102 lights. We cut the strip into individual lights, and soldered them together with wires so that they could be placed behind each picture.

The lights are controlled by a Raspberry Pi. The Pi runs two scripts:

- one to detect who is in (based on data obtained from our router)
- one to control whether the lights should be on or off

Full setup notes are on [Github](https://github.com/orangespaceman/eye-lighter)

