---
title: Single Editable Page
excerpt: A very simple HTML page, editable via the browser
links:
 code: https://github.com/thegingerbloke/single-editable-page
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  desktop:
    - desktop-home.jpg
    - desktop-edit.jpg
    - desktop-history.jpg
    - desktop-login.jpg
  mobile:
    - mobile-home.jpg
technologies:
  - HTML
  - CSS
  - PHP
  - MySQL
---

# Single Editable Page

I had the requirement a while back to create a simple single page website that could editable through a simple web form. It needed simple formatting, and the ability to review old changes. This lab is the proof of concept that I quickly put together.

It's straightforward to get up and running. There is an SQL file that needs to be run, and a simple config file that needs editing.

There are a few configurable options. It can be set up so that users need to log in before they can view or edit the content, or anyone can be granted access.

There is a list of previous revisions. These can be previewed, and it is possible to return the document to a prior state.

The site uses [TimyMCE](http://www.tinymce.com/) as a simple wysiwyg editor.
