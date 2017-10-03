'use strict';

const expect = require('chai').expect;
const getFirstMatch = require('.');

describe('Function: getFirstMatch', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof getFirstMatch).to.equal('function');
    });

    it('should have two parameters', () => {
      expect(getFirstMatch.length).to.equal(2);
    });

  });

  // TODO
  describe('Return', () => {
    beforeEach(() => {});
    afterEach(() => {});

    xit('should always return a string', () => {});
  });

});
