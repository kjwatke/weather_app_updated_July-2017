const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const minImg = require('gulp-imagemin');
const cleancss = require('gulp-cleancss');

gulp.task('css', () => gulp
    .src('./public/css/styles.css')
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(cleancss({ keepBreaks: false }))
    .pipe(gulp.dest('build/css')));

gulp.task('image', () => gulp.src('./public/img/*').pipe(minImg()).pipe(gulp.dest('build/img')));
