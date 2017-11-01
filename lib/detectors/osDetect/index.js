const { t, DOT_NUMS_2, reVersion } = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');
const getWindowsVersion = require('../../utils/getWindowsVersion');

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 */
// eslint-disable-next-line no-unused-vars
module.exports = function osDetect(ua, summary, canUseDOM) {
  const iosDevice = !/like iphone/.test(ua) && /(ipod|iphone|ipad)/.test(ua);
  if (iosDevice) {
    Object.assign(summary.tmp, { iosDevice: getMatchByIndex(1, /(ipod|iphone|ipad)/, ua).toLowerCase() });
  }

  const windowsPhone = /windows phone/.test(ua);
  const android = !/like android/.test(ua) && /android/.test(ua);
  const silk = /silk/.test(ua);
  const windows = !windowsPhone && /windows/.test(ua);
  const webOS = /(web|hpw)[o0]s/.test(ua);
  const tizen = /tizen/.test(ua);
  const macOS = !iosDevice && !silk && /mac(intosh|ppc|intel|_powerpc)/.test(ua);
  const sailfish = /sailfish/.test(ua);
  const rimTablet = /rim tablet/.test(ua);
  const linux = !android && !sailfish && !tizen && !webOS && /linux/.test(ua);

  return [
    iosDevice && {
      ios: t,
      osname: 'iOS',
      osversion: getMatchByIndex(1, /os ([0-9]+([_ ][0-9]+)*) like mac os x/, ua).replace(/[_ ]/g, '.'),
    },

    windowsPhone && {
      osname: 'Windows Phone',
      osversion: getMatchByIndex(1, /windows phone\s?(?:os)?\s?([0-9]+(\.[0-9]+)*)/, ua),
      windowsphone: t,
    },

    android && {
      android: t,
      osname: 'Android',
      osversion: getMatchByIndex(1, /android[ /-]([0-9]+(\.[0-9]+)*)/, ua),
    },

    silk && {
      android: t,
      osname: 'Android',
      osversion: '',
    },

    /xbox/.test(ua) && {
      osname: 'Xbox OS',
      xbox: t,
    },

    /playstation/.test(ua) && {
      playstation: t,
    },

    /wii/.test(ua) && {
      wii: t,
    },

    windows && {
      osname: 'Windows',
      osversion: getWindowsVersion(getMatchByIndex(2, /windows (nt|xp) ([0-9][0-9]?.[0-9])?/, ua)),
      windows: t,
    },

    /netcast/.test(ua) && {
      netcast: t,
      osname: 'NetCast',
      osversion: '',
    },

    webOS && {
      osname: 'webOS',
      osversion: getMatchByIndex(1, /(?:web|hpw)os\/([0-9]+(\.[0-9]+)*)/, ua),
      webos: t,
    },

    tizen && {
      osname: 'Tizen',
      osversion: getMatchByIndex(1, /tizen[ /]([0-9]+(\.[0-9]+)*)/, ua),
      tizen: t,
    },

    macOS && {
      macos: t,
      osname: 'macOS',
      osversion: getMatchByIndex(1, /mac os x ([0-9]+([_.][0-9]+)+)/, ua).replace(/_/g, '.'),
    },

    sailfish && {
      osname: 'Sailfish',
      osversion: '',
      sailfish: t,
    },

    /bada/.test(ua) && {
      bada: t,
      osname: 'Bada',
      osversion: getMatchByIndex(1, /bada\/([0-9]+(\.[0-9]+)*)/, ua),
    },

    (/blackberry|\bbb[0-9]+/.test(ua) || rimTablet) && {
      blackberry: t,
      osname: 'BlackBerry OS',
      osversion: rimTablet ? getMatchByIndex(1, /rim tablet os ([0-9]+(\.[0-9]+)*)/, ua)
        : getMatchByIndex(1, reVersion, ua) ||
                             getMatchByIndex(1, new RegExp(`blackberry[0-9]+/${DOT_NUMS_2}`), ua),
    },

    /cros/.test(ua) && {
      chromeos: t,
      osname: 'Chrome OS',
      osversion: '',
    },

    linux && {
      linux: t,
      osname: 'Linux',
      osversion: '',
    },
  ];
};
