---
title: Device Orientation - Vertical
excerpt: Scroll a web page vertically based on a device's orientation
tag: featured-lab
links:
  code: https://github.com/orangespaceman/device-orientation-vertical
  demo: https://orangespaceman.github.io/device-orientation-vertical/
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

This is the first post in a series of four posts on experiments with the JavaScript `deviceorientation` event:

 - One: [Device Orientation - Vertical](../device-orientation-vertical/)
 - Two: [Device Orientation - 360](../device-orientation-360/)
 - Three: [Device Orientation - 3d](../device-orientation-3d/)
 - Four: [Device Orientation - websockets](../device-orientation-websockets/)

This lab is an example of scrolling a website using the `deviceorientation` event reported by mobile devices.

The logic behind the event values is explained by these [Dev.Opera](https://dev.opera.com/articles/w3c-device-orientation-api/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation) articles.

Three values are returned by the event - alpha (α), beta (β) and gamma (γ) - that relate to the orientation of the device.

{% highlight javascript linenos %}
window.addEventListener('deviceorientation', handleOrientationEvent);
function handleOrientationEvent(event) {
  console.log(event.alpha, event.beta, event.gamma);
}
{% endhighlight %}

For this lab, we are only interested in the beta value when the device is held in portrait orientation, or gamma value when the device is held in landscape orientation.

This beta/gamma value is converted to a value that relates to a scroll position for the page.

The [JavaScript file](https://github.com/orangespaceman/device-orientation-vertical/blob/master/assets/js/device-orientation.js) contains plenty of comments to describe the logic that calculates this value.

This is a basic implementation that doesn't use Euler angles or Quaternions (etc) and therefore suffers from Gimbal Lock. ([Read](https://stackoverflow.com/questions/41491940/) [More](https://stackoverflow.com/questions/22609518/) [Here](https://www.w3.org/TR/2016/CR-orientation-event-20160818/#worked-example-2)).


## Example video

<a data-flickr-embed="true"  href="https://www.flickr.com/gp/thegingerbloke/7e2Fq8" title="Device orientation - Vertical scroll"><img src="https://farm2.staticflickr.com/1955/45469492472_a9e5016227_b.jpg" width="1024" height="576" alt="Device orientation - Vertical scroll"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>