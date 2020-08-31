const gulp = require('gulp'); // gulp
const sass = require('gulp-sass'); // build scss to css
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer'); // autoprefix css
const browserSync = require('browser-sync').create(); // sync browser
const sourceMaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const cssnano = require('gulp-cssnano');


gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('html', function () {
    return gulp.src('*html')
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('watch',function(){
    gulp.watch('scss/**/*.scss',gulp.series('sass'))
})
gulp.task('serve', gulp.series( 'sass'),  function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch("scss/**/*.scss", ["sass"]);
    gulp.watch("app/*.html", ["html"]);
});

gulp.task('default', function () {
    return gulp.src('build/css/style.css')
        .pipe(sourceMaps.init())
        .pipe(cssnano())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('build/css'));
});




