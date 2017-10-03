'use strict';

const expect = require('chai').expect;
const browserDetect = require('.');

describe('Function: browserDetect', () => {

  describe('Definition', () => {

    it('should be a generator function', () => {
      expect(typeof browserDetect).to.equal('function');
      expect(browserDetect[Symbol.toStringTag]).to.equal('GeneratorFunction');
    });

    it('should have two parameters', () => {
      expect(browserDetect.length).to.equal(2);
    });

  });

});
