'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  DOT_NUMBERS_3,
  DOT_NUMBERS_4,
  reVersion
} = require('../../constants');

const getFirstMatch = require('../../utils/getFirstMatch');

// function getWindowsVersion (s) {
//   switch (s) {
//     case 'NT': return 'NT'
//     case 'XP': return 'XP'
//     case 'NT 5.0': return '2000'
//     case 'NT 5.1': return 'XP'
//     case 'NT 5.2': return '2003'
//     case 'NT 6.0': return 'Vista'
//     case 'NT 6.1': return '7'
//     case 'NT 6.2': return '8'
//     case 'NT 6.3': return '8.1'
//     case 'NT 10.0': return '10'
//     default: return undefined
//   }
// }

// // OS version extraction
// var osVersion = '';
// if (result.windows) {
//   osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))

/**
 * @param {String} ua
 * @param {Object} summary
 */
module.exports = function* osDetect(ua, summary) {
  const iosDevice = !/like iphone/i.test(ua) && getFirstMatch(/(ipod|iphone|ipad)/i, ua).toLowerCase();
  yield iosDevice && {
    // TODO: iPhone Simulator
    device: iosDevice === 'iphone' ? 'iPhone' : iosDevice === 'ipad' ? 'iPad' : 'iPod',
    ios: t,
    os: 'iOS',
    osversion: getFirstMatch(/os (\d+([_ ]\d+)*) like mac os x/i, ua).replace(/[_ ]/g, '.'),
  }

  const windowsPhone = /windows phone/i.test(ua);
  yield windowsPhone && {
    os: 'Windows Phone',
    osversion: getFirstMatch(/windows phone\s?(?:os)?\s?(\d+(\.\d+)*)/i, ua),
    windowsphone: t,
  }

  const android = !/like android/i.test(ua) && !/whatsapp/i.test(ua) && /android/i.test(ua);
  yield android && {
    android: t,
    os: 'Android',
    osversion: getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i, ua),
  }

  // TODO: try to remove
  const silk = /silk/i.test(ua);
  yield silk && {
    android: t,
    os: 'Android',
    osversion: '',
  }

  yield /xbox/i.test(ua) && {
    gameconsole: t,
    // microsoft: t,
    os: 'Xbox OS',
    xbox: t,
  }

  yield /playstation/i.test(ua) && {
    gameconsole: t,
    playstation: t,
    // sony: t,
  }

  yield /wii/i.test(ua) && {
    gameconsole: t,
    // nintendo: t,
    wii: t,
  }

  const windows = !windowsPhone && /windows/i.test(ua);
  yield windows && {
    os: 'Windows',
    osversion: '', // getFirstMatch(/windows\snt\s(\d+(\.\d+)*)/i, ua)
    windows: t,
  }

  yield /netcast/i.test(ua) && {
    netcast: t,
    os: 'NetCast',
    osversion: '',
  }

  const webOS = /(web|hpw)os/i.test(ua);
  yield webOS && {
    os: 'webOS',
    osversion: getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i, ua),
    webos: t,
  }

  const tizen = /tizen/i.test(ua);
  yield tizen && {
    os: 'Tizen',
    osversion: getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i, ua),
    tizen: t,
  }

  const macOS = !iosDevice && !silk && /macintosh/i.test(ua);
  yield macOS && {
    macos: t,
    os: 'macOS',
    osversion: getFirstMatch(/mac os x (\d+([_\.]\d+)+)/i, ua).replace(/_/g, '.'),
  }

  const sailfish = /sailfish/i.test(ua);
  yield sailfish && {
    os: 'Sailfish',
    osversion: '',
    sailfish: t,
  }

  yield /bada/i.test(ua) && {
    bada: t,
    os: 'Bada',
    osversion: getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua),
  }

  const rimTablet = /rim tablet/i.test(ua);
  yield (/blackberry|\bbb\d+/i.test(ua) || rimTablet) && {
    blackberry: t,
    os: 'BlackBerry OS',
    osversion: rimTablet ? getFirstMatch(/rim tablet os (\d+(\.\d+)*)/i, ua) : getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`blackberry[\\d]+\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /CrOS/.test(ua) && {
    chromeos: t,
    os: 'Chrome OS',
    osversion: '',
  }

  const linux = !android && !sailfish && !tizen && !webOS && /linux/i.test(ua);
  yield linux && {
    linux: t,
    os: 'Linux',
    osversion: '',
  }

  // yield {
  //   os: void 0,
  //   osversion: void 0,
  // };
}
