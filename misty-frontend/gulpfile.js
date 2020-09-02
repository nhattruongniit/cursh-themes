var gulp = require('gulp')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var spritesmith = require("gulp.spritesmith");
var gulpif = require("gulp-if");
var browserSync = require('browser-sync')
var reload = browserSync.reload;

function plumberError(error) {
    console.log(error.toString())
    this.emit('end')
}


function pugScript() {
    return  gulp.src('./frontend/pug/**/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('./dist/'))
            .pipe(browserSync.stream())
}

function sassScript() {
    return  gulp.src('./frontend/sass/**/*.scss')
            .pipe(plumber({
                errorHandler: plumberError
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 5 versions']
            }))
            .pipe(gulp.dest('./dist/css/'))
            .pipe(browserSync.stream());
}

function jsScript() {
    return  gulp.src('./frontend/js/*.js')
            .pipe(gulp.dest('./dist/js/'));
}


function watch() {
    gulp.watch('./frontend/pug/**/*.pug', pugScript);
    gulp.watch('./frontend/sass/**/*.scss', sassScript);
    gulp.watch('./frontend/js/*.scss', jsScript)
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
    watch()
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })
}

  
exports.default = defaultTask;