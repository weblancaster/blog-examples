// Require modules
var gulp = require('gulp')
    , uglify = require('gulp-uglify')
    , minifyHTML = require('gulp-minify-html')
    , sass = require('gulp-sass');

// Here's the tasks
gulp.task('build', function(){
    var dist = 'dist/'
        , dirPublic = 'public/'
        , distStylesheets = dist + dirPublic + 'stylesheets/'
        , distJavascripts = dist + dirPublic + 'javascripts/';

    gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(distStylesheets));

    gulp.src('*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(dist))

    gulp.src('public/javascripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(distJavascripts))
});

// Gulp watch for file changes
gulp.task('default', function() {
    gulp.watch([
        'public/stylesheets/scss/**',
        'public/javascripts/*.js',
        '*.html',
        '!dist/**'
    ], function(event) {
        gulp.run('build');
    });
});