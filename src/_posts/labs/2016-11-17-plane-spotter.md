---
title: Plane Spotter
excerpt: A Node app to identify nearby aeroplanes with a Raspberry Pi, Dump1090, Node, an LCD touchscreen and some magic
tag: featured-lab
links:
  code: https://github.com/thegingerbloke/plane-spotter
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  photos:
    - pi.jpg
technologies:
  - Raspberry Pi
  - Node
  - dump1090
  - LCD touchscreen
  - Promises
  - ES2015
  - Websockets

---

## Overview

Yet another pointless experiment, this one is a Node app that uses a Raspberry Pi, a USB DVB-T Receiver (RTLSDR RTL2832U) and [Dump1090](https://github.com/mutability/dump1090) to identify nearby aeroplanes and display information about them and their destination on an LCD touchscreen.

Dump1090 gives data about a route, such as its latitude, longitude and callsign.

{% highlight javascript linenos %}
{
    "hex": "405a46",
    "squawk": "7707",
    "flight": "BAW364  ",
    "lat": 50.755280,
    "lon": -0.161751,
    "validposition": 1,
    "altitude": 18700,
    "vert_rate": 1920,
    "track": 153,
    "validtrack": 1,
    "speed": 424,
    "messages": 433,
    "seen": 0
}
{% endhighlight %}

From this data the closest plane is selected, and its callsign is used to identify its route via data provided by [Virtual Radar Server](http://www.virtualradarserver.co.uk). This provides the origin and destination airport codes in [ICAO format](https://en.wikipedia.org/wiki/International_Civil_Aviation_Organization_airport_code) (for example EGKK for London Gatwick).

With the airport codes, further information about each airport is gathered via data provided by [ourairports.com](http://ourairports.com/). It identifies the latitude and longitude of the airport, along with its closest city and the ISO two-character country code.

Once the location of the origin or destination airport (whichever is further away) is found, a custom Google image search is performed to select an image of the closest city. The app then uses a [smart-cropping algorithm](https://github.com/jwagner/smartcrop.js) to download and trim the image to the size of the screen.

The node app is set up on the Pi to auto-start on boot, opening the site in Chromium (in full-screen kiosk mode).

By default the images are shown full-screen, with a tap on the touchscreen toggling the display of further information about the flight.

Full setup notes are on [Github](https://github.com/thegingerbloke/plane-spotter)

## Example video

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/thegingerbloke/30918533672/in/dateposted-public/" title="Plane Spotter"><img src="https://c1.staticflickr.com/6/5337/30918533672_70fb0cde5f_b.jpg" width="1024" height="576" alt="Plane Spotter"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
