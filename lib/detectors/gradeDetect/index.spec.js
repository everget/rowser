'use strict';

const expect = require('chai').expect;
const gradeDetect = require('.');

describe('Function: gradeDetect', () => {

  describe('Definition', () => {

    it('should be a generator function', () => {
      expect(typeof gradeDetect).to.equal('function');
      expect(gradeDetect[Symbol.toStringTag]).to.equal('GeneratorFunction');
    });

    it('should have 2 parameters', () => {
      expect(gradeDetect.length).to.equal(2);
    });

  });

});
