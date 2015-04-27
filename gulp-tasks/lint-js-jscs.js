/**
 * Checks the JavaScript style using JSCS.
 * Settings are taken from the .jscsrc file in the project root.
 */

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var map = require('map-stream');
var gutil = require('gulp-util');

module.exports = function () {

    var stream = gulp
        .src(global.config.jsFiles)
        .pipe(jscs());

    stream.on('error', function (err) {
        console.log(err.message);
        stream.emit('end');
        gutil.beep();
    });

    return stream;

};
