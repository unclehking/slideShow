
	var gulp = require('gulp');
	var stylus = require('gulp-stylus');
	var browserSync = require('browser-sync').create();

	gulp.task('stylus', function () {
		gulp.watch('./css/*.styl').on("change",function(e){
			gulp.src('./css/*.styl')
		    .pipe(stylus())
		    .pipe(gulp.dest('./css/build'));
	    });
	  	return gulp.src('./css/*.styl')
	    .pipe(stylus())
	    .pipe(gulp.dest('./css/build'));
	});

	gulp.task('browServer', function() {
		browserSync.init({
			server: "./"
		});
		gulp.watch(["./*.*","./js/*.*","./css/build/*.*"]).on("change",browserSync.reload);
	});
