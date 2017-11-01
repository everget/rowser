const { expect } = require('chai');
const browserDetect = require('.');

describe('Function: browserDetect', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof browserDetect).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(browserDetect.length).to.equal(3);
    });
  });
});
