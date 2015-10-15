var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

gulp.task('default', ['build', 'sass']);

gulp.task('build', function() {
    gulp
        .src([
            'src/application/application.module.js',
            'src/application/**/*.factory.js',
            'src/application/**/*.service.js',
            'src/application/**/*.controller.js',
            'src/application/**/*.provider.js',
            'src/application/**/*.directive.js',
        ])
        .pipe(concat('application.js'))
        .pipe(minify({
            mangle: false
        }))
        .pipe(gulp.dest('cordova/www/js/'));

    gulp
        .src(['src/application/**/*.html'])
        .pipe(gulp.dest('cordova/www/templates/'));

    gulp
        .src('src/index.html')
        .pipe(gulp.dest('cordova/www/'));
});

gulp.task('sass', function(done) {
    gulp.src('src/scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('cordova/www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '-min.css'
        }))
        .pipe(gulp.dest('cordova/www/css/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/application/**/*.js', ['build']);
});

