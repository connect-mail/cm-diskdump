/*
 * cm-diskdump
 * https://github.com/parroit/cm-diskdump
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(options) {

    if (typeof options === 'string') {
        options = {
            folderPath: options
        };
    }

    options.folderPath = options.folderPath || '.';
    options.fileMode = options.fileMode || '0666';

    options.folderPath = path.resolve(options.folderPath);

    console.log('diskdump saving mails to ' + options.folderPath);

    return function(mail, next) {
        var filePath = path.join(options.folderPath, mail.id + '.eml');
        var fileStream = fs.createWriteStream(filePath, {
            flags: 'w',
            encoding: null,
            mode: options.fileMode
        });

        mail.data.on('error', next);
        fileStream.on('error', next);
        fileStream.on('finish', next);

        mail.data.pipe(fileStream);

        
    };

};
