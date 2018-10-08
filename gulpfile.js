var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('styles', function () {
    'use strict';
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('sync', function () {
    'use strict';
    browserSync.init(["stylesheets/*.css"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['styles', 'sync'], function () {
    'use strict';
    gulp.watch('sass/**/*.scss', ['styles']);
});