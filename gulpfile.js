'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});


gulp.task('uglify', function () {
    return gulp.src("./client/*.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/scripts'));
});
