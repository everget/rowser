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
module.exports = function* browserDetect(ua, summary) {
  yield /edg([ea]|ios)/i.test(ua) && { // chrome.+?
    msedge: t,
    name: 'Microsoft Edge',
    version: getMatchByIndex(2, new RegExp(`edg([ea]|ios)\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /opera mini/i.test(ua) && {
    name: 'Opera Mini',
    opera: t,
    operamini: t,
    version: getMatchByIndex(1, new RegExp(`opera mini\/${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /opera mobi/i.test(ua) && {
    name: 'Opera Mobile',
    opera: t,
    operamobile: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:opera)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /opera/i.test(ua) && {
    name: 'Opera',
    opera: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:opera|opr|opios)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /opr|opios/i.test(ua) && {
    name: 'Opera',
    opera: t,
    version: getMatchByIndex(1, new RegExp(`(?:opr|opios)[ \/]${DOT_NUMBERS_2}`, 'i'), ua) || getMatchByIndex(1, reVersion, ua),
  }

  yield /coast/i.test(ua) && {
    name: 'Opera Coast',
    opera: t,
    operacoast: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:coast)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /chrome.+? mms/i.test(ua) && {
    name: 'Opera Neon',
    opera: t,
    operaneon: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:mms)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /yabrowser/i.test(ua) && {
    name: 'Yandex Browser',
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:yabrowser)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
    yandexbrowser: t,
  }

  yield /samsungbrowser/i.test(ua) && {
    name: 'Samsung Internet',
    samsungbrowser: t,
    samsunginternet: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:samsungbrowser)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /epiphany/i.test(ua) && {
    epiphany: t,
    name: 'Epiphany',
    version: getMatchByIndex(1, new RegExp(`(?:epiphany)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /chromium/i.test(ua) && {
    chromium: t,
    name: 'Chromium',
    version: getMatchByIndex(1, new RegExp(`(?:chromium)[ \/]${DOT_NUMBERS_3}`, 'i'), ua) || getMatchByIndex(1, reVersion, ua),
  }

  yield /silk/i.test(ua) && {
    name: 'Amazon Silk',
    silk: t,
    version: getMatchByIndex(1, new RegExp(`silk\/${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield (summary.tizen || /tizen\s?browser/i.test(ua)) && {
    name: 'Tizen Browser',
    tizenbrowser: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(2, new RegExp(`(?:(tizen|slp)\\s?browser)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /ucbrowser/i.test(ua) && {
    name: 'UC Browser',
    ucbrowser: t,
    version: getMatchByIndex(1, new RegExp(`(?:ucbrowser)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /maxthon|mxios/i.test(ua) && {
    maxthon: t,
    name: 'Maxthon',
    version: getMatchByIndex(2, new RegExp(`(?:(maxthon|mxios))[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /sleipnir/i.test(ua) && {
    name: 'Sleipnir',
    sleipnir: t,
    version: getMatchByIndex(1, new RegExp(`(?:sleipnir)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /msie|trident/i.test(ua) && {
    msie: t,
    name: 'Internet Explorer',
    version: /iemobile/i.test(ua) ? getMatchByIndex(1, new RegExp(`(?:iemobile)[ \/]${DOT_NUMBERS_2}`, 'i'), ua) : getMatchByIndex(1, new RegExp(`(?:msie |rv:)${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /puffin/i.test(ua) && {
    name: 'Puffin',
    puffin: t,
    version: getMatchByIndex(1, new RegExp(`(?:puffin)[ \/]${DOT_NUMBERS_3}`, 'i'), ua),
  }

  yield /k-meleon/i.test(ua) && {
    kmeleon: t,
    name: 'K-Meleon',
    version: getMatchByIndex(1, new RegExp(`(?:k-meleon)[ \/]${DOT_NUMBERS_1}`, 'i'), ua),
  }

  yield /palemoon/i.test(ua) && {
    name: 'Pale Moon',
    palemoon: t,
    version: getMatchByIndex(1, new RegExp(`(?:palemoon)[ \/]${DOT_NUMBERS_3}`, 'i'), ua),
  }

  yield /qupzilla/i.test(ua) && {
    name: 'QupZilla',
    qupzilla: t,
    version: getMatchByIndex(1, new RegExp(`(?:qupzilla)[ \/]${DOT_NUMBERS_1}`, 'i'), ua) || getMatchByIndex(1, reVersion, ua),
  }

  yield /vivaldi/i.test(ua) && {
    name: 'Vivaldi',
    version: getMatchByIndex(1, new RegExp(`vivaldi\/${DOT_NUMBERS_2}`, 'i'), ua) || getMatchByIndex(1, reVersion, ua),
    vivaldi: t,
  }

  yield /seamonkey\//i.test(ua) && {
    name: 'SeaMonkey',
    seamonkey: t,
    version: getMatchByIndex(1, new RegExp(`seamonkey\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield summary.sailfish && {
    name: 'Sailfish Browser',
    version: getMatchByIndex(1, new RegExp(`sailfish\\s?browser\/${DOT_NUMBERS_2}`, 'i'), ua),
    sailfishbrowser: t,
  }

  yield /firefox|iceweasel|fxios/i.test(ua) && {
    firefox: t,
    name: 'Firefox',
    version: getMatchByIndex(1, new RegExp(`(?:firefox|iceweasel|fxios)[ \/]${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield summary.webos && {
    name: 'webOS Browser',
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`w(?:eb)?osbrowser\/${DOT_NUMBERS_2}`, 'i'), ua),
    webosbrowser: t,
  }

  yield summary.tizen && {
    name: 'Tizen Browser',
    tizenbrowser: t,
    version: getMatchByIndex(1, new RegExp(`(?:tizen\s?)?browser\/${DOT_NUMBERS_2}`, 'i'), ua) || getMatchByIndex(1, reVersion, ua),
  }

  yield /phantom/i.test(ua) && {
    name: 'PhantomJS',
    phantomjs: t,
    version: getMatchByIndex(1, new RegExp(`phantomjs\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /slimerjs/i.test(ua) && {
    name: 'SlimerJS',
    slimerjs: t,
    version: getMatchByIndex(1, new RegExp(`slimerjs\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /nichrome/i.test(ua) && {
    name: 'Rambler Browser',
    nichrome: t,
    ramblerbrowser: t,
    version: getMatchByIndex(1, new RegExp(`nichrome\/self\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /chrome|crios|crmo/i.test(ua) && {
    chrome: t,
    name: 'Chrome',
    version: getMatchByIndex(1, new RegExp(`(?:chrome|crios|crmo)\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /skyfire/i.test(ua) && {
    name: 'Skyfire',
    skyfire: t,
    version: getMatchByIndex(1, new RegExp(`(?:skyfire)\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield summary.android && {
    androidbrowser: t,
    name: 'Android Browser',
    version: getMatchByIndex(1, reVersion, ua),
  }

  // TODO: possible detection of Safari Mobile may be missed
  yield summary.blackberry && {
    bbbrowser: t,
    blackberrybrowser: t,
    name: 'BlackBerry Browser',
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`blackberry[\\d]+\/${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /qtcarbrowser/i.test(ua) && {
    name: 'Tesla Car Browser',
    qtcarbrowser: t,
    teslacarbrowser: t,
    version: '',
  }

  yield /dorothy/i.test(ua) && {
    dorothy: t,
    name: 'Dorothy',
    version: getMatchByIndex(1, reVersion, ua),
  }

  yield /omniweb/i.test(ua) && {
    omniweb: t,
    name: 'OmniWeb',
    version: getMatchByIndex(1, new RegExp(`omniweb\/v${DOT_NUMBERS_2}`, 'i'), ua),
  }

  yield /safari|applewebkit/i.test(ua) && {
    name: 'Safari',
    safari: t,
    version: getMatchByIndex(1, reVersion, ua) || '',
  }
}
