'use strict';

const expect = require('chai').expect;
const getSecondMatch = require('.');

describe('Function: getSecondMatch', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof getSecondMatch).to.equal('function');
    });

    it('should have two parameters', () => {
      expect(getSecondMatch.length).to.equal(2);
    });

  });

  // TODO
  describe('Return', () => {
    beforeEach(() => {});
    afterEach(() => {});

    xit('should always return a string', () => {});
  });

});
