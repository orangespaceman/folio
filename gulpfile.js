var gulp = require('gulp');
var seq = require('run-sequence');
var tasks = require('./gulp-tasks');
var util = require('util');

var c = global.config = {};

c.srcDir = './src/_src/';
c.buildDir = './build';
c.compiledDir = './src/assets/';
c.bowerDir = './bower_components';

c.jsDir = util.format('%s/js', c.srcDir);
c.jsFiles = util.format('%s/**/*.js', c.jsDir);

c.sassDir = util.format('%s/sass', c.srcDir);
c.sassFiles = util.format('%s/**/*.scss', c.sassDir);

c.cssDir = util.format('%s/css', c.srcDir);
c.cssFiles = util.format('%s/**/*.css', c.cssDir);

//c.imagesDir = util.format('%s/images', c.srcDir);
//c.fontsDir = util.format('%s/fonts', c.srcDir);

Object.keys(tasks).forEach(function (name) {
    gulp.task(name, tasks[name]);
});

gulp.task('start', function (cb) {
    seq('lint-js', 'compile', 'watch', cb);
});

gulp.task('lint-js', function (cb) {
    seq(['lint-js-jshint', 'lint-js-jscs'], cb);
});

gulp.task('compile', function (cb) {
    seq(['bower', 'compile-css', 'compile-js'], cb);
});

gulp.task('build', function (cb) {
    //seq('compile', ['minify', 'optimise-images', 'static-files'], cb);
});

gulp.task('watch', function () {
    gulp.watch(c.cssFiles, ['compile-css']);
    gulp.watch(c.jsFiles, ['compile-js', 'lint-js']);
});
