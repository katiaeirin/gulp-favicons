var gulp = require('gulp'),
    favicons = require('../');

gulp.task('default', function () {
    gulp.src('logo.png')
        .pipe(favicons({
            html: 'index.html', // HTML file to write or append metadata
            dest: 'favicons',
            iconsPath: 'favicons',
            background: '#ffffff', 
            logging: true,
        }, function (code) {
            console.log(code);
        }));
});
