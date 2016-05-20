/// <binding AfterBuild='copy-deps' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

var paths = {};
paths.webroot = "wwwroot/lib/";
paths.npmMod = "./node_modules/";
paths.npmLibs = paths.webroot + "node_modules/";

gulp.task("copy-deps:angular2",
    function () {
        return gulp.src(paths.npmMod + 'angular2/bundles/**/*.js', { base: paths.npmMod + 'angular2/bundles' })
            .pipe(gulp.dest(paths.npmLibs + 'angular2'));
    });

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmMod + 'systemjs/dist/**/*.*', { base: paths.npmMod + 'systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + 'systemjs/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(paths.npmMod + 'es6-shim/es6-sh*', { base: paths.npmMod + 'es6-shim/' })
         .pipe(gulp.dest(paths.npmLibs + 'es6-shim/'));
});

gulp.task("copy-deps:es6-shim-for-ie", function () {
    return gulp.src(paths.npmMod + 'angular2/es6/dev/src/testing/shims_for_IE.js', { base: paths.npmMod + 'angular2/es6/dev/src/testing/' })
         .pipe(gulp.dest(paths.npmLibs + 'angular2/es6/dev/src/testing/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmMod + 'reflect-metadata/Reflect.js', { base: paths.npmMod + 'reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibs + 'reflect-metadata/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmMod + 'rxjs/bundles/*.*', { base: paths.npmMod + 'rxjs/bundles/' })
         .pipe(gulp.dest(paths.npmLibs + 'rxjs/'));
});

gulp.task("copy-deps:zone", function () {
    return gulp.src(paths.npmMod + 'zone/dist/**/*.*', { base: paths.npmMod + 'zone/dist/' })
         .pipe(gulp.dest(paths.npmLibs + 'zone/'));
});

gulp.task("copy-deps", ['copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:es6-shim-for-ie','copy-deps:reflect-metadata', 'copy-deps:rxjs', 'copy-deps:zone']);