/**
 * Rowser v0.1.0
 * Copyright 2017-present (@everget) Alex Orekhov. MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.rowser = factory());
}(this, (function () { 'use strict';

'use strict';

/**
 * @param {GeneratorFunction} generator
 * @param {String} ua
 * @param {Object} summary
 * @returns {Void}
 */
var run = function run(generator, ua, summary) {
  for (let matching of generator(ua, summary)) {
    if (!matching) {
      continue;
    } else {
      // TODO: return matching and Object.assign to summary in rowser.detect
      Object.assign(summary, matching);
      break;
    }
  }
};

run;

const t$1 = true;

const DOT_NUMBERS_1$1 = '(\\d+(?:\\.\\d+)+)';
const DOT_NUMBERS_2$1 = '(\\d+(\\.\\d+)?)';
const DOT_NUMBERS_3$1 = '(\\d+(?:\\.\\d+)?)';
const DOT_NUMBERS_4$1 = '(\\d+(\\.\\d+))';
const DOT_NUMBERS_5 = '(\d+(?:\.\d+){1,2})';

const reVersion$1 = new RegExp(`version\/${DOT_NUMBERS_2$1}`, 'i');

const reTV = (function() {
  const tvDevices = [
    'googletv', 'sonydtv', 'viera', 'smarttv', 'appletv', 'boxee', 'kylo',
    'internet\.tv', 'netcast', 'nettv', 'roku', 'dlnadoc', 'pov_tv', 'hbbtv',
    'ce-html',
  ].join('|');

  return new RegExp(tvDevices, 'i');
})();

// function constructDotNumbers(start = '(\d+(', innerFlag = '', inner = '\.\d+)', endFlag = '') {
//   return ;
// }

var constants = {
  t: t$1,
  DOT_NUMBERS_1: DOT_NUMBERS_1$1,
  DOT_NUMBERS_2: DOT_NUMBERS_2$1,
  DOT_NUMBERS_3: DOT_NUMBERS_3$1,
  DOT_NUMBERS_4: DOT_NUMBERS_4$1,
  reVersion: reVersion$1,
  reTV
};

constants;

'use strict';

/**
 * @param {RegExp} regexp
 * @param {String} ua
 * @returns {String}
 */
var getFirstMatch = function getFirstMatch(regexp, ua) {
  const match = ua.match(regexp);
  return (match && match.length > 1 && match[1]) || '';
};

getFirstMatch;

'use strict';

/**
 * @param {RegExp} regexp
 * @param {String} ua
 * @returns {String}
 */
var getSecondMatch = function getSecondMatch(regexp, ua) {
  const match = ua.match(regexp);
  return (match && match.length > 1 && match[2]) || '';
};

getSecondMatch;

'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  DOT_NUMBERS_3,
  DOT_NUMBERS_4,
  reVersion
} = constants;




/**
 * @param {String} ua
 * @param {Object} summary
 */
