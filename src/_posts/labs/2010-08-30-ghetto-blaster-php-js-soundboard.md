---
title: "Ghetto blaster: a PHP/JavaScript soundboard"
excerpt: A simple soundboard that can be accessed through any web browser, which allows anyone to play a sound clip or synthesised speech through a capable web server.
tag: featured-lab
links:
 code: https://github.com/thegingerbloke/ghetto-blaster
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  desktop:
    - desktop-home.jpg
    - desktop-stats-1.jpg
    - desktop-stats-2.jpg
    - desktop-stats-3.jpg
  mobile:
    - mobile-home.jpg
technologies:
  - PHP
  - JavaScript
  - Ajax
  - bash
  - Applescript
---

# Ghetto blaster - a PHP/JavaScript soundboard

To play music at [Pirata](http://piratalondon.com/), we use [Spotify](http://spotify.com) & iTunes running on an old macbook connected to a pair of speakers - our very own 21st century ghetto blaster.  Anyone can log in to this machine using VNC or screen sharing and change the music from their own computer.

I've created a simple soundboard that can be accessed through any web browser, which allows people to play a sound clip or synthesised speech through the ghetto blaster.

It's fairly straightforward, the web page simply lists all of the files in a specified directory.  When one of these sound files is selected, JavaScript sends a request to the server to play it.

This is made possible by using the php [shell_exec()](http://php.net/manual/en/function.shell-exec.php) function to call the OS X command line audio player [afplay](http://developer.apple.com/mac/library/documentation/Darwin/Reference/ManPages/man1/afplay.1.html), for example:

{% highlight php linenos %}
shell_exec('afplay ' . $file);
{% endhighlight %}

Speech is created by calling the [say](http://developer.apple.com/mac/library/documentation/Darwin/Reference/ManPages/man1/say.1.html) command, for example:

{% highlight php linenos %}
shell_exec('say -v ' . $voice . ' "'. $text . '"');
{% endhighlight %}

There are also volume controls in the top right corner that allow the system volume to be adjusted. This is possible due to the osascript command, which allows an applescript to be executed via the command line, for example:

{% highlight php linenos %}
shell_exec("osascript -e 'set volume output volume (get (output volume of (get volume settings)) + 5)'");
{% endhighlight %}

The site allows you to preview the sound clips through your own browser, so you can work out what you want to play before forcing everyone else to hear it.  Also in the top right corner there's the option to switch between broadcast and preview modes.  The preview mode uses the Yahoo Media Player to play these mp3 files in the browser.  To do this it was necessary to import the Yahoo Media Player without allowing it to parse the links on the page, but instead to call it when a sound is clicked in preview mode.

There are a few configuration options.  It's possible to require users to log in to the system, and log every interaction in case you want to know who played what.  These options can be changed in the config.ini.php file in the root of the directory.  (These options are parsed by PHP using the php [parse_ini_file()](http://php.net/manual/en/function.parse-ini-file.php) function.)

To install it on a mac, you can follow these simple instructions.

 - [Turning on web sharing and enable PHP](http://foundationphp.com/tutorials/php_leopard.php).
 - Check the project out from Github, or just download the zip.  Put these files in your site root, as defined in the step above.
 - Get our sound effects zip file, or put your own somewhere.
 - You may want to change the configuration options, which involves editing the config.ini.php file.  For example, you'll need to set the absolute path to the sound effects file.

If you get any issues, especially with the built-in apache server and symlink permissions, it might be worth trying [http://www.mamp.info/en/index.htmlMAMP](http://www.mamp.info/en/index.html) instead of the built in server.  Alternatively if you're comfortable altering the httpd.conf file, try commmenting out the line that includes the User home directories

{% highlight apache linenos %}
Include /private/etc/apache2/extra/httpd-userdir.conf
{% endhighlight %}

It might be possible to get this working on other *nix systems by replacing `afplay` with another mp3-playing command-line utility
