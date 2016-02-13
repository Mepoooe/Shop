var gulp = require("gulp"),
 browserSync = require('browser-sync'),
 modernizr = require('gulp-modernizr'),
 jade = require('gulp-jade'),
 plumber = require('gulp-plumber');

 var jadePath = './app/jade/*jade';

gulp.task('modernizr', function(){
	gulp.src('app/js/*.js')
		.pipe(modernizr(
		  {
		  	//подключаем необх опции
		  	"options" : [
		  		"setClasses",
		  		"html5shiv"
		  		],

		  	//подключ необх набор тустов
		  	"test" : ['placeholder', 'cssanimations'],

		  	//собирать минифиц-ную вурсию
		  	"uglify" : true,

		  }
		))
	.pipe(gulp.dest("app/js/vendor"))
});

gulp.task('jade', function(){
	var YOUR_LOCALS = {};//можно  подключить JSON с данными

	gulp.src(jadePath)
		.pipe(plumber())
		.pipe(jade({
			locls: YOUR_LOCALS,
			pretty: '\t'
		}))
		.pipe(gulp.dest('./app/html/'))
});

gulp.task('server', function(){
 browserSync({
  port: 9000,
  server: {
   baseDir: 'app'
  }
 });
});

gulp.task('watch', function(){
 gulp.watch([
  'app/*.html',
  'app/js/**/*.js',
  'app/css/**/*.css',
  jadePath, ['jade']
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['modernizr', 'server', 'watch']);