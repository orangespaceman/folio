---
title: Eye Lighter
excerpt: Visual display of who is currently working in Studio Awkward, with a programmable LED strip
tag: featured-lab
links:
  code: https://github.com/thegingerbloke/eye-lighter
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
technologies:
  - Raspberry Pi
  - Adafruit Dotstar APA102 LED strip
  - Python
collaborators:
  - ruthwatson
  - samwaters
  - edisaacs
  - paulferguson
  - matkeller

---

## Overview

There are a group of people based in Studio Awkward.

A while ago, Ruth drew _[shit portraits](https://www.instagram.com/shitportraits.ruth/)_&trade; of us all, and put them in a frame on the wall.

This lab involved replacing our eyes with LEDs that glow when we are in the studio.

The LEDs are a strip of Adafruit Dotstar APA102 lights. We cut the strip into individual lights, and soldered them together with wires so that they could be placed behind each picture.

The lights are controlled by a Raspberry Pi. The Pi runs two scripts:

- one to detect who is in (based on data obtained from our router)
- one to control whether the lights should be on or off

Full setup notes are on [Github](https://github.com/thegingerbloke/eye-lighter)


## Example video

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/thegingerbloke/34042005070/in/dateposted-public/" title="Eye-lighter"><img src="https://c1.staticflickr.com/3/2807/34042005070_b4b8ba33e0_b.jpg" width="1024" height="576" alt="Eye-lighter"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
