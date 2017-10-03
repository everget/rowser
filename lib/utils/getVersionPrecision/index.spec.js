'use strict';

const expect = require('chai').expect;
const random = require('lodash.random');
const getVersionPrecision = require('.');

describe('Function: getVersionPrecision', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof getVersionPrecision).to.equal('function');
    });

    it('should have one parameter', () => {
      expect(getVersionPrecision.length).to.equal(1);
    });

  });

  describe('Return', () => {
    const fakeVersionsArray = ['', '5.0', '', '6.0.0', '', '15.0.1147.100', ''];
    let fakeVersion;

    beforeEach(() => {
      fakeVersion = fakeVersionsArray[random(0, fakeVersionsArray.length - 1)];
    });

    afterEach(() => {
      fakeVersion = null;
    });

    it('should always return a positive integer number', () => {
      let returnedValue = getVersionPrecision(fakeVersion);

      expect(typeof returnedValue).to.equal('number');
      expect(returnedValue > 0).to.equal(true);
      expect(Number.isInteger(returnedValue)).to.equal(true);
    });

  });

});
