'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  reVersion
} = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');
const getWindowsVersion = require('../../utils/getWindowsVersion');

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Object} [tmp]
 * @param {Boolean} [strict]
 */
module.exports = function* osDetect(ua, summary, tmp, strict) {
  const iosDevice = !/like iphone/i.test(ua) && getMatchByIndex(1, /(ipod|iphone|ipad)/i, ua).toLowerCase();
  tmp.iosDevice = iosDevice;
  yield iosDevice && {
    ios: t,
    osname: 'iOS',
    osversion: getMatchByIndex(1, /os (\d+([_ ]\d+)*) like mac os x/i, ua).replace(/[_ ]/g, '.'),
  }

  const windowsPhone = /windows phone/i.test(ua);
  yield windowsPhone && {
    osname: 'Windows Phone',
    osversion: getMatchByIndex(1, /windows phone\s?(?:os)?\s?(\d+(\.\d+)*)/i, ua),
    windowsphone: t,
  }

  const android = !/like android/i.test(ua) && /android/i.test(ua);
  yield android && {
    android: t,
    osname: 'Android',
    osversion: getMatchByIndex(1, /android[ \/-](\d+(\.\d+)*)/i, ua),
  }

  const silk = /silk/i.test(ua);
  yield silk && {
    android: t,
    osname: 'Android',
    osversion: '',
  }

  yield /xbox/i.test(ua) && {
    osname: 'Xbox OS',
    xbox: t,
  }

  yield /playstation/i.test(ua) && {
    playstation: t,
  }

  yield /wii/i.test(ua) && {
    wii: t,
  }

  const windows = !windowsPhone && /windows/i.test(ua);
  yield windows && {
    osname: 'Windows',
    osversion: getWindowsVersion(getMatchByIndex(2, /windows (NT|XP) (\d\d?.\d)?/i, ua)),
    windows: t,
  }

  yield /netcast/i.test(ua) && {
    netcast: t,
    osname: 'NetCast',
    osversion: '',
  }

  const webOS = /(web|hpw)[o0]s/i.test(ua);
  yield webOS && {
    osname: 'webOS',
    osversion: getMatchByIndex(1, /(?:web|hpw)os\/(\d+(\.\d+)*)/i, ua),
    webos: t,
  }

  const tizen = /tizen/i.test(ua);
  yield tizen && {
    osname: 'Tizen',
    osversion: getMatchByIndex(1, /tizen[ \/](\d+(\.\d+)*)/i, ua),
    tizen: t,
  }

  const macOS = !iosDevice && !silk && /mac(intosh|ppc|intel|_powerpc)/i.test(ua);
  yield macOS && {
    macos: t,
    osname: 'macOS',
    osversion: getMatchByIndex(1, /mac os x (\d+([_.]\d+)+)/i, ua).replace(/_/g, '.'),
  }

  const sailfish = /sailfish/i.test(ua);
  yield sailfish && {
    osname: 'Sailfish',
    osversion: '',
    sailfish: t,
  }

  yield /bada/i.test(ua) && {
    bada: t,
    osname: 'Bada',
    osversion: getMatchByIndex(1, /bada\/(\d+(\.\d+)*)/i, ua),
  }

  const rimTablet = /rim tablet/i.test(ua);
  yield (/blackberry|\bbb\d+/i.test(ua) || rimTablet) && {
    blackberry: t,
    osname: 'BlackBerry OS',
    osversion: rimTablet ? getMatchByIndex(1, /rim tablet os (\d+(\.\d+)*)/i, ua) : getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`blackberry[\\d]+\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /cros/i.test(ua) && {
    chromeos: t,
    osname: 'Chrome OS',
    osversion: '',
  }

  const linux = !android && !sailfish && !tizen && !webOS && /linux/i.test(ua);
  yield linux && {
    linux: t,
    osname: 'Linux',
    osversion: '',
  }
}
