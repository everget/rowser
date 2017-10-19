'use strict';

const expect = require('chai').expect;
const engineDetect = require('.');

describe('Function: engineDetect', () => {

  describe('Definition', () => {

    it('should be a generator function', () => {
      expect(typeof engineDetect).to.equal('function');
      expect(engineDetect[Symbol.toStringTag]).to.equal('GeneratorFunction');
    });

    it('should have 3 parameters', () => {
      expect(engineDetect.length).to.equal(3);
    });

  });

});
