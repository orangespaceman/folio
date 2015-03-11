/**
 * Checks the JavaScript style using JSCS.
 * Settings are taken from the .jscsrc file in the project root.
 */

var gulp = require('gulp');
var jscs = require('gulp-jscs');

module.exports = function () {

    return gulp
        .src(global.config.jsFiles)
        .pipe(jscs());

};
