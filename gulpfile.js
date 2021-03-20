// npm install gulp gulp-sass browser-sync gulp-imagemin imagemin-pngquant gulp-cache gulp-autoprefixer --save-dev
const {
    stream
} = require('browser-sync');
const { dest } = require('gulp');
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browser_sync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer')
gulp.task('scss', function () {
    return gulp.src('app/css/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browser_sync.reload({
            stream: true
        }))
});
gulp.task('browser_sync', function () {
    browser_sync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
})
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browser_sync.reload({
            stream: true
        }))
})
gulp.task('scripts', function () {
    return gulp.src(['app/js/**/*.js', 'app/libs**/*.js'])
        .pipe(browser_sync.reload({
            stream: true
        }))
})
gulp.task('watch', function () {
    gulp.watch('app/css/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch(['app/js/**/*.js', 'app/libs/**/*.js'], gulp.parallel('scripts'))
})
gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(dest('dist/img'))
})
gulp.task('prebuild', async function () {
    let build_css = gulp.src([
        'app/css/**/*.css',
        'app/css/**/*.scss',
    ])
        .pipe(gulp.dest('dist/css'))

    let build_js = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('clear', function () {
    return cache.clearAll()
})
gulp.task('default', gulp.parallel('scss', 'scripts', 'browser_sync', 'watch'))
gulp.task('build', gulp.parallel('prebuild', 'img', 'scss', 'scripts'))
