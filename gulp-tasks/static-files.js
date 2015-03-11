/**
 * A Gulp task which copies static files that don't need specific processing.
 */

var gulp = require('gulp');

module.exports = function () {

    return gulp
        .src(global.config.fontDir + '/**/*.*')
        .pipe(gulp.dest(global.config.outputDir + '/fonts'));

};
