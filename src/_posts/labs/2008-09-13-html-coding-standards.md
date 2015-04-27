---
title: HTML Coding Standards
excerpt: A brief description of how I tend to structure the HTML code for the majority of projects.
tag: featured-lab
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - HTML
collaborators:
  - richardhallows
  - michaelallanson
---

## Overview

***

**PLEASE NOTE: These guidelines are several years old.  I will leave them here as a historical record, but I don't recommend following them. I hope to get round to updating them one day.  Maybe.**

***

This is not a guide to writing semantically correct mark-up, nor does this guide document all of my HTML conventions, as these are evident in my [latest projects](../../portfolio/).  This is simply a guide for how I attempt to structure the HTML code of my projects.


## Doctype &amp; Content Type

Unless specifically requested, I always set the doctype of every site to _XHTML 1.0 Strict_.  In the last few years I have standardised on this, and have never been confronted with a site that can only be built using a 'lesser' alternative.  Using XHTML 1.0 Strict allows for a greater degree of separation between content, style, and behaviour.

I set the content type to _text/html_, with the character set of _ISO-8859-1_ or _UTF-8_ if the site is likely to need localising into languages that contain foreign characters.

## HTML Tags

### <head>

I always place a standard set of tags in the head of any HTML document.

I always import CSS files in the head of the document through `<style>` tags.

The meta description and keywords should be present.  The meta description tag is used by most major search engines in the listing of the site in question, and so should contain a short sentence describing the site.  Meta keywords are usually ignored by search engines, but can be added anyway if desired.

I use a JavaScript library manager, and this is also imported in the head of the document.  On rare occasions, more JS files will need to be included in the head, or inline JS will be required.  If this is the case, I place this extra JS directly after the library manager.  However, in most situations these files can be imported through the library manager.



