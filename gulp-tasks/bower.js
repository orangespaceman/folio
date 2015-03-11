/**
 * Builds a 3rd-party JS file from the Bower components.
 */

var gulp = require('gulp');
var bower = require('main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');

module.exports = function () {

    return gulp
        .src(bower())
        .pipe(filter('*.js'))
        .pipe(concat('third-party.js'))
        .pipe(gulp.dest(global.config.siteDir + '/js'));
};
