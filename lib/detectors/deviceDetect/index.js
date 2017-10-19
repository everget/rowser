'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  reVersion,
  reTV,
  reVersionTV
} = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');

const iosDevicesMap = {
  'ipad': 'iPad',
  'iphone': 'iPhone',
  'ipod': 'iPod',
};

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 */
module.exports = function* deviceDetect(ua, summary, canUseDOM) {
  // TODO: iPhone Simulator
  if (summary.tmp.iosDevice) {
    summary.device = iosDevicesMap[summary.tmp.iosDevice];
  }

  const isTabletLike = /tablet/i.test(ua) && !/tablet pc/i.test(ua);
  const isMobileLike = !isTabletLike && /[^-]mobi/i.test(ua);
  const isNexusMobile = /nexus\s*[0-6]\s*/i.test(ua);
  const isNexusTablet = !isNexusMobile && /nexus\s*[0-9]+/i.test(ua);
  const osMajorVersion = !summary.windows && summary.osversion && summary.osversion.split('.')[0];
  const isTablet = isTabletLike || summary.device === 'iPad' || isNexusTablet || summary.silk ||
                    summary.android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !isMobileLike));

  yield isTablet && {
    tablet: t,
  }

  const isMobile = isMobileLike || summary.device === 'iPhone' || summary.device === 'iPod' || summary.android || isNexusMobile || summary.blackberry;
  yield isMobile && {
    mobile: t,
  }

  yield reTV.test(ua) && {
    tv: t,
  }

  yield (summary.xbox || summary.playstation || summary.wii) && {
    gameconsole: t,
  }

  // const isDesktop = !summary.tablet && !summary.mobile && !summary.watch && !summary.tv && !summary.gameconsole && !summary.webos && !summary.bada;
  // yield isDesktop && {
  //   desktop: t,
  // }
}
