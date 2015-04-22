/**
 * Compile the JS with Browserify.
 */

var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

module.exports = function () {

    // add readable header to minified source
    var head = [
        '/*!',
        '* Hello there!',
        '*',
        '* If you are keen to see the source JS files, take a look on github:',
        '*',
        '* https://github.com/thegingerbloke/folio',
        '*',
        '*/'
    ].join('\n');

    // set entry point + paths
    var filename = 'site.js';
    var src = global.config.jsDir + '/' + filename;
    var dest = global.config.compiledDir + '/js';

    // compile
    return browserify(src).bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(filename))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(header(head))
        .pipe(gulp.dest(dest));
};
