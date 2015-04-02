---
title: CSS Coding Standards
excerpt: An overview of the way I tend to structure my CSS files for a typical site build.
tag: featured-lab
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
technologies:
  - CSS
collaborators:
  - richardhallows
  - michaelallanson
---

# CSS Coding Standards

***

**PLEASE NOTE: These guidelines are several years old.  I will leave them here as a historical record, but I don't recommend following them. I hope to get round to updating them one day.  Maybe.**

***

These CSS coding standards are not a guide for how to write CSS, but instead give an overview of how I prefer to structure my CSS files.  The reason for setting out these rules explicitly is to increase the legibility of my code, and to aid situations where I am working as part of a group of developers.


## CSS files

I always keep all CSS files within the directory `/_includes/css/site/`.  If I am creating CSS for a CMS along with the site, these files will be placed within `/_includes/css/cms/`.

Within each of these directories, I use a main stylesheet named _global.css_, along with a stylesheet named _print.css_.  This print stylesheet acts as a stopper for Windows Internet Explorer 5 &amp; 5.5, to fix a CSS parsing bug (this bug is well documented elsewhere).  The real print CSS styles are included in a file called _actualprint.css_, which is called from the first print file, only for browsers that support it properly.  Finally, an empty CSS file called _null.css_ is included to stop any server log errors being reported.


## Coding conventions

### CSS style

I always use consistent styling when writing my CSS styles. I set each element declaration on a separate line, with all styles being tabbed once underneath.  I insert a space before and after the separating colon.



{% highlight css linenos %}
#element,
#element2 {
    declaration : value;
}
{% endhighlight %}


### CSS ordering

Within a CSS statement, I generally split all declarations into two distinct blocks. I place container related styles at the top, and font/text related styles at the bottom. The general layout is:


{% highlight css linenos %}
#index #logo {
    display : value;
    position : value;
    float : value;
    clear : value;
    width : value;
    height : value;
    margin : value;
    padding : value;
    background : value;
    border : value;

    font : value;
    font-size : value;
    line-height : value;
    font-weight : value;
    text-decoration : value;
    color : value;
}
{% endhighlight %}

I usually place anything else underneath border, but above the font rules.


### General tips

  - I always code everything in lowercase.
  - I don't use hyphens or underscores in the naming of elements.
  - I comment all styles that may not appear to be necessary, for future reference or to aid other developers who may not have been involved in the initial build.
  - I use consistent spacing throughout the CSS document, so it can be browsed easily.


## CSS ordering

My standard method of structuring CSS files involves splitting styles into four distinct categories.

### HTML selectors and generic class selectors

This section contains all HTML tags (e.g. body, p, etc) followed by generic class selectors that are used throughout the site (e.g. .status { color:red; } ).

I always begin the stylesheet with a leveller to ensure cross-browser compatibility.  This usually looks like _* { margin : 0px; padding : 0px; }_, although [more complicated levellers are sometimes necessary](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/).

This should be followed by:

  - html
  - body
  - headings (h1 - h6)
  - lists -> ul, ol, li, dl, dt, dd
  - tables -> table, thead, tr, th, tbody, td
  - forms -> form, fieldset, legend, label, input, textarea, select, option
  - text components -> p, blockquote, code, pre, address, em, strong
  - misc -> img, object
  - links -> a, a:hover, a:active, a:visited


Once all html elements are defined, I declare all global classes.  These include the [clearfix](http://www.positioniseverything.net/easyclearing.html), which should be used to clear floated elements within a container, and the horizontal navigation list, which allows a list of links to be placed next to each other.

This is also where extra styles for forms or table elements are defined.


### Global ids

The global ids section contains styles for all the unique elements that are found on every page within the site.  These are inserted in the same structure/order as the html page, for example:

  - wrapper
  - header
  - mainnav
  - subnav
  - content
  - footer


### Page-specific styles

This section contains styles for certain specific pages or areas of a site.  For example:


{% highlight css linenos %}
/*
 * Index page
 */
    #index {
        padding-top : 20px;
    }

    /*
     * Index page : logo
     */
        /* move the logo down on the home page */
        #index #header #logo {
            margin : 10px;
        }

        /*
         * index page : logo : link
         */
            #index #header #logo a {
                display : block;
            }

    /*
     * Index page : footer
     */
        #index #footer {
            margin : 10px;
        }

        /*
         * About section
         */
    ...
{% endhighlight %}


