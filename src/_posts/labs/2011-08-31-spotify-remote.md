---
title: Mac PHP/JS Spotify Remote Control - Spotimote
excerpt: Control Spotify remotely from a phone or browser
tag: featured-lab
links:
 code: http://github.com/thegingerbloke/spotify-remote
 demo:
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
    mobile: thumb-mobile.jpg
  desktop:
    - desktop-home.jpg
  mobile:
    - mobile-home.jpg
technologies:
  - JavaScript
  - Ajax
  - PHP
  - Applescript
---

## Overview

Another pointless project along the lines of the [Mac Volume Control](http://petegoodman.com/labs/mac-php-js-volume-control/) thing I put together a while ago.  As ever, the source for this is available from github.

In a similar vein to the iTunes remote iOS app, this lets you (partially) control Spotify remotely.

[Spotify recently announced a basic Applescript dictionary](http://developer.spotify.com/blog/archives/2011/05/27/spotify-051-for-mac-%E2%80%94-now-with-applescript-support/) which enables simple commands, and returns some information for the currently playing track.

A couple of evenings of tinkering, and I have managed to knock together a basic mobile-optimsed web app that allows these to be called remotely via a browser. On an iOS device you can also install it as a web app on the home screen.

Installation is really simple, if you have PHP running on your Mac just grab the code for the spotify remote from Github, put it somewhere on your local web server, and visit it in a browser.

It uses the same principles as my [Volume Control](http://petegoodman.com/labs/mac-php-js-volume-control/) and [Ghetto Blaster](http://petegoodman.com/labs/ghetto-blaster-php-js-soundboard/) labs - JavaScript intercepting a click on an HTML link, sends an Ajax call to a PHP script that executes a command line call via shell_exec to trigger an Applescript.

Most of the Applescript files are very simple:

{% highlight applescript linenos %}
tell application "Spotify"
next track
end tell
{% endhighlight %}

In addition to this, a "status" Applescript is called every second to update the current display.  If a new album starts, it saves the new image data from Spotify (which comes through as a TIFF file), converts it to a JPG, and updates the background image.

{% highlight applescript linenos %}
-- Init
on run args

    -- is Spotify running?
    if isRunning("Spotify") then

    tell application "Spotify"

        set _state to player state

        -- is Spotify playing?
        if _state is not stopped

            local current_album

            -- passed parameter (current album)
            set current_album to item 1 of args
            set current_album_escaped to my string_replace("\\\\\\\\'", "'", current_album)

            -- set up album artwork directories/parameters
            tell application "Finder"
                set script_path to container of (path to me) as text
                set artwork_dir to script_path & ":img:album:"
                set artwork_path to artwork_dir & "album.tiff"
            end tell

            -- save track details
            set _track to name of current track
            set _artist to artist of current track
            set _album to album of current track
            set _track_number to track number of current track
            set _duration to duration of current track
            set _position to player position
            set _volume to sound volume

            -- condition : only get artwork if it's a new track
            if current_album_escaped is not album of current track then
                set album_changed to true
                set _artwork to artwork of current track
                my save_image(_artwork, artwork_path)
                my convert_tiff_to_jpeg(artwork_path, "album.jpg", artwork_dir)
            else
                set album_changed to false
            end if

            -- format JSON
            set output to "{
                \\"running\\" : true,
                \\"playing\\" : true,
                \\"state\\" : \\"" & _state & "\\",
                \\"track\\": \\"" & _track & "\\",
                \\"artist\\": \\"" & _artist & "\\",
                \\"album\\": \\"" & _album & "\\",
                \\"duration\\": " & _duration & ",
                \\"position\\": " & _position  & ",
                \\"track_number\\": " & _track_number & ",
                \\"volume\\": " & _volume & ",
                \\"album_changed\\": " & album_changed & ",
                \\"current_album\\": \\"" & current_album & "\\"
            }"

        -- Spotify not playing
        else
            set output to "{
                \\"state\\" : \\"" & _state & "\\"
            }"
        end if

    end tell

    -- Spotify not running
    else
        set output to "{
            \\"state\\" : \\"closed\\"
        }"
    end if

end run



-- function to save tiff image from spotify
on save_image(artwork, artwork_path)
    set fileRef to (open for access artwork_path with write permission)
    try
        write artwork to fileRef
        close access fileRef
        on error errorMsg
            try
                close access fileRef
        end try
        error errorMsg
    end try
end saveImage


-- convert tiff to jpeg for web display
on convert_tiff_to_jpeg(source_file, new_name, results_folder)
    try
        set the target_path to ((results_folder as string) & new_name) as string
        with timeout of 15 seconds
            tell application "Image Events"
                launch
                set this_image to open file (source_file as string)
                save this_image as JPEG in file target_path with icon
                close this_image
            end tell
        end timeout
        on error error_message
        -- hi!
    end try
end convert_tiff_to_jpeg


-- function to find and replace
on string_replace(needle, haystack, str)
    set AppleScript's text item delimiters to needle
    set new_str to text items of str
    set AppleScript's text item delimiters to haystack
    set str to new_str as string
    return the str
end string_replace


-- Function to check if an application is running
on isRunning(appName)
    tell application "System Events" to (name of processes) contains appName
end isRunning
{% endhighlight %}
