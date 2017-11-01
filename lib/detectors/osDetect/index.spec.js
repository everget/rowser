const { expect } = require('chai');
const osDetect = require('.');

describe('Function: osDetect', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof osDetect).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(osDetect.length).to.equal(3);
    });
  });
});
