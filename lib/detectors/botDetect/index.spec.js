const { expect } = require('chai');
const botDetect = require('.');

describe('Function: botDetect', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof botDetect).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(botDetect.length).to.equal(3);
    });
  });
});

