'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  DOT_NUMBERS_3,
  DOT_NUMBERS_4,
  reVersion
} = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');

/**
 * @param {String} ua
 * @param {Object} summary
 */
module.exports = function* engineDetect(ua, summary) {
  yield summary.msedge && !summary.ios && !summary.android && {
    edgehtml: t,
    engine: 'EdgeHTML',
    engineversion: getMatchByIndex(1, /edge\/(\d+)\./i, ua),
  };

  yield !summary.opera && /msie|trident/i.test(ua) && {
    engine: 'Trident',
    engineversion: getMatchByIndex(1, new RegExp(`trident\/${DOT_NUMBERS_2}`,'i'), ua),
    trident: t,
  };

  yield /(apple)?webkit\/537\.36/i.test(ua) && {
    blink: t,
    engine: 'Blink',
  };

  yield (/fxios/i.test(ua) || /(apple)?webkit/i.test(ua)) && {
    engine: 'Webkit',
    webkit: t,
  };

  yield /goanna/i.test(ua) && {
    engine: 'Goanna',
    engineversion: getMatchByIndex(1, new RegExp(`goanna\/${DOT_NUMBERS_1}`, 'i'), ua),
    goanna: t,
  }

  yield !/opr|opios/i.test(ua) && /gecko/i.test(ua) && {
    engine: 'Gecko',
    engineversion: getMatchByIndex(1, new RegExp(`rv:${DOT_NUMBERS_1}`, 'i'), ua),
    gecko: t,
  };

  yield summary.opera && {
    engine: 'Presto',
    engineversion: getMatchByIndex(1, new RegExp(`presto\/${DOT_NUMBERS_1}`, 'i'), ua),
    presto: t,
  };
}