var botDetect = function* botDetect(ua, summary) {
  yield /googlebot/i.test(ua) && {
    bot: t,
    googlebot: t,
    name: 'Googlebot',
    version: getSecondMatch(/googlebot-?(image|mobile)?[ \/](\d+(\.\d+))/i, ua),
  };

  yield /bingbot/i.test(ua) && {
    bingbot: t,
    bot: t,
    name: 'Bingbot',
    version: getFirstMatch(/bingbot\/(\d+(\.\d+))/i, ua),
  };

  yield /mj12bot/i.test(ua) && {
    bot: t,
    mj12bot: t,
    name: 'Majestic-12 Web Crawler',
    version: getFirstMatch(/mj12bot\/v(\d+(\.\d+)+)/i, ua),
  };

  yield /yandexbot/i.test(ua) && {
    bot: t,
    name: 'YandexBot',
    version: getFirstMatch(/yandexbot\/(\d+(\.\d+))/i, ua),
    yandexbot: t,
  };

  yield /yahoo\! slurp/i.test(ua) && {
    bot: t,
    name: 'Yahoo! Slurp',
    version: getFirstMatch(/yahoo!\sslurp\/(\d+(\.\d+))/i, ua),
    yahooslurp: t,
  };

  yield /baiduspider/i.test(ua) && {
    name: 'Baiduspider',
    bot: t,
    baiduspider: t,
    version: getFirstMatch(/baiduspider\/(\d+(\.\d+))/i, ua),
  };

  yield /sogou/i.test(ua) && {
    bot: t,
    name: 'Sogou Spider',
    sogouspider: t,
    version: getFirstMatch(/spider\/(\d+(\.\d+))/i, ua),
  };

  yield /duckduckbot/i.test(ua) && {
    bot: t,
    duckduckbot: t,
    name: 'DuckDuckBot',
    version: getFirstMatch(/duckduckbot\/(\d+(\.\d+))/i, ua),
  };

  yield /exabot/i.test(ua) && {
    bot: t,
    exabot: t,
    name: 'Exabot',
    version: getFirstMatch(/exabot\/(\d+(\.\d+))/i, ua),
  };

  // TODO: Add for Alexabot (Alexa Certify Crawler)
  yield /ia_archiver/i.test(ua) && {
    alexacrawler: t,
    bot: t,
    name: 'Alexa Crawler',
  };

  yield /stackrambler/i.test(ua) && {
    bot: t,
    name: 'StackRambler',
    stackrambler: t,
    version: getFirstMatch(/stackrambler\/(\d+(\.\d+))/i, ua),
  };

  yield /facebo(t|okexternalhit)/i.test(ua) && {
    bot: t,
    facebookbot: t,
    name: 'Facebook Bot',
    version: getSecondMatch(/facebo(t|okexternalhit)\/(\d+(\.\d+))/i, ua),
  };

  yield /linkedinbot/i.test(ua) && {
    bot: t,
    linkedinbot: t,
    name: 'LinkedInBot',
    version: getFirstMatch(/linkedinbot\/(\d+(\.\d+))/i, ua),
  };

  yield /pinterest(bot)?/i.test(ua) && {
    bot: t,
    name: 'Pinterest Bot',
    pinterestbot: t,
    version: getSecondMatch(/pinterest(bot)?\/(\d+(\.\d+))/i, ua),
  };

  yield /slack(bot)?/.test(ua) && {
    bot: t,
    name: 'SlackBot',
    slackbot: t,
    version: getFirstMatch(/(\d+\.\d+)/i, ua),
  };

  yield /telegrambot\s(like\stwitterbot)/i.test(ua) && {
    bot: t,
    name: 'TelegramBot',
    telegrambot: t,
  };

  yield /twitterbot/i.test(ua) && {
    bot: t,
    name: 'TwitterBot',
    twitterbot: t,
    version: getFirstMatch(/twitterbot\/(\d+(\.\d+))/i, ua),
  };

  yield /whatsapp/i.test(ua) && {
    bot: t,
    name: 'WhatsApp Bot',
    version: getFirstMatch(/whatsapp\/(\d+(\.\d+)+)/i, ua),
    whatsappbot: t,
  };

  yield /bot|(spid|crawl)er|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/i.test(ua) && {
    bot: t,
  };
};

botDetect;

'use strict';

const {
  t: t$2,
  DOT_NUMBERS_1: DOT_NUMBERS_1$2,
  DOT_NUMBERS_2: DOT_NUMBERS_2$2,
  DOT_NUMBERS_3: DOT_NUMBERS_3$2,
  DOT_NUMBERS_4: DOT_NUMBERS_4$2,
  reVersion: reVersion$2
} = constants;




/**
 * @param {String} ua
 * @param {Object} summary
 */
