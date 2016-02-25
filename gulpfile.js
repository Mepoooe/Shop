var gulp = require('gulp'),
	//JS
	uglify = require('gulp-uglify'),
	modernizr = require('gulp-modernizr'),
	//HTML
	browserSync = require('browser-sync'),
	htmlmin = require('gulp-htmlmin'),
	jade = require('gulp-jade'),
	//CSS
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	uncss = require('gulp-uncss'),
	// sass = require('gulp-sass'),
	compass = require('gulp-compass'),
	plumber = require('gulp-plumber'),
	//IMG
	/*spritesmith = require('gulp.spritesmith'),*/
	//Build
	gulpif = require('gulp-if'),
	useref = require('gulp-useref'),
	filter = require('gulp-filter'),
	rimraf = require('gulp-rimraf'),
	size = require('gulp-size'),
	concat = require('gulp-concat');

//=========================== 
//Paths
//===========================
var paths = {
	html: 'app/*.html',
	css: 'app/css/**/*.css',
	sass: 'app/scss/*.scss',
	js: 'app/js/**/*.js',
	php: 'app/php/**/*.php',
	jade: 'app/jade/*.jade',
	img: 'app/img/*',
	sprites: 'app/img/sprites/*.png',
	fonts: 'app/fonts/*',
//=========================== 
	dist: 'dist/**/*'
};



//=========================== 
//Default Server
//===========================

//Watch
gulp.task('watch',function(){
	gulp.watch([
		paths.html,
		paths.css,
		paths.js,
		paths.php,
	]).on('change', browserSync.reload)
});

//Server
gulp.task('server', function(){
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}

	});
});

//Default
gulp.task('default', ['server', 'watch']);

//===========================
//Build Production
//===========================

// Build Progect Task
gulp.task('build', ['clean'], function () {
  gulp.start('dist');
});

// Build Dist Directory
gulp.task('dist', ['userF', 'imgmini', 'fonts', 'extras'],function () {
	return gulp.src(paths.dist)
	.pipe(size({title: 'build'}));
});

// Clean Dist Directory
gulp.task('clean', function() {
	return gulp.src('dist', { read: false })
  	.pipe(rimraf());
});

// Add HTML, CSS & JS to Dist
gulp.task('userF', function () {
    return gulp.src(paths.html)

        .pipe(useref())
        
        .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))

        .pipe(gulpif('*.css', autoprefixer({
				browsers: ['last 5 versions'],
				cascade: false})
        	))
        .pipe(gulpif('*.css', uncss({
            	html: [paths.html]})
        	))
        .pipe(gulpif('*.css', cssnano()))

        .pipe(gulpif('*.js', uglify()))

        .pipe(gulp.dest('dist'));
});


// Add fonts to Dist
gulp.task('fonts', function() {
  gulp.src(paths.fonts)
    .pipe(filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
    .pipe(gulp.dest('dist/fonts/'))
});

// Add other to Dist
gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/**/*.html'
  ]).pipe(gulp.dest('dist'));
});

// Start dist server
gulp.task('distserver', function(){
	browserSync({
		port: 8888,
		server: {
			baseDir: 'dist'
		}

	});
});

//===========================
//Other Modules
//===========================


//Modernizr
gulp.task('modernizr', function(){
	gulp.src(paths.js)
	.pipe(modernizr(
		{
			"options" : [
				"setClasses",
				"html5shiv"
			],
			"tests" : [
				"placeholder",
				"cssanimations", 
				"backgroundsize",
				"cssgradients"
			],
			"uglify" : true,
		}
	))
	.pipe(gulp.dest("app/js/vendor"))
});

//Add Sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src(paths.img + 'socials/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('path/to/output/'));
});


gulp.task('sass', function () {
  return gulp.src('app/sass/*.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src(paths.jade)
  	.pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: '\t',
    }))
    .pipe(gulp.dest('app/'))
});

gulp.task('compass', function() {
  gulp.src('app/scss/*.scss')
  	.pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      css: 'app/css',
      sass: 'app/scss'
    }))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('compil', function () {
  gulp.watch('app/jade/**/*.jade', ['jade']);
  gulp.watch('app/scss/**/*.scss', ['compass']);
  gulp.watch([
		paths.html,
		paths.css,
		paths.js,
		paths.php,
	]).on('change', browserSync.reload)
});

gulp.task('test', ['server', 'compil']);