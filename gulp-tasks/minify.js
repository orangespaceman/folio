/**
 * A Gulp task which minifies the JavaScript and CSS in the output directory.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var mincss = require('gulp-minify-css');

module.exports = function () {

    var js = gulp
        .src(global.config.siteDir + '/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(global.config.buildDir + '/js'));

    var css = gulp
        .src(global.config.siteDir + '/css/**/*.css')
        .pipe(mincss({
            keepSpecialComments: 0,
            noAdvanced: true
        }))
        .pipe(gulp.dest(global.config.buildDir + '/css'));

    return merge(js, css);
};
