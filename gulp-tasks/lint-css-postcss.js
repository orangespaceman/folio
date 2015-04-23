/**
 * Checks the CSS style using postcss-bem-linter
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');

module.exports = function () {

    var src = global.config.cssFiles;

    return gulp.src(src)
        .pipe(postcss([
            require('postcss-bem-linter')()
        ]))
        .on('error', function (err) {
            console.log(err.message);
            this.emit('end');
        });
};
