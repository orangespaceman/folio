---
title: CSS3 Scale Translate3d
excerpt: Using CSS3 transform properties scale and translate to move and zoom around HTML elements
links:
 code: https://github.com/thegingerbloke/css3-scale-translate3d
 demo: http://thegingerbloke.github.io/css3-scale-translate3d/
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
technologies:
  - CSS
---

# CSS3 Scale Translate3d

This is an update to my [original JavaScript tweening boxes experiment](../js-tweening-boxes/) from several years ago.  This time, instead of using JavaScript to change values, the example below uses the [CSS3 animation](http://www.w3.org/TR/css3-animations/) properties Scale and Translate 3d.  (Because of this it currently only works with Firefox, Google Chrome, Safari and iOS.  It may also work on Android but I can't test this...)

<iframe class="ArticleIframe" src="http://thegingerbloke.github.io/css3-scale-translate3d/" width="600" height="400"></iframe>

The example uses percentages for all block sizes and transformations, meaning everything scales to the size of the container element.  This can be seen in the [full-screen](http://labs.petegoodman.com/css3-scale-translate3d/) example. The only difference in the code between that version and the inline version above is that a width and height has been added to the containing HTML element.

It's a simple proof-of-concept example, and as such all positioning and animations are hardcoded.  It would be possible to control these dynamically with JavaScript.

The HTML is quite straightforward:

{% highlight html linenos %}
<div id="container">
    <div id="block-home" class="block">
        <h2>Home</h2>
        <p>...</p>
        <ul>
            <li><a href="#about">About</a></li>
            ...
        </ul>
    </div>
    <div id="block-about" class="block">
        <h2>About</h2>
        <p>...</p>
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </div>
    ...
</div>
{% endhighlight %}


The only JavaScript used is to detect clicks on the navigation links, and change the class on the containing element:

{% highlight javascript linenos %}
var $links = $('a'),
current = null;

$links.bind('click', function(e){
    e.preventDefault();
    this.blur();

    var href = this.href.split('#')[1];

    // condition : treat home links differently
    if (href == "home") {
        $('#container').attr('class', '').addClass(current + '-to-home');
        current = null;
    } else {
        current = href;
        $('#container').attr('class', '').addClass('home-to-' + href);
    }
});
{% endhighlight %}


The CSS contains six animations, one for the animation from the central block to each sub-block, and a return animation. These are activated when the class on the container element is changed.  Using scale and transform means the transitions are hardware-accelerated on Mac Safari and iOS:

{% highlight css linenos %}
/* container default styles */
#container {
    position:absolute;
    left:0;
    top:0;
    overflow:visible;
    -webkit-animation-duration: 3s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;

    -moz-animation-duration: 3s;
    -moz-animation-timing-function: ease-in-out;
    -moz-animation-iteration-count: 1;

    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
}

/* block positions */
    #block-home   { left:10%; top:10%; }
    #block-about  { left:-75%; top:-75%; }
    #block-lorem  { left:-75%; top:95%; }
    #block-ipsum  { left:95%; top:95%; }

/* block styles */
    .block {
        position:absolute;
        padding:0;
        width:80%;
        height:80%;
        overflow:hidden;
    }

/* a bit of extra styling to make it look a bit nicer */
    .block {
        background-color: #ff9900;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#ff9900), to(#ff3300)); /* Saf4+, Chrome */
        background-image: -webkit-linear-gradient(top, #ff9900, #ff3300); /* Chrome 10+, Saf5.1+, iOS 5+ */
        background-image:    -moz-linear-gradient(top, #ff9900, #ff3300); /* FF3.6 */
        background-image:     -ms-linear-gradient(top, #ff9900, #ff3300); /* IE10 */
        background-image:      -o-linear-gradient(top, #ff9900, #ff3300); /* Opera 11.10+ */
        background-image:         linear-gradient(top, #ff9900, #ff3300);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#ff9900', EndColorStr='#ff3300'); /* IE6–IE9 */
        text-shadow: 2px 2px 2px #f90;
        border-radius:25px;
    }

    .block h2,
    .block p,
    .block ul {
        margin:30px;
    }

    .block ul {
        padding-left:30px;
    }

    .block a {
        color:#fff;
        text-decoration:none;
    }


/* animations */
    #container.about-to-home {
        -webkit-animation-name: about-to-home; -webkit-transform: translate3d(0,0,0);
        -moz-animation-name: about-to-home; -moz-transform: translate(0,0);
        animation-name: about-to-home; transform: translate3d(0,0,0);
    }
    #container.lorem-to-home {
        -webkit-animation-name: lorem-to-home; -webkit-transform: translate3d(0,0,0);
        -moz-animation-name: lorem-to-home; -moz-transform: translate(0,0);
        animation-name: lorem-to-home; transform: translate3d(0,0,0);
    }
    #container.ipsum-to-home {
        -webkit-animation-name: ipsum-to-home; -webkit-transform: translate3d(0,0,0);
        -moz-animation-name: ipsum-to-home; -moz-transform: translate(0,0);
        animation-name: ipsum-to-home; transform: translate3d(0,0,0);
    }
    #container.home-to-about {
        -webkit-animation-name: home-to-about; -webkit-transform: translate3d(85%, 85%, 0);
        -moz-animation-name: home-to-about; -moz-transform: translate(85%, 85%);
        animation-name: home-to-about; transform: translate3d(85%, 85%, 0);
    }
    #container.home-to-lorem {
        -webkit-animation-name: home-to-lorem; -webkit-transform: translate3d(85%, -85%, 0);
        -moz-animation-name: home-to-lorem; -moz-transform: translate(85%, -85%);
        animation-name: home-to-lorem; transform: translate3d(85%, -85%, 0);
    }
    #container.home-to-ipsum {
        -webkit-animation-name: home-to-ipsum; -webkit-transform: translate3d(-85%, -85%, 0);
        -moz-animation-name: home-to-ipsum; -moz-transform: translate(-85%, -85%);
        animation-name: home-to-ipsum; transform: translate3d(-85%, -85%, 0);
    }


