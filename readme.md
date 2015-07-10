# gulp-favicons

Favicons generator for Gulp.

**This is a modified fork from original package [gulp-favicons](https://github.com/haydenbleasel/gulp-favicons)**

Simple wrapper around [favicons](https://github.com/haydenbleasel/favicons).

To install run:

```
npm install git://github.com/katiaeirin/gulp-favicons --save
```

Example usage:

```js
gulp.task('default', function () {
    gulp.src('logo.png')
        .pipe(favicons({
            html: 'index.html',     // Path(s) for HTML file to write or append metadata. `string` or `array`
            dest: 'favicons',       // Path for writing the favicons to. `string`
            iconsPath: 'favicons',  // Path for overriding default icons path. `string`
            background: '#ffffff',  // Background colour for flattened icons. `string`
            logging: true,          // Print logs to console? `boolean`
        }, function (code) {
            console.log(code);
        }));
});
```
