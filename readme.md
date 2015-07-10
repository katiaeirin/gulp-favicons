# gulp-favicons

Favicons generator for Gulp.

**This is a modified fork from original package [gulp-favicons](https://github.com/haydenbleasel/gulp-favicons)**

Simple wrapper around [favicons](https://github.com/haydenbleasel/favicons).

To install run:

```
npm install git://github.com/katiaeirin/gulp-favicons --save
```

Example usage:

```
gulp.task('default', function () {
    gulp.src('logo.png')
        .pipe(favicons({
            html: 'index.html',
            dest: 'favicons',
            iconsPath: 'favicons',
            background: '#ffffff', 
            logging: true,
        }, function (code) {
            console.log(code);
        }));
});
```
