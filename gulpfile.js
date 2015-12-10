var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  src: 'src',
  application: 'src/application',
  scss: 'src/scss',
  static: 'static',
  build: 'build'
};

gulp.task('default', ['build', 'sass']);

gulp.task('build', function() {
  gulp
    .src([
      paths.application + '/application.module.js',
      paths.application + '/**/*.factory.js',
      paths.application + '/**/*.service.js',
      paths.application + '/**/*.controller.js',
      paths.application + '/**/*.provider.js',
      paths.application + '/**/*.directive.js',
    ])
    .pipe(concat('application.js'))
    .pipe(minify({
      mangle: false
    }))
    .pipe(gulp.dest(paths.build + '/www/js/'));

  gulp
    .src([paths.application + '/**/*.html'])
    .pipe(gulp.dest(paths.build + '/www/templates/'));

  gulp
    .src(paths.src + '/index.html')
    .pipe(gulp.dest(paths.build + '/www/'));

  gulp
    .src(paths.static + '**/*', { base: paths.static })
    .pipe(gulp.dest(paths.build + '/www/'));
});

gulp.task('sass', function(done) {
  gulp
    .src(paths.scss + '/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.build + '/www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '-min.css'
    }))
    .pipe(gulp.dest(paths.build + '/www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.scss + '/**/*.scss', ['sass']);
  gulp.watch(paths.src + '/**/*', ['build']);
});

gulp.task('install', function() {
  bower
    .commands
    .install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    })
    .on('end', function() {
      gulp.start('default');
    });
});

