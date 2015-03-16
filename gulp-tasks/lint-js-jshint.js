/**
 * Lints the JavaScript using JSHint.
 * Settings are taken from the .jshintrc file in the project root
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function () {

    return gulp
        .src(global.config.jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));

};
