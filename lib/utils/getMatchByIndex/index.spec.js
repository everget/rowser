'use strict';

const expect = require('chai').expect;
const getMatchByIndex = require('.');

describe('Function: getMatchByIndex', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof getMatchByIndex).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(getMatchByIndex.length).to.equal(3);
    });

  });

  describe('Return', () => {
    let ua = null;

    beforeEach(() => {
      ua = 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 640 XL LTE Dual SIM) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15063';
    });

    afterEach(() => {
      ua = null;
    });

    it('should return an empty string when regexp doesnt match', () => {
      expect(getMatchByIndex(4, /awesomebrowser/i, ua)).to.equal('');
    });

    it('should return an empty string when regexp matches\' length is less or equal `index` argument', () => {
      expect(getMatchByIndex(4, /(awesomebrowser)/i, ua)).to.equal('');
    });

    // it('should return 3st match from array of matches when string is matched', () => {
    //   expect(getMatchByIndex(/edg([ea]|ios)\/(\d+(\.\d+)?)/i, ua)).to.equal('15.15063');
    // });

  });

});
