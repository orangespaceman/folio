---
title: Device Orientation - 3d
excerpt: Display a 3d representation of a device's current orientation
tag: featured-lab
links:
  code: https://github.com/orangespaceman/device-orientation-3d
  demo: https://orangespaceman.github.io/device-orientation-3d/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  photos:
    - mobile-home.jpg
technologies:
  - JavaScript
---

## Overview

This is the third post in a series of four posts on experiments with the JavaScript `deviceorientation` event:

 - One: [Device Orientation - Vertical](../device-orientation-vertical/)
 - Two: [Device Orientation - 360](../device-orientation-360/)
 - Three: [Device Orientation - 3d](../device-orientation-3d/)
 - Four: [Device Orientation - websockets](../device-orientation-websockets/)

This lab is an example of displaying a 3d representation of a device's current orientation using the `deviceorientation` event reported by mobile devices.

The logic behind the event values is explained by these [Dev.Opera](https://dev.opera.com/articles/w3c-device-orientation-api/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation) articles.

Three values are returned by the event - alpha (α), beta (β) and gamma (γ) - that relate to the orientation of the device.

{% highlight javascript linenos %}
window.addEventListener('deviceorientation', handleOrientationEvent);
function handleOrientationEvent(event) {
  console.log(event.alpha, event.beta, event.gamma);
}
{% endhighlight %}

For this lab, the three values are used as rotation values for the X, Y and Z coordinates of the on-screen device.

The [JavaScript file](https://github.com/orangespaceman/device-orientation-3d/blob/master/assets/js/device.js) contains plenty of comments to describe the logic that calculates these values.

This is a basic implementation that doesn't use Euler angles or Quaternions (etc) and therefore suffers from Gimbal Lock. ([Read](https://stackoverflow.com/questions/41491940/) [More](https://stackoverflow.com/questions/22609518/) [Here](https://www.w3.org/TR/2016/CR-orientation-event-20160818/#worked-example-2)).


## Example video

<a data-flickr-embed="true"  href="https://www.flickr.com/gp/thegingerbloke/QH9Xiq" title="Device orientation - 3d rotation"><img src="https://farm2.staticflickr.com/1963/30579101497_5452b36caa_b.jpg" width="1024" height="576" alt="Device orientation - 3d rotation"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>