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
 * @param {Boolean} [canUseDOM]
 */
module.exports = function* osDetect(ua, summary, canUseDOM) {
  const iosDevice = !/like iphone/.test(ua) && getMatchByIndex(1, /(ipod|iphone|ipad)/, ua).toLowerCase();
  summary.tmp.iosDevice = iosDevice;
  yield iosDevice && {
    ios: t,
    osname: 'iOS',
    osversion: getMatchByIndex(1, /os ([0-9]+([_ ][0-9]+)*) like mac os x/, ua).replace(/[_ ]/g, '.'),
  }

  const windowsPhone = /windows phone/.test(ua);
  yield windowsPhone && {
    osname: 'Windows Phone',
    osversion: getMatchByIndex(1, /windows phone\s?(?:os)?\s?([0-9]+(\.[0-9]+)*)/, ua),
    windowsphone: t,
  }

  const android = !/like android/.test(ua) && /android/.test(ua);
  yield android && {
    android: t,
    osname: 'Android',
    osversion: getMatchByIndex(1, /android[ \/-]([0-9]+(\.[0-9]+)*)/, ua),
  }

  const silk = /silk/.test(ua);
  yield silk && {
    android: t,
    osname: 'Android',
    osversion: '',
  }

  yield /xbox/.test(ua) && {
    osname: 'Xbox OS',
    xbox: t,
  }

  yield /playstation/.test(ua) && {
    playstation: t,
  }

  yield /wii/.test(ua) && {
    wii: t,
  }

  const windows = !windowsPhone && /windows/.test(ua);
  yield windows && {
    osname: 'Windows',
    osversion: getWindowsVersion(getMatchByIndex(2, /windows (nt|xp) ([0-9][0-9]?.[0-9])?/, ua)),
    windows: t,
  }

  yield /netcast/.test(ua) && {
    netcast: t,
    osname: 'NetCast',
    osversion: '',
  }

  const webOS = /(web|hpw)[o0]s/.test(ua);
  yield webOS && {
    osname: 'webOS',
    osversion: getMatchByIndex(1, /(?:web|hpw)os\/([0-9]+(\.[0-9]+)*)/, ua),
    webos: t,
  }

  const tizen = /tizen/.test(ua);
  yield tizen && {
    osname: 'Tizen',
    osversion: getMatchByIndex(1, /tizen[ \/]([0-9]+(\.[0-9]+)*)/, ua),
    tizen: t,
  }

  const macOS = !iosDevice && !silk && /mac(intosh|ppc|intel|_powerpc)/.test(ua);
  yield macOS && {
    macos: t,
    osname: 'macOS',
    osversion: getMatchByIndex(1, /mac os x ([0-9]+([_.][0-9]+)+)/, ua).replace(/_/g, '.'),
  }

  const sailfish = /sailfish/.test(ua);
  yield sailfish && {
    osname: 'Sailfish',
    osversion: '',
    sailfish: t,
  }

  yield /bada/.test(ua) && {
    bada: t,
    osname: 'Bada',
    osversion: getMatchByIndex(1, /bada\/([0-9]+(\.[0-9]+)*)/, ua),
  }

  const rimTablet = /rim tablet/.test(ua);
  yield (/blackberry|\bbb[0-9]+/.test(ua) || rimTablet) && {
    blackberry: t,
    osname: 'BlackBerry OS',
    osversion: rimTablet ? getMatchByIndex(1, /rim tablet os ([0-9]+(\.[0-9]+)*)/, ua) : getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`blackberry[0-9]+\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /cros/.test(ua) && {
    chromeos: t,
    osname: 'Chrome OS',
    osversion: '',
  }

  const linux = !android && !sailfish && !tizen && !webOS && /linux/.test(ua);
  yield linux && {
    linux: t,
    osname: 'Linux',
    osversion: '',
  }
}
