var gulp = require ('gulp');
var rename = require ('gulp-rename');
var sass = require ('gulp-sass');
var cleancss = require ('gulp-clean-css');
var autoprefixer = require ('gulp-autoprefixer');
var sourcemaps = require ('gulp-sourcemaps');
var browserSync = require ('browser-sync').create();

function css_style(done) {
	
	gulp.src('./src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
				errorLogToConsole: true,
				// outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefixer({
				overrideBrowserslist: ['last 3 version'],
				cascade: false
		}))
		.pipe(cleancss({compatibility: 'ie8'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./src/css/'))
		.pipe(browserSync.stream());

	done();
}

function sync(done) {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

function browserReload(done) {
	browserSync.reload();
	done();
}

function watchFiles() {
	gulp.watch('./src/*scss/**/*', css_style);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./src/**/*.js', browserReload);
}

gulp.task('default', gulp.parallel(watchFiles, sync));
gulp.task(sync);