'use strict';

const {
  t,
  DOT_NUMS_1,
  DOT_NUMS_2
} = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 */
module.exports = function* engineDetect(ua, summary, canUseDOM) {
  yield summary.msedge && !summary.ios && !summary.android && {
    edgehtml: t,
    engine: 'EdgeHTML',
    engineversion: getMatchByIndex(1, /edge\/([0-9]+)\./, ua),
  };

  yield !summary.opera && /msie|trident/.test(ua) && {
    engine: 'Trident',
    engineversion: getMatchByIndex(1, new RegExp(`trident/${DOT_NUMS_2}`), ua),
    trident: t,
  };

  yield /(apple)?webkit\/537\.36/.test(ua) && {
    blink: t,
    engine: 'Blink',
  };

  yield (/fxios/.test(ua) || /(apple)?webkit/.test(ua)) && {
    engine: 'WebKit',
    engineversion: getMatchByIndex(2, new RegExp(`(apple)?webkit/${DOT_NUMS_2}`), ua),
    webkit: t,
  };

  yield /goanna/.test(ua) && {
    engine: 'Goanna',
    engineversion: getMatchByIndex(1, new RegExp(`goanna/${DOT_NUMS_1}`), ua),
    goanna: t,
  }

  yield !/opr\/|opios/.test(ua) && /gecko(\/)?/.test(ua) && {
    engine: 'Gecko',
    engineversion: getMatchByIndex(1, new RegExp(`rv:${DOT_NUMS_1}`), ua),
    gecko: t,
  };

  yield summary.opera && {
    engine: 'Presto',
    engineversion: getMatchByIndex(1, new RegExp(`presto/${DOT_NUMS_1}`), ua),
    presto: t,
  };
}
