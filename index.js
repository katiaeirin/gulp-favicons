/*jslint node:true, nomen:true, unparam:true*/

(function () {

    'use strict';

    var favicons = require('favicons'),
        through2 = require('through2'),
        util     = require('gulp-util'),
        path     = require('path');

    module.exports = function (params, htmlCodeCallback) {

        if (params) {
            var options = {
                files: {
                    dest: params.dest ? params.dest : null,
                    html: params.html ? params.html : null,
                    iconsPath: params.iconsPath ? params.iconsPath : null
                },
                settings: { 
                    background: params.background ? params.background : null,
                    logging: params.logging ? params.logging : null
                }
            };
        };

        return through2.obj(function (file, enc, cb) {

            if (file.isNull()) {
                cb(new util.PluginError('gulp-favicons', 'Icon file not specified'));
            } 
            if (file.isStream()) {
                cb(new util.PluginError('gulp-favicons', 'Streaming not supported'));
            } 
            else {
                options.files.src = file.path;
                favicons(options, function (error, html) {
                    if (error) console.log(error);
                    else  console.log(html);
                });

                options = favicons.getConfig(options);
                options.data.favicon_generation.master_picture = { type: 'inline', content: file.contents.toString('base64') };
                cb();
            }

        }, function (cb) {

            var that = this;

            favicons.generateFaviconStream(options, function (error, data) {
                if (error) {
                    that.end();
                    cb(error);
                }
                if (htmlCodeCallback) {
                    htmlCodeCallback(data.favicon_generation_result.favicon.html_code);
                }
            })
            .on('entry', function (entry) {
                that.push(new util.File({
                    path: entry.path,
                    contents: entry
                }));
            })
           .on('end', cb);
        });
    };
}());