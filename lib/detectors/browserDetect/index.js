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
const getSecondMatch = require('../../utils/getSecondMatch');

/**
 * @param {String} ua
 * @param {Object} summary
 */
module.exports = function* browserDetect(ua, summary) {
  yield /chrome.+? edge/i.test(ua) && {
    msedge: t,
    name: 'Microsoft Edge',
    version: getFirstMatch(new RegExp(`edge\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /opera mini/i.test(ua) && {
    name: 'Opera Mini',
    opera: t,
    operamini: t,
    version: getFirstMatch(new RegExp(`opera mini\/${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /opera mobi/i.test(ua) && {
    name: 'Opera Mobile',
    opera: t,
    operamobile: t,
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`(?:opera)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /opera/i.test(ua) && {
    name: 'Opera',
    opera: t,
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`(?:opera|opr|opios)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /opr|opios/i.test(ua) && {
    name: 'Opera',
    opera: t,
    version: getFirstMatch(new RegExp(`(?:opr|opios)[ \/]${DOT_NUMBERS_2}`, 'i'), ua) || getFirstMatch(reVersion, ua),
  }

  yield /coast/i.test(ua) && {
    name: 'Opera Coast',
    opera: t,
    operacoast: t,
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`(?:coast)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /chrome.+? mms/i.test(ua) && {
    name: 'Opera Neon',
    opera: t,
    operaneon: t,
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`(?:mms)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /yabrowser/i.test(ua) && {
    name: 'Yandex Browser',
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`(?:yabrowser)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
    yandexbrowser: t,
  }

  yield /SamsungBrowser/i.test(ua) && {
    name: 'Samsung Internet',
    samsungbrowser: t,
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`(?:SamsungBrowser)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /epiphany/i.test(ua) && {
    epiphany: t,
    name: 'Epiphany',
    version: getFirstMatch(new RegExp(`(?:epiphany)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /chromium/i.test(ua) && {
    chromium: t,
    name: 'Chromium',
    version: getFirstMatch(new RegExp(`(?:chromium)[ \/]${DOT_NUMBERS_3}`, 'i'), ua) || getFirstMatch(reVersion, ua),
  }

  yield /silk/i.test(ua) && {
    name: 'Amazon Silk',
    silk: t,
    version: getFirstMatch(new RegExp(`silk\/${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /ucbrowser/i.test(ua) && {
    name: 'UC Browser',
    ucbrowser: t,
    version: getFirstMatch(new RegExp(`(?:ucbrowser)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /maxthon|mxios/i.test(ua) && {
    maxthon: t,
    name: 'Maxthon',
    version: getSecondMatch(new RegExp(`(?:(maxthon|mxios))[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /sleipnir/i.test(ua) && {
    name: 'Sleipnir',
    sleipnir: t,
    version: getFirstMatch(new RegExp(`(?:sleipnir)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /msie|trident/i.test(ua) && {
    msie: t,
    name: 'Internet Explorer',
    version: getFirstMatch(new RegExp(`(?:msie |rv:)${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /puffin/i.test(ua) && {
    name: 'Puffin',
    puffin: t,
    version: getFirstMatch(new RegExp(`(?:puffin)[ \/]${DOT_NUMBERS_3}`, 'i'), ua),
  }

  yield /k-meleon/i.test(ua) && {
    kmeleon: t,
    name: 'K-Meleon',
    version: getFirstMatch(new RegExp(`(?:k-meleon)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /palemoon/i.test(ua) && {
    name: 'Pale Moon',
    palemoon: t,
    version: getFirstMatch(new RegExp(`(?:palemoon)[ \/]${DOT_NUMBERS_3}`, 'i'), ua),
  }

  yield /qupzilla/i.test(ua) && {
    name: 'QupZilla',
    qupzilla: t,
    version: getFirstMatch(new RegExp(`(?:qupzilla)[ \/]${DOT_NUMBERS_1}`, 'i'), ua) || getFirstMatch(reVersion, ua),
  }

  yield /vivaldi/i.test(ua) && {
    name: 'Vivaldi',
    version: getFirstMatch(new RegExp(`vivaldi\/${DOT_NUMBERS_2}`, 'i'), ua) || getFirstMatch(reVersion, ua),
    vivaldi: t,
  }

  yield /seamonkey\//i.test(ua) && {
    name: 'SeaMonkey',
    seamonkey: t,
    version: getFirstMatch(new RegExp(`seamonkey\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield summary.sailfish && {
    name: 'Sailfish Browser',
    version: getFirstMatch(new RegExp(`sailfish\\s?browser\/${DOT_NUMBERS_2}`, 'i'), ua),
    sailfishbrowser: t,
  }

  yield /firefox|iceweasel|fxios/i.test(ua) && {
    firefox: t,
    name: 'Firefox',
    version: getFirstMatch(new RegExp(`(?:firefox|iceweasel|fxios)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield summary.webos && {
    name: 'webOS Browser',
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`w(?:eb)?osbrowser\/${DOT_NUMBERS_2}`, 'i'), ua),
    webosbrowser: t,
  }

  yield summary.tizen && {
    name: 'Tizen Browser',
    tizenbrowser: t,
    version: getFirstMatch(new RegExp(`(?:tizen\s?)?browser\/${DOT_NUMBERS_2}`, 'i'), ua) || getFirstMatch(reVersion, ua),
  }

  yield /phantom/i.test(ua) && {
    name: 'PhantomJS',
    phantomjs: t,
    version: getFirstMatch(new RegExp(`phantomjs\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /slimerjs/i.test(ua) && {
    name: 'SlimerJS',
    slimerjs: t,
    version: getFirstMatch(new RegExp(`slimerjs\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /nichrome/i.test(ua) && {
    name: 'Rambler Browser',
    nichrome: t,
    ramblerbrowser: t,
    version: getFirstMatch(new RegExp(`nichrome\/self\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /chrome|crios|crmo/i.test(ua) && {
    chrome: t,
    name: 'Chrome',
    version: getFirstMatch(new RegExp(`(?:chrome|crios|crmo)\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /skyfire/i.test(ua) && {
    name: 'Skyfire',
    skyfire: t,
    version: getFirstMatch(new RegExp(`(?:skyfire)\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield summary.android && {
    androidbrowser: t,
    name: 'Android Browser',
    version: getFirstMatch(reVersion, ua),
  }

  // TODO: possible detection of Safari Mobile may be missed
  yield summary.blackberry && {
    name: 'BlackBerry Browser',
    version: getFirstMatch(reVersion, ua) || getFirstMatch(new RegExp(`blackberry[\\d]+\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /dorothy/i.test(ua) && {
    dorothy: t,
    name: 'Dorothy',
    version: getFirstMatch(reVersion, ua),
  }

  yield /safari|applewebkit/i.test(ua) && {
    name: 'Safari',
    safari: t,
    version: getFirstMatch(reVersion, ua) || '',
  }
}
