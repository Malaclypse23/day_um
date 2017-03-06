var gulp = require('gulp'); 


var changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass'),
    gulpif = require('gulp-if'),
    gulpcleancss = require('gulp-clean-css'),
    sass = require('gulp-sass');

var env = process.env.NODE_ENV || 'development'; 
var cssDir = 'public/css';

// Sass
gulp.task('sass', function() {
	var config = {};
	
	if (env === 'develpment') {
		config.sourceComments = 'map';
	}
	
	if (env === 'production') {
		config.outputStyle = 'compressed';
	}

  	return gulp.src('sass/main.scss')
    	.pipe(sass( { sourceComments: 'map' }))
    	.pipe(gulp.dest(cssDir));
});


gulp.task('styles', function() {
  return gulp.src(['sass/**/*.scss'])
    .pipe(compass({
      css: cssDir,
      sass: 'sass/',
      image: 'public/img'
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //.pipe(gulp.dest(cssDir))
    //.pipe(minifycss())
    .pipe(gulp.dest(cssDir));
});

// JS-uglify
/*
gulp.task('js', function() {
  	return gulp.src('public/js/*.js')
    	.pipe(browserify( { debug: env === 'development' }))
    	.pipe(gulpif(env === 'production', uglify()))
    	.pipe(gulp.dest('public/js'));
});
*/

// Komprimiere Bilder
gulp.task('images', function() {
  var imgSrc = './public/img/big/**/*',
      imgDst = outputDir + '/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});