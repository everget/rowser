'use strict';

const expect = require('chai').expect;
const botDetect = require('.');

describe('Function: botDetect', () => {

  describe('Definition', () => {

    it('should be a generator function', () => {
      expect(typeof botDetect).to.equal('function');
      expect(botDetect[Symbol.toStringTag]).to.equal('GeneratorFunction');
    });

    it('should have 4 parameters', () => {
      expect(botDetect.length).to.equal(4);
    });

  });

});

