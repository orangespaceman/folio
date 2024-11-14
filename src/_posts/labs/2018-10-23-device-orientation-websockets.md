---
title: Device Orientation - websockets
excerpt: Display 3d representations of the current orientation of all devices connected to a website via websockets
tag: featured-lab
links:
  code: https://github.com/orangespaceman/device-orientation-websockets
  demo: https://orangespaceman.github.io/device-orientation-websockets/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  photos:
    - desktop-home.jpg
video:
  video: video.mp4
  screenshot: screenshot.jpg
technologies:
  - JavaScript
---

## Overview

This is the fourth post in a series of four posts on experiments with the JavaScript `deviceorientation` event:

 - One: [Device Orientation - Vertical](../device-orientation-vertical/)
 - Two: [Device Orientation - 360](../device-orientation-360/)
 - Three: [Device Orientation - 3d](../device-orientation-3d/)
 - Four: [Device Orientation - websockets](../device-orientation-websockets/)

This lab is an example of displaying 3d representations of devices' current orientation using the `deviceorientation` event reported by mobile devices.

The logic behind the event values is explained by these [Dev.Opera](https://dev.opera.com/articles/w3c-device-orientation-api/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation) articles.

Three values are returned by the event - alpha (α), beta (β) and gamma (γ) - that relate to the orientation of the device.

{% highlight javascript linenos %}
window.addEventListener('deviceorientation', handleOrientationEvent);
function handleOrientationEvent(event) {
  console.log(event.alpha, event.beta, event.gamma);
}
{% endhighlight %}

For this lab, a Node.js Express server uses [socket.io](https://socket.io) to listen for devices connecting. A host web page displays the current orientation of each connected device. This data is passed from device to server and on to the host in real-time via websockets.

For each device, the three device orientation values (alpha, beta and gamma) are used as rotation values for the X, Y and Z coordinates of their on-screen device.

The [JavaScript file](https://github.com/orangespaceman/device-orientation-websockets/blob/master/client/assets/js/device.js) contains plenty of comments to describe the logic that calculates these values.

This is a basic implementation that doesn't use Euler angles or Quaternions (etc) and therefore suffers from Gimbal Lock. ([Read](https://stackoverflow.com/questions/41491940/) [More](https://stackoverflow.com/questions/22609518/) [Here](https://www.w3.org/TR/2016/CR-orientation-event-20160818/#worked-example-2)).
