'use strict';

const expect = require('chai').expect;
const getVersionPrecision = require('.');

describe('Function: getVersionPrecision', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof getVersionPrecision).to.equal('function');
    });

    it('should have 1 parameter', () => {
      expect(getVersionPrecision.length).to.equal(1);
    });

  });

  describe('Return', () => {

    it('should return `0` when got an empty string', () => {
      let returnedValue = getVersionPrecision('');

      expect(typeof returnedValue).to.equal('number');
      expect(returnedValue === 0).to.equal(true);
      expect(Number.isInteger(returnedValue)).to.equal(true);
    });

    const fakeVersionsArray = ['5.0', '6.0.0', '15.0.1147.100'];
    it('should return a positive integer when got non-empty string', () => {
      fakeVersionsArray.forEach((version) => {
        let returnedValue = getVersionPrecision(version);

        expect(typeof returnedValue).to.equal('number');
        expect(returnedValue > 0).to.equal(true);
        expect(Number.isInteger(returnedValue)).to.equal(true);
      });
    });

  });

});
