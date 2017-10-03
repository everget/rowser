'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  DOT_NUMBERS_3,
  DOT_NUMBERS_4,
  reVersion,
  reTV
} = require('../../constants');

const getFirstMatch = require('../../utils/getFirstMatch');

// TODO: detects iPad as `desktop`

/**
 * @param {String} ua
 * @param {Object} summary
 */
module.exports = function* deviceDetect(ua, summary) {
  const isTabletLike = /tablet/i.test(ua);
  yield isTabletLike && {
    tablet: t,
  }

  const isMobileLike = !isTabletLike && /[^-]mobi/i.test(ua);
  yield isMobileLike && {
    mobile: t,
  }

  yield reTV.test(ua) && {
    tv: t,
    version: getFirstMatch(new RegExp(`${reTV.source}\/${DOT_NUMBERS_2}`)),
  }

  // yield /xbox/.test(ua) && {
  //   gameconsole: t,
  //   microsoft: t,
  //   xbox: t,
  // }

  // // TODO version detect
  // yield /playstation/.test(ua) && {
  //   gameconsole: t,
  //   playstation: t,
  //   sony: t,
  // }

  // yield /wii/.test(ua) && {
  //   gameconsole: t,
  //   nintendo: t,
  //   wii: t,
  // }

  const isDesktop = !summary.tablet && !summary.mobile && !summary.watch && !summary.tv && !summary.gameconsole;
  yield isDesktop && {
    desktop: t,
  }

  yield {
    unknowndevice: t,
  }
}
