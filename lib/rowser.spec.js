'use strict';

const expect = require('chai').expect;
const rowser = require('./rowser');

describe('Object: rowser', () => {

  describe('Definition', () => {

    it('should be a non-empty proxied object', () => {
      expect(typeof rowser).to.equal('object');
      expect(Object.keys(rowser).length > 0).to.equal(true);
    });

  });

  describe('Property: `summary`', () => {

    it('should be defined', () => {
      expect(rowser.summary).to.exist;
    });

    it('should have initial value of empty object', () => {
      expect(typeof rowser.summary).to.equal('object');
      expect(Object.keys(rowser.summary).length).to.equal(0);
    });

  });

  describe('Method: `detect`', () => {

    it('should be defined', () => {
      expect(rowser.detect).to.exist;
    });

    it('should be a function', () => {
      expect(typeof rowser.detect).to.equal('function');
    });

    it('should have one parameter', () => {
      expect(rowser.detect.length).to.equal(1);
    });

  });

});
