'use strict';

const expect = require('chai').expect;
const getFirstMatch = require('.');

describe('Function: getFirstMatch', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof getFirstMatch).to.equal('function');
    });

    it('should have 2 parameters', () => {
      expect(getFirstMatch.length).to.equal(2);
    });

  });

  describe('Return', () => {
    let ua = null;

    beforeEach(() => {
      ua = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';
    });

    afterEach(() => {
      ua = null;
    });

    it('should return an empty string when regexp doesnt match', () => {
      expect(getFirstMatch(/awesomebrowser/i, ua)).to.equal('');
    });

    it('should return an empty string when regexp matches\' length is less or equal to 1', () => {
      expect(getFirstMatch(/(awesomebrowser)/i, ua)).to.equal('');
    });

    it('should return 1st match from array of matches when string is matched', () => {
      expect(getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i, ua)).to.equal('60.0');
    });

  });

});
