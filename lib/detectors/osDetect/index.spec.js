'use strict';

const expect = require('chai').expect;
const osDetect = require('.');

describe('Function: osDetect', () => {

  describe('Definition', () => {

    it('should be a generator function', () => {
      expect(typeof osDetect).to.equal('function');
      expect(osDetect[Symbol.toStringTag]).to.equal('GeneratorFunction');
    });

    it('should have 4 parameters', () => {
      expect(osDetect.length).to.equal(4);
    });

  });

});
