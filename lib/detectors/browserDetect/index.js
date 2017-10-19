'use strict';

const {
  t,
  DOT_NUMS_1,
  DOT_NUMS_2,
  reVersion
} = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 */
module.exports = function* browserDetect(ua, summary, canUseDOM) {
  yield /edg([ea]|ios)/.test(ua) && {
    msedge: t,
    name: 'Microsoft Edge',
    version: getMatchByIndex(2, new RegExp(`(?:edg([ea]|ios))/${DOT_NUMS_2}`), ua),
  }

  yield /silk/.test(ua) && {
    name: 'Amazon Silk',
    silk: t,
    version: getMatchByIndex(1, new RegExp(`(?:silk)/${DOT_NUMS_1}`), ua),
  }

  yield /opera mini/.test(ua) && {
    name: 'Opera Mini',
    opera: t,
    operamini: t,
    version: getMatchByIndex(1, new RegExp(`(?:opera mini)/${DOT_NUMS_1}`), ua),
  }

  yield /opera mobi/.test(ua) && {
    name: 'Opera Mobile',
    opera: t,
    operamobile: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:opera)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /opera/.test(ua) && {
    name: 'Opera',
    opera: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:opera|opr|opios)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /opr\/|opios/.test(ua) && {
    name: 'Opera',
    opera: t,
    version: getMatchByIndex(1, new RegExp(`(?:opr|opios)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /coast/.test(ua) && {
    name: 'Opera Coast',
    opera: t,
    operacoast: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:coast)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /chrome.+? mms/.test(ua) && {
    name: 'Opera Neon',
    opera: t,
    operaneon: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:mms)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /samsungbrowser/.test(ua) && {
    name: 'Samsung Internet',
    samsungbrowser: t,
    samsunginternet: t,
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:samsungbrowser)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /(yabr|y)owser/.test(ua) && {
    name: 'Yandex Browser',
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:yabrowser)[ /]${DOT_NUMS_2}`), ua),
    yandexbrowser: t,
  }

  yield /ucbrowser/.test(ua) && {
    name: 'UC Browser',
    ucbrowser: t,
    version: getMatchByIndex(1, new RegExp(`(?:ucbrowser)[ /]${DOT_NUMS_1}`), ua),
  }

  yield /epiphany/.test(ua) && {
    epiphany: t,
    name: 'Epiphany',
    version: getMatchByIndex(1, new RegExp(`(?:epiphany)[ /]${DOT_NUMS_1}`), ua),
  }

  yield /chromium/.test(ua) && {
    chromium: t,
    name: 'Chromium',
    version: getMatchByIndex(1, new RegExp(`(?:chromium)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /maxthon|mxios/.test(ua) && {
    maxthon: t,
    name: 'Maxthon',
    version: getMatchByIndex(2, new RegExp(`(?:(maxthon|mxios))[ /]\\(?${DOT_NUMS_1}`), ua) || getMatchByIndex(1, reVersion, ua),
  }

  yield /sleipnir/.test(ua) && {
    name: 'Sleipnir',
    sleipnir: t,
    version: getMatchByIndex(1, new RegExp(`(?:sleipnir)[ /]${DOT_NUMS_1}`), ua),
  }

  yield /msie|trident/.test(ua) && {
    msie: t,
    name: 'Internet Explorer',
    version: /emobile/.test(ua) ? getMatchByIndex(1, new RegExp(`(?:iemobile)[ /]${DOT_NUMS_2}`), ua) : getMatchByIndex(1, new RegExp(`(?:msie |rv:)${DOT_NUMS_1}`), ua),
  }

  yield /puffin/.test(ua) && {
    name: 'Puffin',
    puffin: t,
    version: getMatchByIndex(1, new RegExp(`(?:puffin)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /k-meleon/.test(ua) && {
    kmeleon: t,
    name: 'K-Meleon',
    version: getMatchByIndex(1, new RegExp(`(?:k-meleon)[ /]${DOT_NUMS_1}`), ua),
  }

  yield /palemoon/.test(ua) && {
    name: 'Pale Moon',
    palemoon: t,
    version: getMatchByIndex(1, new RegExp(`(?:palemoon)[ /]${DOT_NUMS_2}`), ua),
  }

  yield /qupzilla/.test(ua) && {
    name: 'QupZilla',
    qupzilla: t,
    version: getMatchByIndex(1, new RegExp(`(?:qupzilla)[ /]${DOT_NUMS_1}`), ua),
  }

  yield /vivaldi/.test(ua) && {
    name: 'Vivaldi',
    version: getMatchByIndex(1, new RegExp(`(?:vivaldi)/${DOT_NUMS_2}`), ua),
    vivaldi: t,
  }

  yield /seamonkey/.test(ua) && {
    name: 'SeaMonkey',
    seamonkey: t,
    version: getMatchByIndex(1, new RegExp(`(?:seamonkey)/${DOT_NUMS_2}`), ua),
  }

  yield summary.sailfish && {
    name: 'Sailfish Browser',
    version: getMatchByIndex(1, new RegExp(`sailfish\\s?browser/${DOT_NUMS_2}`), ua),
    sailfishbrowser: t,
  }

  yield /firefox|iceweasel|fxios|fennec/.test(ua) && {
    firefox: t,
    name: 'Firefox',
    version: getMatchByIndex(1, new RegExp(`(?:firefox|iceweasel|fxios)[ /]${DOT_NUMS_2}`), ua) || getMatchByIndex(1, new RegExp(`fennec/${DOT_NUMS_2}`), ua),
  }

  yield /focus/.test(ua) && {
    firefox: t,
    firefoxfocus: t,
    name: 'Firefox Focus',
    version: getMatchByIndex(1, new RegExp(`(?:focus[ /])${DOT_NUMS_1}`), ua),
  }

  yield summary.blackberry && {
    bbbrowser: t,
    blackberrybrowser: t,
    name: 'BlackBerry Browser',
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`(?:blackberry[0-9]+)/${DOT_NUMS_2}`), ua),
  }

  yield summary.webos && {
    name: 'webOS Browser',
    version: getMatchByIndex(1, reVersion, ua) || getMatchByIndex(1, new RegExp(`w(?:eb)?osbrowser/${DOT_NUMS_2}`), ua),
    webosbrowser: t,
  }

  yield (summary.tizen || /tizen\s?browser/.test(ua)) && {
    name: 'Tizen Browser',
    tizenbrowser: t,
    version: getMatchByIndex(2, new RegExp(`(?:(tizen|slp)\s?)?browser[ /]${DOT_NUMS_2}`), ua) ||
             getMatchByIndex(1, reVersion, ua),
  }

  yield /dolfin/.test(ua) && {
    dolphin: t,
    name: 'Dolphin',
    version: getMatchByIndex(1, new RegExp(`dolfin/${DOT_NUMS_2}`), ua),
  }

  yield /phantom/.test(ua) && {
    name: 'PhantomJS',
    phantomjs: t,
    version: getMatchByIndex(1, new RegExp(`phantomjs/${DOT_NUMS_2}`), ua),
  }

  yield /slimerjs/.test(ua) && {
    name: 'SlimerJS',
    slimerjs: t,
    version: getMatchByIndex(1, new RegExp(`slimerjs/${DOT_NUMS_2}`), ua),
  }

  yield /nichrome/.test(ua) && {
    name: 'Rambler Browser',
    nichrome: t,
    ramblerbrowser: t,
    version: getMatchByIndex(1, new RegExp(`nichrome/self/${DOT_NUMS_2}`), ua),
  }

  yield /chrome|crios|crmo/.test(ua) && {
    chrome: t,
    name: 'Chrome',
    version: getMatchByIndex(1, new RegExp(`(?:chrome|crios|crmo)/${DOT_NUMS_2}`), ua),
  }

  yield /gsa\/\d/.test(ua) && {
    name: 'Google Search App',
    googlesearchapp: t,
    gsa: t,
    version: getMatchByIndex(1, new RegExp(`gsa/${DOT_NUMS_2}`), ua),
  }

  yield summary.android && {
    androidbrowser: t,
    name: 'Android Browser',
    version: getMatchByIndex(1, reVersion, ua),
  }

  yield /skyfire/.test(ua) && {
    name: 'Skyfire',
    skyfire: t,
    version: getMatchByIndex(1, new RegExp(`(?:skyfire)/${DOT_NUMS_2}`), ua),
  }

  yield /qtcarbrowser/.test(ua) && {
    name: 'Tesla Car Browser',
    qtcarbrowser: t,
    teslacarbrowser: t,
    version: '',
  }

  yield /dorothy/.test(ua) && {
    dorothy: t,
    name: 'Dorothy',
    version: getMatchByIndex(1, reVersion, ua),
  }

  yield /omniweb/.test(ua) && {
    omniweb: t,
    name: 'OmniWeb',
    version: getMatchByIndex(1, new RegExp(`(?:omniweb)/v${DOT_NUMS_2}`), ua),
  }

  yield /safari|applewebkit/.test(ua) && {
    name: 'Safari',
    safari: t,
    version: getMatchByIndex(1, reVersion, ua),
  }
}