{% highlight html linenos %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <title>PAGE TITLE</title>

  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
  <meta http-equiv="imagetoolbar" content="no" />
  <meta name="MSSmartTagsPreventParsing" content="true" />
  <link rel="shortcut icon" href="./favicon.ico" />
  <meta name="description" content=" " />
  <meta name="keywords" content="" />

  <style media="screen" type="text/css">@import "./includes/css/site/global.css";</style>
  <style media="print" type="text/css">@import "./includes/css/site/print.css";</style>

  <!--[if lt IE 7]>
      <link rel="stylesheet" type="text/css" href="includes/css/site/ie6.css" media="screen" />
  <![endif]-->
  <!--[if IE 7]>
      <link rel="stylesheet" type="text/css" href="includes/css/site/ie7.css" media="screen" />
  <![endif]-->

  <script id="librarymanager" type="text/javascript" src="./includes/js/librarymanager.js"></script>
</head>
{% endhighlight %}



### `<body>`

I always place an id attribute on every body tag to uniquely identify it within the site.  It can optionally also include a class to identify it within a section of a site.  This is useful for CSS targeting. For example, an id of 'home' placed on the body tag means any CSS styles that start with the declaration _#home_ will only apply to this page of the site.

I always immediately follow the body tag with a `<div>` element with the id of wrapper, which contains all page content.  This is to enable further control over page layout via CSS.

There are times when it is necessary to place a container outside of the wrapper.  One example of this is where [content is to be vertically centred](http://www.hicksdesign.co.uk/journal/how-to-vertical-centering-with-css), as in this case the wrapper is surrounded by a `<div>` element with an id of horizon.  The horizontal positioning of this element can be controlled by CSS.


### Standard Structure

My standard structure for an html page changes on a per-project basis, but it generally follows this convention:


{% highlight html linenos %}
<html>
    <head>
         ...
    </head>
    <body>
        <div id="wrapper">
            <div id="header">
                 ...
            </div>
            <div id="maincontent" class="threecol">
                 <div id="leftcol">
                      ...
                 </div>
                 <div id="centrecol">
                       ...
                 </div>
                 <div id="rightcol">
                       ...
                </div>
            </div>
            <div id="footer">
                ...
            </div>
        </div>
    </body>
</html>
{% endhighlight %}

For pages with multiple columns, the _maincontent_ container can have a class that describes how many columns it contains, and any related information.  A few examples are _onecol_, _twocol_, _twocoleven_, _twocolwide_ and _threecol_.  Placing these class names on the container allows specific CSS styles to be applied to different page layouts, which is advantageous for large site builds.


## HTML Elements and Attributes

Any extra html attributes (e.g. class, id) that are applied to elements should have a structural meaning.  I do not use any style-focused attributes that have been deprecated in HTML strict.

I only use inline styles within the html when elements are dynamically inserted into the page via server-side script, such as to apply background-images and positioning.

I tend to declare all attributes using double quotes ( " ) rather than single quotes ( ' ).



### `<img />`

I only use images in html when they are directly relevant to the content of the page.  If an image is to be used for decoration only, I apply it as a background image to an element via CSS.

Whenever using an inline image, I use the following attributes:

 - src
 - alt - description of the image for non-visual browsers
 - width
 - height
 - title (optional) - extra information about the image


If an image is directly next to a title or content which accurately describes its content, then an alt attribute of `alt=""` is acceptable.

I always attempt to set a width and height attribute on each image.  This means when a page is rendering, even before the image has been downloaded it's dimensions have been registered in the browser, reducing the amount of jumping of page elements.


### tabindex and accesskeys

The main navigation of a page should use _tabindex_ values to aid keyboard movement around the page.

Access keys should also appear on main page navigation.  These access keys should follow a standard convention, and I generally number them 0-9.  If further access keys are required for the main navigation, I use a-z.


### title attribute

The title attribute can be used on images and links for additional information, and I use it to where appropriate.

For main navigational items, the title attribute should really be used as much as possible, as it can also help provide additional information for search engine rankings.


### form elements

All forms should use `<fieldset>` and `<legend>` elements, as they will not validate if you don't use these elements.

I always add an additional class for any form `<input/>` elements to identify them for styling.  This class should be the same as the type attribute, for example `<input type="text" class="text" />`

## Classes &amp; IDs

All class and ID names should have a semantic meaning relating to their content.

IDs should be used for unique page elements, and elements that re-occur throughout the site (although only once per page).  For example, the header, footer, navigation, and main content sections should each have unique IDs that are consistent throughout the site.

Classes should be used for repeated elements within an individual page.

The combination of classes and IDs on individual elements is useful where generic styles (applied by the class) are extended by styles applied to each id.


{% highlight html linenos %}
<div id="boxes">
   <div class="box" id="box1">
       ...
   </div>
   <div class="box" id="box2">
       ...
   </div>
   <div class="box" id="box3">
       ...
   </div>
   </div>
{% endhighlight %}



### Clearfix

My preferred method to correctly clear floated elements is to use a class of [clearfix](http://www.positioniseverything.net/easyclearing.html) on the parent element.  It should only be applied to this parent element, and not the floated elements within (unless they too require it).

I prefer this method to the [float nearly everything](http://orderedlist.com/articles/clearing-floats-the-fne-method) technique.


### hr

To style horizontal rules in a cross-browser compatible manner, I wrap them in a div element: `<div class="hr"><hr/></div>`.  The horizontal rule can then be hidden with CSS, while the div element can be styled in a manner that all browsers can render correctly.


### tables

HTML tables should only be used for tabular data, not to position the content of the page.

Where possible I split table content using the `<thead>` and `<tbody>` elements to differentiate between the head and main body of table content.

The `<th>` table heading element should be used to correctly mark up headings.

A class can be placed on every alternate row of table content to allow styles to be applied to these rows, such as a different background colour.


### HTML comments

I only ever use HTML comments sparingly to separate and describe elements within page content, but I always remove them before the code goes live.  For large, complex sites it is sometimes necessary to leave in HTML comments.


## Validation

I validate all HTML through the [W3C HTML validation tool](http://validator.w3.org/).

I find that using the Firefox Web developer toolbar is the quickest way to do this, as it provides a keyboard shortcut to quickly test as you go along.

Removing all HTML validation errors is the simplest and quickest way to eliminate 90% of all rendering errors, and are usually the reason why browsers render page content differently.


## Testing

I test every website to ensure it is accessible and functioning properly when accessed from a variety of different platforms, operating systems and browsers.

I also test all websites against the original design (using my [javascript grid overlay](../js-grid-overlay/)), to ensure it is pixel perfect in most browsers.

The JavaScript functionality of the site is also tested across browsers, to ensure any behaviours degrade gracefully, and replacement content is provided for users without JavaScript.


### Modern Browsers

This is the list of web browsers that I support and test for on any normal project. Other platforms and browsers can be supported on request. (Please note, with new browsers and updates being released all the time, it is difficult to maintain a specific list of modern browsers.)

   - **Microsoft Internet Explorer:** Pixel perfect in version 6 and 7
   - **Mozilla Firefox:** Near perfect in versions 2+
   - **Opera:** Usable in version 9.5+, and Opera for mobile
   - **Safari:** Near perfect in version 3+, usable in Safari for iphone
   - **Google Chrome:** Usable for beta


### Legacy Browsers

These legacy browsers each have less than 1% market share, and therefore I do not support them by default.  They sometimes contain older, imperfect HTML rendering engines that take additional time to lay out a page correctly, as specific code must be written for them.

   - **PC Microsoft Internet Explorer:** Version 5 and 5.5
   - **Macintosh Microsoft Internet Explorer:** Version 5 and 5.2
   - **Mozilla Firefox:** Version 1.5 and below
   - **Safari:** Version 2 and below
   - **Opera:** Version 8.5 and below


### Screen readers and text-only browsers

I ensure that all sites are fully compatible with text-only based browsers and screen readers due to the 'gracefully downgrading' nature of these standards-based websites.

All pages are tested with CSS disabled to give a top level view of how text only browsers and screen readers will interpret the site ensuring that basic levels of accessibility are met.

This ensures that web users who use such browsers are able to browse and use your website even if they are lacking the software to render images or display certain styles.

   - Text-only browsers such as [Lynx](http://lynx.isc.org/)
   - Screen-readers such as [JAWS](http://www.freedomscientific.com/jaws-hq.asp)


## More information

These guidelines only outline how I create HTML, they do not describe how to write standards-compliant semantically correct mark-up.  For more information on this, there are a number of helpful tools and websites:


### Tools

The most important tool to use when creating HTML is the Mozilla Firefox browser.  This allows you to install various browser plug-ins that help test sites.

   - [The Web developer toolbar](https://addons.mozilla.org/en-US/firefox/addon/60) for Firefox
   - [Firebug](https://addons.mozilla.org/firefox/addon/1843) for Firefox
   - [Web Accessibility Toolbar](http://www.visionaustralia.org.au/ais/toolbar/) for IE
   - [Web developer toolbar](http://www.microsoft.com/downloadS/details.aspx?familyid=E59C3964-672D-4511-BB3E-2D5E1DB91038&amp;displaylang=en) for IE


### Websites

   - [W3C](http://www.w3.org), for html standards, and accessibility guidelines
   - [A list apart](http://www.alistapart.com), for articles on standards compliant web techniques
   - [HTML dog](http://www.htmldog.com), for a comprehensive breakdown of html and css tags and properties
   - [Position is everything](http://www.positioniseverything.net/), how to fix most browser rendering errors
