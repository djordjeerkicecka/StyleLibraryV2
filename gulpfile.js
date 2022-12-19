const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const purgecss = require('gulp-purgecss');

// Task - Compile Scss
gulp.task('compile-scss', function () {
    return gulp
        .src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Task - Minify CSS
gulp.task('minify-css', function () {
    return gulp
        .src('./css/**/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./css'));
});

// Task - Purge CSS
gulp.task('purge-css', function () {
    return gulp
        .src('./css/**/*.css')
        .pipe(purgecss())
        .pipe(gulp.dest('./css'));
})

