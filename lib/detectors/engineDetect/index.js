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

/**
 * @param {String} ua
 * @param {Object} summary
 */
module.exports = function* engineDetect(ua, summary) {
  yield summary.msedge && {
    edgehtml: t,
    engine: 'EdgeHTML',
    engineversion: getFirstMatch(/edge\/(\d+)\./i, ua),
  };

  yield !summary.opera && /msie|trident/i.test(ua) && {
    engine: 'Trident',
    engineversion: getFirstMatch(new RegExp(`trident\/${DOT_NUMBERS_2}`,'i'), ua),
    trident: t,
  };

  yield !summary.msedge && /(apple)?webkit\/537\.36/i.test(ua) && {
    blink: t,
    engine: 'Blink',
  };

  yield (!summary.msedge || /fxios/i.test(ua)) && /(apple)?webkit/i.test(ua) && {
    engine: 'Webkit',
    webkit: t,
  };

  yield /goanna/i.test(ua) && {
    engine: 'Goanna',
    engineversion: getFirstMatch(new RegExp(`goanna\/${DOT_NUMBERS_1}`, 'i'), ua),
    goanna: t,
  }

  yield !/opr|opios/i.test(ua) && /gecko/i.test(ua) && {
    engine: 'Gecko',
    engineversion: getFirstMatch(new RegExp(`rv:${DOT_NUMBERS_1}`, 'i'), ua),
    gecko: t,
  };

  yield summary.opera && { // && !summary.blink && !summary.gecko
    engine: 'Presto',
    engineversion: getFirstMatch(new RegExp(`presto\/${DOT_NUMBERS_1}`, 'i'), ua),
    presto: t,
  };
}