## Comments and indents

I always ensure that the top comment in any CSS file contains a description of the file, and any specific details relevant to the editing or placement of the file.

I set out three different types of CSS comments, that are used to separate the stylesheet into distinct sections, and to aid navigation and explanation of the code.


### 3 line comment followed by indent

I use 3 line comments with subsequent indenting to separate each group of styles for a specific page element or area.  From a quick browse of any stylesheet using this technique, it is easy to see that when the indent changes, I have moved on to another part of the site.  My general commenting convention is:


{% highlight css linenos %}
/*
 * Styles for a specific area of the page
 */
    .footer {
        begins : here;
    }

    .footer p {
        lorem : ipsum;
    }

    /*
     * Styles for another page area
     */
    ....
{% endhighlight %}

I always ensure that the style is tabbed in twice underneath the comment, with no empty lines between the two.  All styles that are relevant to the comment are kept in line with each other.


### 1 line comment above style

I use a 1 line comment above a style if it refers to that specific style only, and not to any subsequent element declarations


{% highlight css linenos %}
/* Comment for a specific element in one line */
#index #logo {
    margin : 0px;
    }
{% endhighlight %}


### Right hand declarations.

I comment to right hand side of any decorator if it refers to that line only.


{% highlight css linenos %}
/*
 * General logo style
 */
 #logo {
    margin : 0px;
    padding : 0px;
    line-height : 10px; /* This fixes an issue in IE 5.5 on a Mac */
    }
{% endhighlight %}


## Conditional Commenting and CSS Hacks

As a site is being created, rendering bugs in certain browsers (most notably the various versions of Internet Explorer) mean it is sometimes impossible to lay out a page correctly without sending specific styles to different browsers.

My preferred method of applying different styles for Internet Explorer is to use conditional comments, with separate stylesheets for IE7, IE6 etc.


{% highlight html linenos %}
<style media="screen" type="text/css">@import "./includes/css/global.css";</style>

<!--[if lt IE 7]>
  <link rel="stylesheet" type="text/css" href="./includes/css/ie6.css" media="screen" />
<![endif]-->

<!--[if IE 7]>
  <link rel="stylesheet" type="text/css" href="./includes/css/ie7.css" media="screen" />
<![endif]-->
{% endhighlight %}


Before the use of conditional commenting became widespread, I used a few different CSS hacks to target these same browsers.  When a CSS hack is used, I comment it with a name, what it does, and what browser it is for.  My 'approved' hacks can be found below.


### * html hack

For setting values specific to Win IE 5, 5.5 and 6


{% highlight css linenos %}
#maincontent {
   padding : 10px;
   }

/* hack targets Win IE 5.5 &amp; 6 – they require less padding */
* html #maincontent {
    padding : 8px;
    }
{% endhighlight %}


### voice-family hack

For setting values specific to Win IE 5 &amp; Win IE 5.5.  It hides below values until the end of the style


{% highlight css linenos %}
#ltcolumn,
#rtcolumn {
float : left;
    width : 392px; /* for IE 5.5 */
    voice-family : "\\"}\\"";
    voice-family : inherit; /* voice family fix : hide the below from Win IE 5.5 */
    width : 396px;
    }
{% endhighlight %}


### Commented backslash hack

Targets mac IE5 only, hides all styles until the next comment ends


{% highlight css linenos %}
/* Commented Backslash fix hides rule from IE5-Mac \\*/
#secondarynav li a {float : none;}
/* End IE5-Mac fix  */
{% endhighlight %}


## Random bugs, and workarounds

Here are some of the most common bugs that occur when writing cross-browser CSS code.  For a more complete list, see [http://www.positioniseverything.net/](http://www.positioniseverything.net/)</a>

### IE double float margin bug

If you float left/right and add a margin the same direction, Win IE < 7 will double this margin.  Setting _display : inline;_ will fix this.

### IE extra padding on buttons

IE adds extra padding to the left and right sides of buttons.  To remove this, add styles of _overflow : visible_ and _width : auto_.

### Firefox not properly clearing floats

To fix this, add a class of _clearfix_ to the containing element.  This needs to be used in conjunction with the .clearfix style that should be added to your stylesheet

### Safari not making floated block elements the full width of the parent container

Add the style of _display : block_ to the element in question.
