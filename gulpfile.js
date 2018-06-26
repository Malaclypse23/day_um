'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var runSequence = require('run-sequence');
var gautoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
//var sass = require('gulp-sass');

gulp.task('cssmin'); // TODO
/*
var changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass'),
    gulpif = require('gulp-if'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');
*/

var env = process.env.NODE_ENV || 'development'; 
var sassDir = 'sass/';
var cssDir = 'public/css';
var jsDir = 'public/js';

var assets = {
  js: {
      main: [
          jsDir + 'app.js',
          jsDir + 'jquery-3.2.0.min.js',
          jsDir + 'jquery.cookie.js',
          jsDir + 'jquery.mobile.custom.min.js',
        ],
    }
};

gulp.task('watch', function() {
  plugins.refresh.listen();

  gulp
    .watch(
      _.union(
        sassDir
      ),
      ['sass', 'csslint']
    )
    .on('change', plugins.refresh.changed)
  ;

  gulp
    .watch(_.union(jsDir), ['eslint', 'uglify:v5'])
    .on('change', plugins.refresh.changed)
  ;
});

/*
gulp.task('sass', function(done) {
  runSequence(
    'sass:main.scss',
    done
  );
});
*/

gulp.task('sass', function() {
  return gulp
    .src(['sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(compass({
      css: cssDir,
      sass: 'sass/',
      image: 'public/img'
    }))
    .pipe(gautoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
    //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //.pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    //.pipe(plugins.csso()) // TODO
    .pipe(gulp.dest(cssDir));
  ;
});

gulp.task('uglify', function(done) {
  runSequence('uglify:main', done);
});

gulp.task('uglify:main', function() {
  return gulp
    .src(assets.js.main)
    .pipe(plugins.uglify())
    .pipe(plugins.concat('script.js'))
    .pipe(gulp.dest('js/min'));
});

gulp.task('lint', function(done) {
  runSequence('sass', ['csslint', 'eslint'], done);
});

gulp.task('build', function(done) {
  runSequence('lint', ['uglify', 'cssmin'], done); // TODO cssmin
});

gulp.task('default', function(done) {
  runSequence('build', 'lint', ['watch'], done);
});

gulp.task('csslint'); // TODO

gulp.task('eslint'); // TODO




/* Sass
gulp.task('sass', function() {
	var config = {};
	
	if (env === 'development') {
		config.sourceComments = 'map';
	}
	
	if (env === 'production') {
		config.outputStyle = 'compressed';
	}

  	return gulp.src('sass/main.scss')
    	.pipe(sass( { sourceComments: 'map' }))
    	.pipe(gulp.dest(cssDir));
});

*/


//gulp.task('styles', function() {
//  return gulp.src(['sass/**/*.scss'])
/*
    .pipe(compass({
      css: cssDir,
      sass: 'sass/',
      image: 'public/img'
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssDir));
});
*/


// JS-uglify
gulp.task('js', function() {
  	return gulp.src('public/js/app.js')
    	.pipe(gulpif(env === 'development', uglify()))
    	.pipe(gulp.dest('public/js/min'));
});

// Komprimiere Bilder
gulp.task('images', function() {
  var imgSrc = './public/img/big/**/*',
      imgDst = outputDir + '/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});