/**
 * Platform tokens are defined at:
 * http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
 * http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
 */
const WINDOWS_VERSIONS = {
  '10.0': '10',
  6.4: '10 Technical Preview',
  6.3: '8.1',
  6.2: '8',
  6.1: '7 || Server 2008 R2',
  '6.0': 'Vista || Server 2008',
  5.2: 'XP 64-bit || Server 2003',
  5.1: 'XP',
  XP: 'XP',
  5.01: '2000 SP1',
  '5.0': '2000',
  '4.0': 'NT',
  NT: 'NT',
  'WinNT4.0': 'NT',
  WinNT: 'NT',
  '4.90': 'ME',
  ME: 'ME',
  Win98: '98',
  Win95: '95',
  Windows_95: '95',
  CE: 'CE',
  Win16: '3.11',
};

/**
 * @param {String} [str]
 * @returns {String}
 */
module.exports = function getWindowsVersion(str) {
  return WINDOWS_VERSIONS[str] || '';
};
