/**
 * Compiles the SASS.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

module.exports = function () {

    // SASS will ignore files that start with an underscore
    // so re-add them once processed

    return gulp.src(global.config.sassFiles)
        .pipe(sass())
        .pipe(rename({
            prefix: "_"
        }))
        .pipe(gulp.dest(global.config.cssDir));
};
