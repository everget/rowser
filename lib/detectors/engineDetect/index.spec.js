const { expect } = require('chai');
const engineDetect = require('.');

describe('Function: engineDetect', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof engineDetect).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(engineDetect.length).to.equal(3);
    });
  });
});
