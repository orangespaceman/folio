/**
 * Compiles the CSS.
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var mincss = require('gulp-minify-css');

module.exports = function () {

    return gulp.src(global.config.cssDir + '/*.css')
        .pipe(postcss([
            require('postcss-import')(),
            require('postcss-custom-properties')(),
            require('postcss-custom-media')(),
            require('autoprefixer-core')()
        ]))
        .pipe(mincss({
            noAdvanced: true
        }))
        .pipe(gulp.dest(global.config.compiledDir + '/css'));
};
