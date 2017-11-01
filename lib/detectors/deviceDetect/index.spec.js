const { expect } = require('chai');
const deviceDetect = require('.');

describe('Function: deviceDetect', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof deviceDetect).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(deviceDetect.length).to.equal(3);
    });
  });
});
