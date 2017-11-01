const { expect } = require('chai');
const getWindowsVersion = require('.');

describe('Function: getWindowsVersion', () => {
  describe('Definition', () => {
    it('should be a function', () => {
      expect(typeof getWindowsVersion).to.equal('function');
    });

    it('should have 1 parameter', () => {
      expect(getWindowsVersion.length).to.equal(1);
    });
  });

  describe('Return', () => {
    it('should return matched Windows version', () => {
      expect(getWindowsVersion('10.0')).to.equal('10');
      expect(getWindowsVersion('6.4')).to.equal('10 Technical Preview');
      expect(getWindowsVersion('6.3')).to.equal('8.1');
      expect(getWindowsVersion('6.2')).to.equal('8');
      expect(getWindowsVersion('6.1')).to.equal('7 || Server 2008 R2');
      expect(getWindowsVersion('6.0')).to.equal('Vista || Server 2008');
      expect(getWindowsVersion('5.2')).to.equal('XP 64-bit || Server 2003');
      expect(getWindowsVersion('5.1')).to.equal('XP');
      expect(getWindowsVersion('XP')).to.equal('XP');
      expect(getWindowsVersion('5.01')).to.equal('2000 SP1');
      expect(getWindowsVersion('5.0')).to.equal('2000');
      expect(getWindowsVersion('4.0')).to.equal('NT');
      expect(getWindowsVersion('NT')).to.equal('NT');
      expect(getWindowsVersion('WinNT4.0')).to.equal('NT');
      expect(getWindowsVersion('WinNT')).to.equal('NT');
      expect(getWindowsVersion('4.90')).to.equal('ME');
      expect(getWindowsVersion('ME')).to.equal('ME');
      expect(getWindowsVersion('Win98')).to.equal('98');
      expect(getWindowsVersion('Win95')).to.equal('95');
      expect(getWindowsVersion('Windows_95')).to.equal('95');
      expect(getWindowsVersion('CE')).to.equal('CE');
      expect(getWindowsVersion('Win16')).to.equal('3.11');
    });

    it('should return empty string if there is no matched Windows version', () => {
      expect(getWindowsVersion('24.10')).to.equal('');
    });
  });
});
