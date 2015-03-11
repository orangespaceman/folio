/**
 * Compile the JS with Browserify.
 *
 * See:
 * https://github.com/gulpjs/gulp/blob/master/docs/
    recipes/fast-browserify-builds-with-watchify.md
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');

module.exports = function () {

    var indexJs = global.config.jsDir + '/index.js';
    var bundler = watchify(browserify(indexJs, watchify.args));

    bundler.transform('brfs');

    function bundle () {
        return bundler.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(global.config.siteDir + '/js'));
    }

    bundler.on('update', bundle);

    return bundle;
};
