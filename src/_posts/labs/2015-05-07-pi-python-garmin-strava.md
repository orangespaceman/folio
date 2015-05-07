---
title: Raspberry Pi Python Garmin Strava
excerpt: Automatically upload activities from a Garmin GPS watch to Strava when it is plugged into a Raspberry Pi
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/pi-python-garmin-strava
 demo: https://www.strava.com/athletes/thegingerbloke
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  photos:
    - pi.jpg
technologies:
  - Raspberry Pi
  - Python
  - udev
  - usbmount
  - Strava

---

## Overview

I like running.

I have a [Garmin Forerunner 10](http://www.garmin.com/uk/forerunner10) GPS watch that I use to track my times.

This watch can plug into a computer via its USB cradle.

Using a Raspberry Pi, I have built a system to detect when the watch is plugged in, and automatically detects new runs and uploads them to Strava via its API.

The Raspberry Pi uses a custom `udev` rule to detect the watch:

{% highlight bash linenos %}
ACTION=="add", ENV{DEVTYPE}=="usb_device", ATTRS{idVendor}=="091e", ATTRS{idProduct}=="25ca", RUN+="/home/pi/pi-python-garmin-strava/bash/on-garmin-add-trigger.sh"
{% endhighlight %}

This in turn trigger a bash script that activates a `virtualenv` environment and runs a Python script:

{% highlight bash linenos %}
DIRPATH='/home/pi/pi-python-garmin-strava'
source $DIRPATH/env/bin/activate
$DIRPATH/env/bin/python $DIRPATH/upload.py $DIRPATH
deactivate
{% endhighlight %}

(Absolute paths weren't necessary, but they made life easier.)

The Python script is responsible for accessing files on the watch, and interacting with the Strava API.

Full setup notes are on [Github](https://github.com/thegingerbloke/pi-python-garmin-strava) and my Strava account is [here](https://www.strava.com/athletes/thegingerbloke)
