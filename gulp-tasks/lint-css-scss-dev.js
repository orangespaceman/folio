/**
 * Checks the CSS style using scss-lint
 *
 * Less permissive -
 * run this to see a big list of errors to sort through
 *
 * Settings are taken from .scss-lint-dev.yml
 */

var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

module.exports = function () {

    // set up file excludes
    var files = [
        global.config.cssFiles,
        '!' + global.config.cssDir + '/fonts/_raleway.css',
        '!' + global.config.cssDir + '/third-party/**/*.css'
    ];

    return gulp
        .src(files)
        .pipe(scsslint({
            config: '.scss-lint-dev.yml'
        }));
};
