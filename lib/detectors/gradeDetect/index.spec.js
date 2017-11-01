const { expect } = require('chai');
const gradeDetect = require('.');

describe('Function: gradeDetect', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof gradeDetect).to.equal('function');
    });

    it('should have 3 parameters', () => {
      expect(gradeDetect.length).to.equal(3);
    });
  });
});
