---
title: Form Default Text
excerpt: Expand the functionality of a standard html form by auto-filling and removing default text from a text field
links:
 code:
 demo:
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - JavaScript
---

## Overview

Here are a couple of useful functions to have handy when working with html forms.

## Text input box auto-filler

Sometimes it is useful to set some default text in an input text box, to provide extra information to the user.  This function automatically removes this text when the user moves the focus of their browser to the text field in question.  If they fail to enter any text, the default text is re-inserted when they move away from the input box.  If they do enter their own information, this behaviour is removed.

{% include ArticleIframe/ArticleIframe.html src="https://thegingerbloke.github.io/form-default-text/" ratio="50" %}

{% highlight html linenos %}
<form method="get" action="">
  <fieldset>
    <legend>Default text fixer</legend>
    <label for="textfield">Type some text:</label>
    <input type="text" class="text" name="textfield" id="textfield" value="default text" />
  </fieldset>
</form>
{% endhighlight %}

To enable this, import the javascript file above, and add the following javascript call:

{% highlight javascript linenos %}
// set autofill on the input field with an id of 'textfield'
formUtil.autoFill("textfield");
{% endhighlight %}

It would be a fairly simple task to expand upon the default text checker. One useful extension would be to have it automatically check for fields with default text defined, without having to be set explicitly.
