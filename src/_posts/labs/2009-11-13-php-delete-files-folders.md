---
title: PHP Delete Files and Folders
excerpt: A simple PHP script that allows the easy deletion of files and folders within a directory
tag: featured-lab
links:
 code:
 demo:
images:
  featured: featured.jpg
  thumbs:
    desktop: thumb-desktop.jpg
  desktop:
    - desktop-home.jpg
technologies:
  - PHP
---

# PHP Delete Files and Folders

I've just had to write a quick PHP script to allow the easy deletion of files and folders within a specific directory.

It's a simple solution, a single PHP file that can be uploaded to a web-server.  Just browse to the file and select the items you want to delete.

I have included the code for this script below.

To initialise the deleter, just create a file with the following code, adjusting the path as necessary:

{% highlight php linenos %}
require "Deleter.php";

// initialise the page - optionally passing through a path to index
$deleter = new Deleter("./files/");
{% endhighlight %}

It's fairly straightforward, for my purposes I didn't need to worry about validation or particular security issues with the error-checking of paths, although it would definitely be a good idea to add this if this were used as the basis of a more complicated script.

As ever when working with the removal of files, be careful when using this as there is no undo!



{% highlight php linenos %}
<?php

/**
 * Delete files from a web server.
 *
 * Careful!
 */

