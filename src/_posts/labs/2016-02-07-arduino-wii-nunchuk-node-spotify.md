---
title: Arduino Wii Nunchuk Node Spotify
excerpt: Control Spotify using an Arduino and a Wii Nunchuk
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/arduino-wii-nunchuk-node-spotify
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  photos:
    - arduino-1.jpg
    - arduino-2.jpg
technologies:
  - Arduino
  - Wii Nunchuk
  - Node
  - Spotify

---

## Overview

Another pointless experiment, this time to control Spotify via a physical input, in this case a Wii Nunchuk.

Node is used to connect to the Spotify API and retrieve the current user's top 50 playlists.

On the Wii Nunchuk, when the main 'Z' button is pressed, its X, Y and Z axis are read and averaged to generate a single number.

This number is then used to select one of the user's playlists, which is played via an AppleScript command called by Node.


### Further pointlessness

In addition to playlists, the Wii joystick and 'C' button can be used to play different sound effects.

The Arduino breadboard also includes a play/pause button and an RGB LED that changes colour based on the orientation of the Wii Nunchuk.


### Setup

This lab currently assumes that it will be run on a mac due to the use of `afplay` for mp3s and AppleScript for Spotify control.

The sketch assumes the use of a Wii Nunchuk, but this could be replaced with another form of input (or just generate the relevant numbers manually).

The RGB LED is completely superfluous and could easily be removed.

Brief setup notes are on [Github](https://github.com/thegingerbloke/arduino-wii-nunchuk-node-spotify)


## Example video

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/thegingerbloke/24848529436/in/dateposted-public/" title="Arduino Wii Nunchuk Node Spotify"><img src="https://farm2.staticflickr.com/1476/24848529436_a2d6e811df_b.jpg" width="1024" height="576" alt="Arduino Wii Nunchuk Node Spotify"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
