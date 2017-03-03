var gulp = require('gulp'); 

global.jQuery = require('jquery');

var changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    gulpif = require('gulp-if');
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