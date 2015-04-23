/**
 * Checks the CSS style using scss-lint
 *
 * Permissive -
 * run this to double-check against limited options on only certain files
 *
 * Settings are taken from .scss-lint.yml
 */

var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

module.exports = function () {

    // set up file excludes
    var files = [
        global.config.cssFiles,
        '!' + global.config.cssDir + '/base/_print.css',
        '!' + global.config.cssDir + '/base/_variables.css',
        '!' + global.config.cssDir + '/fonts/_raleway.css',
        '!' + global.config.cssDir + '/third-party/**/*.css'
    ];

    return gulp
        .src(files)
        .pipe(scsslint());
};