/* animation keyframes */
  /* webkit */
      @-webkit-keyframes about-to-home {
          0%   { -webkit-transform: scale(1) translate3d(85%, 85%, 0); }
          45%  { -webkit-transform: scale(0.25); }
          55%  { -webkit-transform: scale(0.25) translate3d(0, 0, 0); }
          100% { -webkit-transform: scale(1); }
      }

      @-webkit-keyframes lorem-to-home {
          0%   { -webkit-transform: scale(1) translate3d(85%, -85%, 0); }
          45%  { -webkit-transform: scale(0.25); }
          55%  { -webkit-transform: scale(0.25) translate3d(0, 0, 0); }
          100% { -webkit-transform: scale(1); }
      }

      @-webkit-keyframes ipsum-to-home {
          0%   { -webkit-transform: scale(1) translate3d(-85%, -85%, 0); }
          45%  { -webkit-transform: scale(0.25); }
          55%  { -webkit-transform: scale(0.25) translate3d(0, 0, 0); }
          100% { -webkit-transform: scale(1); }
      }

      @-webkit-keyframes home-to-about {
          0%   { -webkit-transform: scale(1) translate3d(0,0,0); }
          45%  { -webkit-transform: scale(0.25); }
          55%  { -webkit-transform: scale(0.25) translate3d(0,0,0); }
          100% { -webkit-transform: scale(1) translate3d(85%, 85%, 0); }
      }

      @-webkit-keyframes home-to-lorem {
          0%   { -webkit-transform: scale(1) translate3d(0, 0, 0); }
          45%  { -webkit-transform: scale(0.25); }
          55%  { -webkit-transform: scale(0.25) translate3d(0, 0, 0); }
          100% { -webkit-transform: scale(1) translate3d(85%, -85%, 0); }
      }

      @-webkit-keyframes home-to-ipsum {
          0%   { -webkit-transform: scale(1) translate3d(0, 0, 0); }
          45%  { -webkit-transform: scale(0.25); }
          55%  { -webkit-transform: scale(0.25) translate3d(0, 0, 0); }
          100% { -webkit-transform: scale(1) translate3d(-85%, -85%, 0); }
      }

  /* moz */
      @-moz-keyframes about-to-home {
          0%   { -moz-transform: scale(1) translate(85%, 85%); }
          45%  { -moz-transform: scale(0.25); }
          55%  { -moz-transform: scale(0.25) translate(0, 0); }
          100% { -moz-transform: scale(1); }
      }

      @-moz-keyframes lorem-to-home {
          0%   { -moz-transform: scale(1) translate(85%, -85%); }
          45%  { -moz-transform: scale(0.25); }
          55%  { -moz-transform: scale(0.25) translate(0, 0); }
          100% { -moz-transform: scale(1); }
      }

      @-moz-keyframes ipsum-to-home {
          0%   { -moz-transform: scale(1) translate(-85%, -85%); }
          45%  { -moz-transform: scale(0.25); }
          55%  { -moz-transform: scale(0.25) translate3d(0, 0); }
          100% { -moz-transform: scale(1); }
      }

      @-moz-keyframes home-to-about {
          0%   { -moz-transform: scale(1) translate(0,0); }
          45%  { -moz-transform: scale(0.25); }
          55%  { -moz-transform: scale(0.25) translate(0,0); }
          100% { -moz-transform: scale(1) translate(85%, 85%); }
      }

      @-moz-keyframes home-to-lorem {
          0%   { -moz-transform: scale(1) translate(0, 0); }
          45%  { -moz-transform: scale(0.25); }
          55%  { -moz-transform: scale(0.25) translate(0, 0); }
          100% { -moz-transform: scale(1) translate(85%, -85%); }
      }

      @-moz-keyframes home-to-ipsum {
          0%   { -moz-transform: scale(1) translate(0, 0); }
          45%  { -moz-transform: scale(0.25); }
          55%  { -moz-transform: scale(0.25) translate(0, 0); }
          100% { -moz-transform: scale(1) translate(-85%, -85%); }
      }

  /* css proper */
      @keyframes about-to-home {
          0%   { transform: scale(1) translate3d(85%, 85%, 0); }
          45%  { transform: scale(0.25); }
          55%  { transform: scale(0.25) translate3d(0, 0, 0); }
          100% { transform: scale(1); }
      }

      @keyframes lorem-to-home {
          0%   { transform: scale(1) translate3d(85%, -85%, 0); }
          45%  { transform: scale(0.25); }
          55%  { transform: scale(0.25) translate3d(0, 0, 0); }
          100% { transform: scale(1); }
      }

      @keyframes ipsum-to-home {
          0%   { transform: scale(1) translate3d(-85%, -85%, 0); }
          45%  { transform: scale(0.25); }
          55%  { transform: scale(0.25) translate3d(0, 0, 0); }
          100% { transform: scale(1); }
      }

      @keyframes home-to-about {
          0%   { transform: scale(1) translate3d(0,0,0); }
          45%  { transform: scale(0.25); }
          55%  { transform: scale(0.25) translate3d(0,0,0); }
          100% { transform: scale(1) translate3d(85%, 85%, 0); }
      }

      @keyframes home-to-lorem {
          0%   { transform: scale(1) translate3d(0, 0, 0); }
          45%  { transform: scale(0.25); }
          55%  { transform: scale(0.25) translate3d(0, 0, 0); }
          100% { transform: scale(1) translate3d(85%, -85%, 0); }
      }

      @keyframes home-to-ipsum {
          0%   { transform: scale(1) translate3d(0, 0, 0); }
          45%  { transform: scale(0.25); }
          55%  { transform: scale(0.25) translate3d(0, 0, 0); }
          100% { transform: scale(1) translate3d(-85%, -85%, 0); }
      }
{% endhighlight %}


Yet another pointless example of something that has been achievable with Flash for many years, that's finally also possible with HTML/CSS (on a small percentage of browsers).