var browserDetect = function* browserDetect(ua, summary) {
  yield /chrome.+? edge/i.test(ua) && {
    msedge: t$2,
    name: 'Microsoft Edge',
    version: getFirstMatch(new RegExp(`edge\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /opera mini/i.test(ua) && {
    name: 'Opera Mini',
    opera: t$2,
    operamini: t$2,
    version: getFirstMatch(new RegExp(`opera mini\/${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /opera mobi/i.test(ua) && {
    name: 'Opera Mobile',
    opera: t$2,
    operamobile: t$2,
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`(?:opera)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /opera/i.test(ua) && {
    name: 'Opera',
    opera: t$2,
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`(?:opera|opr|opios)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /opr|opios/i.test(ua) && {
    name: 'Opera',
    opera: t$2,
    version: getFirstMatch(new RegExp(`(?:opr|opios)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua) || getFirstMatch(reVersion$2, ua),
  };

  yield /coast/i.test(ua) && {
    name: 'Opera Coast',
    opera: t$2,
    operacoast: t$2,
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`(?:coast)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /chrome.+? mms/i.test(ua) && {
    name: 'Opera Neon',
    opera: t$2,
    operaneon: t$2,
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`(?:mms)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /yabrowser/i.test(ua) && {
    name: 'Yandex Browser',
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`(?:yabrowser)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
    yandexbrowser: t$2,
  };

  yield /SamsungBrowser/i.test(ua) && {
    name: 'Samsung Internet',
    samsungbrowser: t$2,
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`(?:SamsungBrowser)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /epiphany/i.test(ua) && {
    epiphany: t$2,
    name: 'Epiphany',
    version: getFirstMatch(new RegExp(`(?:epiphany)[ \/]${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /chromium/i.test(ua) && {
    chromium: t$2,
    name: 'Chromium',
    version: getFirstMatch(new RegExp(`(?:chromium)[ \/]${DOT_NUMBERS_3$2}`, 'i'), ua) || getFirstMatch(reVersion$2, ua),
  };

  yield /silk/i.test(ua) && {
    name: 'Amazon Silk',
    silk: t$2,
    version: getFirstMatch(new RegExp(`silk\/${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /ucbrowser/i.test(ua) && {
    name: 'UC Browser',
    ucbrowser: t$2,
    version: getFirstMatch(new RegExp(`(?:ucbrowser)[ \/]${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /maxthon|mxios/i.test(ua) && {
    maxthon: t$2,
    name: 'Maxthon',
    version: getSecondMatch(new RegExp(`(?:(maxthon|mxios))[ \/]${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /sleipnir/i.test(ua) && {
    name: 'Sleipnir',
    sleipnir: t$2,
    version: getFirstMatch(new RegExp(`(?:sleipnir)[ \/]${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /msie|trident/i.test(ua) && {
    msie: t$2,
    name: 'Internet Explorer',
    version: getFirstMatch(new RegExp(`(?:msie |rv:)${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /puffin/i.test(ua) && {
    name: 'Puffin',
    puffin: t$2,
    version: getFirstMatch(new RegExp(`(?:puffin)[ \/]${DOT_NUMBERS_3$2}`, 'i'), ua),
  };

  yield /k-meleon/i.test(ua) && {
    kmeleon: t$2,
    name: 'K-Meleon',
    version: getFirstMatch(new RegExp(`(?:k-meleon)[ \/]${DOT_NUMBERS_1$2}`, 'i'), ua),
  };

  yield /palemoon/i.test(ua) && {
    name: 'Pale Moon',
    palemoon: t$2,
    version: getFirstMatch(new RegExp(`(?:palemoon)[ \/]${DOT_NUMBERS_3$2}`, 'i'), ua),
  };

  yield /qupzilla/i.test(ua) && {
    name: 'QupZilla',
    qupzilla: t$2,
    version: getFirstMatch(new RegExp(`(?:qupzilla)[ \/]${DOT_NUMBERS_1$2}`, 'i'), ua) || getFirstMatch(reVersion$2, ua),
  };

  yield /vivaldi/i.test(ua) && {
    name: 'Vivaldi',
    version: getFirstMatch(new RegExp(`vivaldi\/${DOT_NUMBERS_2$2}`, 'i'), ua) || getFirstMatch(reVersion$2, ua),
    vivaldi: t$2,
  };

  yield /seamonkey\//i.test(ua) && {
    name: 'SeaMonkey',
    seamonkey: t$2,
    version: getFirstMatch(new RegExp(`seamonkey\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield summary.sailfish && {
    name: 'Sailfish Browser',
    version: getFirstMatch(new RegExp(`sailfish\\s?browser\/${DOT_NUMBERS_2$2}`, 'i'), ua),
    sailfishbrowser: t$2,
  };

  yield /firefox|iceweasel|fxios/i.test(ua) && {
    firefox: t$2,
    name: 'Firefox',
    version: getFirstMatch(new RegExp(`(?:firefox|iceweasel|fxios)[ \/]${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield summary.webos && {
    name: 'webOS Browser',
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`w(?:eb)?osbrowser\/${DOT_NUMBERS_2$2}`, 'i'), ua),
    webosbrowser: t$2,
  };

  yield summary.tizen && {
    name: 'Tizen Browser',
    tizenbrowser: t$2,
    version: getFirstMatch(new RegExp(`(?:tizen\s?)?browser\/${DOT_NUMBERS_2$2}`, 'i'), ua) || getFirstMatch(reVersion$2, ua),
  };

  yield /phantom/i.test(ua) && {
    name: 'PhantomJS',
    phantomjs: t$2,
    version: getFirstMatch(new RegExp(`phantomjs\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /slimerjs/i.test(ua) && {
    name: 'SlimerJS',
    slimerjs: t$2,
    version: getFirstMatch(new RegExp(`slimerjs\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /nichrome/i.test(ua) && {
    name: 'Rambler Browser',
    nichrome: t$2,
    ramblerbrowser: t$2,
    version: getFirstMatch(new RegExp(`nichrome\/self\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /chrome|crios|crmo/i.test(ua) && {
    chrome: t$2,
    name: 'Chrome',
    version: getFirstMatch(new RegExp(`(?:chrome|crios|crmo)\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /skyfire/i.test(ua) && {
    name: 'Skyfire',
    skyfire: t$2,
    version: getFirstMatch(new RegExp(`(?:skyfire)\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield summary.android && {
    androidbrowser: t$2,
    name: 'Android Browser',
    version: getFirstMatch(reVersion$2, ua),
  };

  // TODO: possible detection of Safari Mobile may be missed
  yield summary.blackberry && {
    name: 'BlackBerry Browser',
    version: getFirstMatch(reVersion$2, ua) || getFirstMatch(new RegExp(`blackberry[\\d]+\/${DOT_NUMBERS_2$2}`, 'i'), ua),
  };

  yield /dorothy/i.test(ua) && {
    dorothy: t$2,
    name: 'Dorothy',
    version: getFirstMatch(reVersion$2, ua),
  };

  yield /safari|applewebkit/i.test(ua) && {
    name: 'Safari',
    safari: t$2,
    version: getFirstMatch(reVersion$2, ua) || '',
  };
};

browserDetect;

'use strict';

const {
  t: t$3,
  DOT_NUMBERS_1: DOT_NUMBERS_1$3,
  DOT_NUMBERS_2: DOT_NUMBERS_2$3,
  DOT_NUMBERS_3: DOT_NUMBERS_3$3,
  DOT_NUMBERS_4: DOT_NUMBERS_4$3,
  reVersion: reVersion$3
} = constants;



/**
 * @param {String} ua
 * @param {Object} summary
 */
var engineDetect = function* engineDetect(ua, summary) {
  yield summary.msedge && {
    edgehtml: t$3,
    engine: 'EdgeHTML',
    engineversion: getFirstMatch(/edge\/(\d+)\./i, ua),
  };

  yield !summary.opera && /msie|trident/i.test(ua) && {
    engine: 'Trident',
    engineversion: getFirstMatch(new RegExp(`trident\/${DOT_NUMBERS_2$3}`,'i'), ua),
    trident: t$3,
  };

  yield !summary.msedge && /(apple)?webkit\/537\.36/i.test(ua) && {
    blink: t$3,
    engine: 'Blink',
  };

  yield (!summary.msedge || /fxios/i.test(ua)) && /(apple)?webkit/i.test(ua) && {
    engine: 'Webkit',
    webkit: t$3,
  };

  yield /goanna/i.test(ua) && {
    engine: 'Goanna',
    engineversion: getFirstMatch(new RegExp(`goanna\/${DOT_NUMBERS_1$3}`, 'i'), ua),
    goanna: t$3,
  };

  yield !/opr|opios/i.test(ua) && /gecko/i.test(ua) && {
    engine: 'Gecko',
    engineversion: getFirstMatch(new RegExp(`rv:${DOT_NUMBERS_1$3}`, 'i'), ua),
    gecko: t$3,
  };

  yield summary.opera && { // && !summary.blink && !summary.gecko
    engine: 'Presto',
    engineversion: getFirstMatch(new RegExp(`presto\/${DOT_NUMBERS_1$3}`, 'i'), ua),
    presto: t$3,
  };
};

engineDetect;

'use strict';

const {
  t: t$4,
  DOT_NUMBERS_1: DOT_NUMBERS_1$4,
  DOT_NUMBERS_2: DOT_NUMBERS_2$4,
  DOT_NUMBERS_3: DOT_NUMBERS_3$4,
  DOT_NUMBERS_4: DOT_NUMBERS_4$4,
  reVersion: reVersion$4,
  reTV: reTV$1
} = constants;



// TODO: detects iPad as `desktop`

/**
 * @param {String} ua
 * @param {Object} summary
 */
var deviceDetect = function* deviceDetect(ua, summary) {
  const isTabletLike = /tablet/i.test(ua);
  yield isTabletLike && {
    tablet: t$4,
  };

  const isMobileLike = !isTabletLike && /[^-]mobi/i.test(ua);
  yield isMobileLike && {
    mobile: t$4,
  };

  yield reTV$1.test(ua) && {
    tv: t$4,
    version: getFirstMatch(new RegExp(`${reTV$1.source}\/${DOT_NUMBERS_2$4}`)),
  };

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
    desktop: t$4,
  };

  yield {
    unknowndevice: t$4,
  };
};

deviceDetect;

'use strict';

const {
  t: t$5,
  DOT_NUMBERS_1: DOT_NUMBERS_1$5,
  DOT_NUMBERS_2: DOT_NUMBERS_2$5,
  DOT_NUMBERS_3: DOT_NUMBERS_3$5,
  DOT_NUMBERS_4: DOT_NUMBERS_4$5,
  reVersion: reVersion$5
} = constants;



// function getWindowsVersion (s) {
//   switch (s) {
//     case 'NT': return 'NT'
//     case 'XP': return 'XP'
//     case 'NT 5.0': return '2000'
//     case 'NT 5.1': return 'XP'
//     case 'NT 5.2': return '2003'
//     case 'NT 6.0': return 'Vista'
//     case 'NT 6.1': return '7'
//     case 'NT 6.2': return '8'
//     case 'NT 6.3': return '8.1'
//     case 'NT 10.0': return '10'
//     default: return undefined
//   }
// }

// // OS version extraction
// var osVersion = '';
// if (result.windows) {
//   osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))

/**
 * @param {String} ua
 * @param {Object} summary
 */
var osDetect = function* osDetect(ua, summary) {
  const iosDevice = !/like iphone/i.test(ua) && getFirstMatch(/(ipod|iphone|ipad)/i, ua).toLowerCase();
  yield iosDevice && {
    // TODO: iPhone Simulator
    device: iosDevice === 'iphone' ? 'iPhone' : iosDevice === 'ipad' ? 'iPad' : 'iPod',
    ios: t$5,
    os: 'iOS',
    osversion: getFirstMatch(/os (\d+([_ ]\d+)*) like mac os x/i, ua).replace(/[_ ]/g, '.'),
  };

  const windowsPhone = /windows phone/i.test(ua);
  yield windowsPhone && {
    os: 'Windows Phone',
    osversion: getFirstMatch(/windows phone\s?(?:os)?\s?(\d+(\.\d+)*)/i, ua),
    windowsphone: t$5,
  };

  const android = !/like android/i.test(ua) && !/whatsapp/i.test(ua) && /android/i.test(ua);
  yield android && {
    android: t$5,
    os: 'Android',
    osversion: getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i, ua),
  };

  // TODO: try to remove
  const silk = /silk/i.test(ua);
  yield silk && {
    android: t$5,
    os: 'Android',
    osversion: '',
  };

  yield /xbox/i.test(ua) && {
    gameconsole: t$5,
    // microsoft: t,
    os: 'Xbox OS',
    xbox: t$5,
  };

  yield /playstation/i.test(ua) && {
    gameconsole: t$5,
    playstation: t$5,
    // sony: t,
  };

  yield /wii/i.test(ua) && {
    gameconsole: t$5,
    // nintendo: t,
    wii: t$5,
  };

  const windows = !windowsPhone && /windows/i.test(ua);
  yield windows && {
    os: 'Windows',
    osversion: '', // getFirstMatch(/windows\snt\s(\d+(\.\d+)*)/i, ua)
    windows: t$5,
  };

  yield /netcast/i.test(ua) && {
    netcast: t$5,
    os: 'NetCast',
    osversion: '',
  };

  const webOS = /(web|hpw)os/i.test(ua);
  yield webOS && {
    os: 'webOS',
    osversion: getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i, ua),
    webos: t$5,
  };

  const tizen = /tizen/i.test(ua);
  yield tizen && {
    os: 'Tizen',
    osversion: getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i, ua),
    tizen: t$5,
  };

  const macOS = !iosDevice && !silk && /macintosh/i.test(ua);
  yield macOS && {
    macos: t$5,
    os: 'macOS',
    osversion: getFirstMatch(/mac os x (\d+([_\.]\d+)+)/i, ua).replace(/_/g, '.'),
  };

  const sailfish = /sailfish/i.test(ua);
  yield sailfish && {
    os: 'Sailfish',
    osversion: '',
    sailfish: t$5,
  };

  yield /bada/i.test(ua) && {
    bada: t$5,
    os: 'Bada',
    osversion: getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua),
  };

  const rimTablet = /rim tablet/i.test(ua);
  yield (/blackberry|\bbb\d+/i.test(ua) || rimTablet) && {
    blackberry: t$5,
    os: 'BlackBerry OS',
    osversion: rimTablet ? getFirstMatch(/rim tablet os (\d+(\.\d+)*)/i, ua) : getFirstMatch(reVersion$5, ua) || getFirstMatch(new RegExp(`blackberry[\\d]+\/${DOT_NUMBERS_2$5}`, 'i'), ua),
  };

  yield /CrOS/.test(ua) && {
    chromeos: t$5,
    os: 'Chrome OS',
    osversion: '',
  };

  const linux = !android && !sailfish && !tizen && !webOS && /linux/i.test(ua);
  yield linux && {
    linux: t$5,
    os: 'Linux',
    osversion: '',
  };

  // yield {
  //   os: void 0,
  //   osversion: void 0,
  // };
};

osDetect;

deviceDetect;

'use strict';








const rowser$2 = {
  _tmp: new WeakSet(),
  summary: {},

  detect(ua = window.navigator.userAgent) {
    let summary = {};

    // TODO: move device detect to osDetect
    // run(deviceDetect, ua, summary);
    run(osDetect, ua, summary);
    run(browserDetect, ua, summary);
    run(engineDetect, ua, summary);

    if (summary.name === void 0) {
      run(botDetect, ua, summary);
    }

    return (this.summary = summary, this.summary);
  }
};

const rowserProxy = new Proxy(rowser$2, {
  get(target, prop) {
    const lowerCasedProperty = prop.toLowerCase();
    if (lowerCasedProperty === 'detect') {
      return (ua) => target.detect.call(target, ua);
    } else if (lowerCasedProperty === 'summary') {
      return target.summary;
    } else if (lowerCasedProperty.startsWith('is') === true) {
      const flag = lowerCasedProperty.slice(2);
      const summary = target.summary;
      if (Object.keys(summary).length === 0) {
        throw new Error('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
      } else if (flag in summary && summary[flag] === true) {
        return summary[flag];
      } else {
        return false;
      }
    } else {
      return target.summary[prop];
    }
  }
});

var rowser_1 = rowserProxy;

rowser_1;

var rowser = rowser_1;

return rowser;

})));
