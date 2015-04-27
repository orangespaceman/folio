---
title: JS Cookies
excerpt: The script I tend to use when dealing with cookies. There are plenty out there, but this offers a couple of extra functions you don't always find.
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/js-cookies
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - JavaScript
---

## Overview

There are a plethora of cookie scripts on the web, each offering similar functionality.  Over the years I have built up a short cookie library that I use whenever the need arises.  It offers a couple of extra functions that are sometimes useful, although you don't always find them in other libraries.


## Set Cookie

This standard function has two required variables, and has four other optional variables

{% highlight javascript linenos %}
// set a cookie
cookie.set("cookieName", "cookieValue");
{% endhighlight %}

  - **name**: the name of the new cookie (required)
  - **value**: the value of the new cookie (required)
  - **expires**: the number of days in which the cookie should expire - if not set, cookies will be session cookies only
  - **path**: the local path of the page that the cookie relates to
  - **domain**: the domain the cookie is being set from
  - **secure**: whether the cookie should only be available for https


## Get cookie

This function has a single variable - the name of the cookie in question. If the requested cookie is not found, a false (null) value is returned.

{% highlight javascript linenos %}
// get a cookie
var cookieVal = cookie.get("cookieName");
{% endhighlight %}


## Get all cookies

This returns an array of all cookies, that can then be iterated over.

{% highlight javascript linenos %}
// get all cookies
var cookieArray = cookie.getAll();
{% endhighlight %}


## Remove cookie

This function again has one or more variables.  The first is the name of the cookie in question. It does not check to see if the cookie in question exists.  It is also possible to specify an optional path and domain.

{% highlight javascript linenos %}
// remove a cookie
cookie.remove("cookieName");
{% endhighlight %}


## Remove all cookies

A short function with no parameters that removes all cookies for the site in question.

{% highlight javascript linenos %}
// remove all cookies
cookie.removeAll();
{% endhighlight %}


## Count cookies

A surprisingly useful function that allows you to count how many cookies have been set.

{% highlight javascript linenos %}
// count cookies
var cookieCount = cookies.count();
{% endhighlight %}