/**
 * This class is responsible for deleting files
 */
 class Deleter {


    /**
     * The name of this file, in case it you want to rename it
     *
     * @var string $filename This file
     */
    var $filename;


    /**
     * The path specified during the instantiation
     *
     * @var string $path The path
     */
    var $path;


    /**
     * A list of filenames & directory names to ignore
     *
     * @var array $ignorelist The file names to skip over { feel free to add more }
     */
    var $ignorelist = array (
        '.',
        '..',
        'file-name-to-ignore.txt'
    );


    /**
     * Main Constructor
     *
     * Builds the page header, footer, and contains the logic to decide what to do next
     */
    function __construct($path="./") {

        $this->path = $path;

        // get current file name, for all internal links
        $this->filename = './';
        array_push($this->ignorelist, basename(__FILE__));

        // insert page header
        $this->createHeader();

        // condition: create initial file list?
        if (isset($_GET['delete']) && !empty($_GET['delete'])) {

            // a path has been set, escape and use
            $path = basename($_GET['delete']);
            $path = urldecode($path);

            // condition : Step 2: seek deletion confirmation?
            if (!isset($_GET['confirm']) || $_GET['confirm'] != 'aye') {
                $this->createConfirmationStep($path);

            // step 3: delete!
            } else {
                $path = __DIR__ . '/' . $this->path . $path;
                $this->createShowDelete($path);
            }

        // step 1: no files selected, create file list
        } else {
            echo '
                <p>(Careful how you use this, there\'s no undo!)</p>
                <ul>
            ';

            $this->createFileList($path);
            echo '
                </ul>
            ';
        }

        // insert page footer
        $this->createFooter();
    }


    /**
     * Step 1: Create a list of all files within a specific directory
     *
     * @param string $path The server path to look for files in
     * @return array $fileList Array of all files, with file/directory details
     * @access public
     */
    function createFileList($path) {

        // condition : if the path isn't set, assume one
        if (!isset($path)) {
            $path = "./";
        }

        // temporary arrays to hold separate file and directory content
        $filelist = array();
        $directorylist = array();

        // get the ignore list, in local scope
        $ignorelist = $this->ignorelist;

        // Open directory and read contents
        if (is_dir($path)) {

            // loop through the contents (PHP4 compat)
            $dh  = opendir($path);
            while (false !== ($file = readdir($dh))) {

                // skip over any files in the ignore list
                if (!in_array($file, $ignorelist)) {

                    // condition : if it is a directory, add to dir list array
                    if (is_dir($path.$file)) {

                        $directorylist[] = array(
                            "path" => $path,
                            "file" => $file,
                            "filetype" => 'directory',
                            "date" => date("M d Y, H:i", filemtime($path.$file."")),
                            "filecount" => $this->countRelevantFiles($path.$file),
                            "filesize" => 0
                        );

                    // file, add to file array
                    } else {

                        $filelist[] = array(
                            "path" => $path,
                            "file" => $file,
                            "filetype" => $this->getFileType($path.$file) . " file",
                            "date" => date("M d Y, H:i", filemtime($path.$file."")),
                            "filecount" => 0,
                            "filesize" => $this->getFileSize(filesize($path.$file))
                        );
                    }
                }
            }
        }


        // merge file and directory lists
        $finalList = array_merge($directorylist, $filelist);

        // loop through each file
        foreach ($finalList as $key => $value) {

            // condition : add trailing slash for directories
            $trailingslash = ($value['filetype'] == 'directory' ) ? '/' : '';

            // condition : if it is a directory, display count of subfiles
            if ($value['filetype'] == 'directory') {
                $fileending = ($value['filecount'] == 1) ? 'item' : 'items';
                $filedetails = ' (contains '.$value['filecount'].' '.$fileending.')';

            // else, if it is a file, display file size
            } else {
                $filedetails = ' ('.$value['filesize'].')';
            }


            // create the html for each project
            echo '
                <li class="' . $value['filetype'].'" id="file_' . urlencode($value['file']) . '">
                    <strong>' . $value['file'] . '</strong> /
                    <em class="type">' . $value['filetype'] . '</em> /
                    <em class="type">' . $filedetails . '</em> /
            ';

            if ($value['filetype'] != "directory") {
                echo '
                    <em class="size">file size: ' . $value['filesize'] . '</em> /
                ';
            }

            echo '
                    <em class="date">created: ' . $value['date'] . '</em> /
                    <a href="./'.$this->filename.'?delete='.urlencode($value['file'].$trailingslash).'">
                        Delete
                    </a>
                </li>
            ';
        }
    }


    /**
     * count the number of files in a directory, not including the list of ignorable files
     *
     * @param string $path The server path to look for files in
     * @return int $count The number of relevant files
     * @access private
     */
    function countRelevantFiles($path, $count = 0) {

        // open the directory
        if (is_dir($path)) {

            // loop through all files, checking if we should count the current one
            $dh  = opendir($path);
            while (false !== ($file = readdir($dh))) {

                if (!in_array($file, $this->ignorelist)) {
                    $count++;
                    if(is_dir($path."/".$file)) {
                        $count = $this->countRelevantFiles($path."/".$file, $count);
                    }
                }
            }
        }

        // return the result
        return $count;
    }


    /**
     * list all sub-files of a directory
     *
     * @param string $path The server path to look for files in
     * @return void
     * @access private
     */
    function listFilesToDelete($path) {

        // open the directory
        if (is_dir($path)) {

            // loop through all files, checking if we should count the current one
            $dh  = opendir($path);
            while (false !== ($file = readdir($dh))) {

                if (!in_array($file, $this->ignorelist)) {

                    echo '<li>'.$path.'/'.$file.'</li>';

                    if(is_dir($path."/".$file)) {
                        $this->listFilesToDelete($path."/".$file);
                    }
                }
            }
        }
    }



    /**
     * Delete files
     *
     * @param string $path The server path to delete
     * @return void
     * @access private
     */
    function delete($path) {

        // Simple delete for a file
        if (is_file($path)) {

            echo '<li>deleting file: ' . $path . '</li>';
            return unlink($path);
        } else {

            // Loop through the folder
            $dir = dir($path);
            while (false !== $entry = $dir->read()) {

                // ignore specified files
                if (in_array($entry, $this->ignorelist)) {
                    continue;
                }

                // deep delete
                if (is_dir($path."/".$entry)) {
                    $this->delete($path."/".$entry);
                } else {
                    echo '<li>removing file: ' . $path.'/'.$entry.'</li>';
                    unlink($path."/".$entry);
                }
            }

            // Clean up
            $dir->close();
            echo '<li>removing directory: '.$path.'</li>';
            return rmdir($path);
        }
    }


    /**
     * Create a nice readable filesize from the number of bytes in a file
     *
     * @param int $size the size in bytes
     * @param string $retstring
     *
     * @return string the size in nice words
     */
    function getFileSize($size, $retstring = null)
    {
        $sizes = array(
            'B',
            'kB',
            'MB',
            'GB',
            'TB',
            'PB',
            'EB',
            'ZB',
            'YB'
        );

        if ($retstring === null) { $retstring = '%01.2f %s'; }
        $lastsizestring = end($sizes);

        foreach ($sizes as $sizestring) {
            if ($size < 1024) { break; }
            if ($sizestring != $lastsizestring) { $size /= 1024; }
        }

        if ($sizestring == $sizes[0]) { $retstring = '%01d %s'; } // Bytes aren't normally fractional

        return sprintf($retstring, $size, $sizestring);
    }


    /**
     * Function to find a file type for a given filename
     *
     * @param string $file filename/path
     * @return string $extension file type
     */
    function getFileType($file="") {

        // get file name
        $filearray = explode("/", $file);
        $filename = array_pop($filearray);

        // condition : if no file extension, return
        if(strpos($filename, ".") === false) return false;

        // get file extension
        $filenamearray = explode(".", $filename);
        $extension = $filenamearray[(count($filenamearray) - 1)];

        return $extension;
    }


    /* Page Building Methods */


    /**
     * Create page header
     */
    function createHeader(){
        echo '
<!DOCTYPE html>
<html dir="ltr" lang="en-gb">
    <head>
        <meta charset="utf-8" />
        <title>Deleter</title>
        <style type="text/css">
            * { margin:0; padding:0 }
            body { font-family:Arial, sans-serif; background:#999; }
            #wrapper { margin:20px; padding:20px; background:#fff }
            h1 { margin-bottom:0.5em }
            p { margin-bottom:1em; color:#f00; }
            em { margin-right:2px; font-size:80%; color:#666; vertical-align:top; }
            ul, ol { margin:0 0 1em 2em; }
            li { color:#666; margin-bottom:0.5em }
            li.directory { color:#000; }
            a { color:#f90; }
            a:hover { text-decoration:none }
            p.confirm a { display:inline-block; clear:both; padding:2px 5px; font-size:110%; font-weight:bold; color:#fff;    background:#f90; text-decoration:none; }
            p.confirm a:hover { background:#f60; }
        </style>
    </head>
    <body>
        <div id="wrapper">
            <h1>File deleter</h1>
';
    }


    /**
     * Create page footer
     */
    function createFooter(){
        echo '
        </div>

    </body>
</html>
';
    }



    /**
     * Create confirmation step
     */
    function createConfirmationStep($path){
        echo '
            <p><a href="'.$this->filename.'">&laquo; back to file list</a></p>
            <p>Please confirm that you want to delete the following files:</p>
            <p class="confirm"><a href="'.$this->filename.'?delete='.$path.'&amp;confirm=aye">Delete</a></p>
            <ol>
              <li>'.$path.'</li>
        ';

        $this->listFilesToDelete($path);

        echo '
            </ol>
            <p class="confirm"><a href="'.$this->filename.'?delete='.$path.'&amp;confirm=aye">Delete</a></p>
        ';
    }



    /**
     * Show the files you're deleting
     */
    function createShowDelete($path){
        echo '
            <p><a href="'.$this->filename.'">&laquo; back to file list</a></p>
            <p>The following items have been removed:</p>
            <ol>
        ';

        $this->delete($path);

        echo '
            </ol>
            <p><strong>Deletion complete.</strong></p>
            <p><a href="'.$this->filename.'">&laquo; back to file list</a></p>
        ';
    }
}
?>
{% endhighlight %}
