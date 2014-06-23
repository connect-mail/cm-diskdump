/*
 * cm-diskdump
 * https://github.com/parroit/cm-diskdump
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';



module.exports = function(req, res) {
    //accept all mails for me
    if (req.to === 'me@parro.it') {
        res.accept();
    } else {
        //rejects all other ones
        res.reject();
    }

};


module.exports.awesome = function() {
    return 'hello livia';
};
