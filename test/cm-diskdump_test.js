/*
 * cm-diskdump
 * https://github.com/parroit/cm-diskdump
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var diskdump = require('../lib/cm-diskdump.js');

describe('cm-diskdump module', function(){
  describe('#awesome()', function(){
    it('should return a hello', function(){
      diskdump.awesome('livia').should.equal('hello livia');
    });
  });
});
