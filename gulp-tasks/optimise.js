/**
 * A Gulp task which optimises images in the output directory.
 */

var gulp = require('gulp');

module.exports = function () {

    return gulp
        .src(global.config.imagesDir + '/**/*')
        // optimise image step here
        // .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(global.config.buildDir + '/images'));

};
