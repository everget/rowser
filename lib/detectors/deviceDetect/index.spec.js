'use strict';

const expect = require('chai').expect;
const deviceDetect = require('.');

describe('Function: deviceDetect', () => {

  describe('Definition', () => {

    it('should be a generator function', () => {
      expect(typeof deviceDetect).to.equal('function');
      expect(deviceDetect[Symbol.toStringTag]).to.equal('GeneratorFunction');
    });

    it('should have 3 parameters', () => {
      expect(deviceDetect.length).to.equal(3);
    });

  });

});
