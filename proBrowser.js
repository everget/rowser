;(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    /** Node */
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    /** AMD */
    define([], factory);
  } else {
    /** Browser global (root is window) */
    root.proBrowser = factory();
  }
}(this, function() {
  'use strict';

  const t = true;

  let proBrowser = {};
  let summary = {};

  function getFirstMatch(regex, ua) {
    let match = (ua || navigator.userAgent).match(regex);
    return (match && match.length > 1 && match[1]) || '';
  }

  function getSecondMatch(regex, ua) {
    let match = (ua || navigator.userAgent).match(regex);
    return (match && match.length > 1 && match[2]) || '';
  }

  function getVersionPrecision(version) {
    return version.split('.').length;
  }

  function detect(ua) {
    summary = {};

    run(formFactorDetect);
    run(osDetect);
    run(browserDetect);
    run(engineDetect);
    run(botDetect);

    function run(generator) {
      for (let matching of generator(ua)) {
        if (!matching) {
          continue;
        } else {
          Object.assign(summary, matching);
          break;
        }
      };
    }

    return summary;
  }

  /*****************************************************************************
  ** Form-Factor Detect
  */

  function* formFactorDetect(ua) {
    let isTabletLike = /tablet/i.test(ua);
    yield isTabletLike && {
      tablet: t
    };

    let isMobileLike = !isTabletLike && /[^-]mobi/i.test(ua);
    yield isMobileLike && {
      mobile: t
    };

    let reTV = (function() {
      let tvDevices = [
        'googletv', 'sonydtv', 'viera', 'smarttv', 'appletv', 'boxee', 'kylo',
        'internet\.tv', 'netcast', 'nettv', 'roku', 'dlnadoc', 'pov_tv', 'hbbtv',
        'ce-html'
      ].join('|');
      return new RegExp(tvDevices, 'i');
    })();

    yield reTV.test(ua) && {
      tv: t
    };

    yield /xbox/.test(ua) && {
      gameConsole: t,
      xbox: t,
      microsoft: t
    };

    // TODO version detect
    yield /playstation/.test(ua) && {
      gameConsole: t,
      playstation: t,
      sony: t
    };

    yield /wii/.test(ua) && {
      gameConsole: t,
      wii: t,
      nintendo: t
    };

    yield {
      desktop: t
    };
  }

  /*****************************************************************************
  ** OS Detect
  */

  function* osDetect(ua) {
    let iosDevice = getFirstMatch(/(ipod|iphone|ipad)/i, ua).toLowerCase();
    yield iosDevice && {
      device: iosDevice === 'iphone' ? 'iPhone' : iosDevice === 'ipad' ? 'iPad' : 'iPod',
      os: 'iOS',
      osVersion: getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.'),
      ios: t
    };

    let android = !/like android/i.test(ua) && /android/i.test(ua);
    yield android && {
      os: 'Android',
      osVersion: getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i, ua),
      android: t
    };

    let windowsPhone = /windows phone/i.test(ua);
    yield windowsPhone && {
      os: 'Windows Phone',
      osVersion: getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua),
      windowsPhone: t
    };

    let windows = !windowsPhone && /windows/i.test(ua);
    yield windows && {
      os: 'Windows',
      osVersion: '',
      windows: t
    };

    yield /netcast/i.test(ua) && {
      os: 'NetCast',
      osVersion: '',
      netcast: t
    };

    let webos = /(web|hpw)os/i.test(ua);
    yield webos && {
      os: 'WebOS',
      osVersion: getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i, ua),
      webos: t
    };

    let tizen = /tizen/i.test(ua);
    yield tizen && {
      os: 'Tizen',
      osVersion: getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i, ua),
      tizen: t
    };

    let silk = /silk/i.test(ua);
    let macOS = !iosDevice && !silk && /macintosh/i.test(ua);
    yield macOS && {
      os: 'macOS',
      osVersion: getFirstMatch(/mac\sos\sx\s(\d+([_\.]\d+)+)/i, ua).replace(/_/g, '.'),
      macos: t
    };

    yield /meego/i.test(ua) && {
      os: 'MeeGo',
      osVersion: '',
      meego: t
    };

    let sailfish = /sailfish/i.test(ua);
    yield sailfish && {
      os: 'Sailfish',
      osVersion: '',
      sailfish: t
    };

    yield /bada/i.test(ua) && {
      os: 'Bada',
      osVersion: getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua),
      bada: t
    };

    yield (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) && {
      os: 'BlackBerry OS',
      osVersion: getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua),
      blackberry: t
    };

    yield /CrOS/.test(ua) && {
      os: 'Chrome OS',
      osVersion: '',
      chromeos: t
    };

    let linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua);
    yield linux && {
      os: 'Linux',
      osVersion: '',
      linux: t
    };

    yield summary.xbox && {
      os: 'Xbox OS',
      osVersion: ''
    };
  }

  /*****************************************************************************
  ** Browser Detect
  */

  function* browserDetect(ua) {
    yield /chrome.+? edge/i.test(ua) && {
      name: 'Microsoft Edge',
      version: getFirstMatch(/edge\/(\d+(\.\d+)?)/i, ua),
      engine: 'EdgeHTML',
      msedge: t
    };

    yield /chrome|crios|crmo/i.test(ua) && {
      name: 'Chrome',
      version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i, ua),
      chrome: t
    };

    yield /opera\smini/i.test(ua) && {
      name: 'Opera Mini',
      version: getFirstMatch(/opera\smini\/(\d+(\.\d+)?)/i, ua),
      opera: t
    };

    yield /opera\smobi/i.test(ua) && {
      name: 'Opera Mobile',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua),
      opera: t
    };

    yield /opera/i.test(ua) && {
      name: 'Opera',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i, ua),
      engine: 'Presto',
      opera: t
    };

    yield /opr|opios/i.test(ua) && {
      name: 'Opera',
      version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i, ua) || getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua),
      engine: 'Blink',
      opera: t
    };

    yield /coast/i.test(ua) && {
      name: 'Opera Coast',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i, ua),
      coast: t
    };

    yield /msie|trident/i.test(ua) && {
      name: 'Internet Explorer',
      version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i, ua),
      msie: t
    };

    yield /yabrowser/i.test(ua) && {
      name: 'Yandex Browser',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i, ua),
      yandexBrowser: t
    };

    yield /SamsungBrowser/i.test(ua) && {
      name: 'Samsung Internet for Android',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i, ua),
      samsungBrowser: t
    };

    yield /chromium/i.test(ua) && {
      name: 'Chromium',
      version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i, ua) || getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua),
      chromium: t
    };

    // TODO check
    yield summary.android && {
      name: 'Android Browser',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua)
    };

    let silk = /silk/i.test(ua);
    yield silk && {
      name: 'Amazon Silk',
      silk: t,
      version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i, ua)
    };

    yield /ucbrowser/i.test(ua) && {
      name: 'UC Browser',
      ucBrowser: t,
      version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i, ua)
    };

    yield /maxthon/i.test(ua) && {
      name: 'Maxthon',
      maxthon: t
      // TODO version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i, ua)
    };

    yield /epiphany/i.test(ua) && {
      name: 'Epiphany',
      version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i, ua),
      epiphany: t
    };

    yield /puffin/i.test(ua) && {
      name: 'Puffin',
      version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i, ua),
      puffin: t
    };

    yield /sleipnir/i.test(ua) && {
      name: 'Sleipnir',
      version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i, ua),
      sleipnir: t
    };

    yield /k-meleon/i.test(ua) && {
      name: 'K-Meleon',
      version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i, ua),
      kmeleon: t
    };

    yield /qupzilla/i.test(ua) && {
      name: 'QupZilla',
      version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i, ua) || getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua),
      qupzilla: t
    };

    yield /vivaldi/i.test(ua) && {
      name: 'Vivaldi',
      version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua),
      vivaldi: t
    };

    yield /seamonkey\//i.test(ua) && {
      name: 'SeaMonkey',
      version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i, ua),
      seamonkey: t
    };

    yield summary.sailfish && {
      name: 'Sailfish Browser',
      version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua),
      sailfishBrowser: t
    };

    yield /fennec/i.test(ua) && {
      name: 'Firefox for mobile',
      version: getFirstMatch(/fennec\/(\d+(\.\d+)?)/i, ua),
      fennec: t
    };

    yield /firefox|iceweasel|fxios/i.test(ua) && {
      name: 'Firefox',
      version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i, ua),
      firefox: t
    };

    yield summary.webos && {
      name: 'WebOS Browser',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i, ua),
      webosBrowser: t
    };

    yield summary.tizen && {
      name: 'Tizen Browser',
      version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i, ua) || getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua),
      tizenBrowser: t
    };

    yield /phantom/i.test(ua) && {
      name: 'PhantomJS',
      version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i, ua),
      phantomjs: t
    };

    yield /slimerjs/i.test(ua) && {
      name: 'SlimerJS',
      version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i, ua),
      slimerjs: t
    };

    yield /safari|applewebkit/i.test(ua) && {
      name: 'Safari',
      version: getFirstMatch(/version\/(\d+(\.\d+)?)/i, ua) || '',
      safari: t
    };
  }

  /*****************************************************************************
  ** Engine Detect
  */

  function* engineDetect(ua) {
    yield !summary.msedge && /(apple)?webkit\/537\.36/i.test(ua) && {
      engine: 'Blink',
      blink: t
    };

    yield !summary.msedge && /(apple)?webkit/i.test(ua) && {
      engine: 'Webkit',
      webkit: t
    };

    yield !/opera|opr|opios/i.test(ua) && /gecko\//i.test(ua) && {
      engine: 'Gecko',
      engineVersion: getFirstMatch(/gecko\/(\d+(\.\d+)?)/i, ua),
      gecko: t
    };
  }

  /*****************************************************************************
  ** Bot Detect
  */

  function* botDetect(ua) {
    yield /googlebot/i.test(ua) && {
      name: 'Googlebot',
      bot: t,
      version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua)
    };

    yield /bingbot/i.test(ua) && {
      name: 'Bingbot',
      bot: t,
      version: getFirstMatch(/bingbot\/(\d+(\.\d+))/i, ua)
    };

    yield /yahoo!\sslurp/i.test(ua) && {
      name: 'Yahoo! Slurp',
      bot: t,
      version: getFirstMatch(/yahoo!\sslurp\/(\d+(\.\d+))/i, ua)
    };

    yield /duckduckbot/i.test(ua) && {
      name: 'DuckDuckBot',
      bot: t,
      version: getFirstMatch(/duckduckbot\/(\d+(\.\d+))/i, ua)
    };

    yield /baiduspider/i.test(ua) && {
      name: 'Baiduspider',
      bot: t,
      version: getFirstMatch(/baiduspider\/(\d+(\.\d+))/i, ua)
    };

    yield /yandexbot/i.test(ua) && {
      name: 'YandexBot',
      bot: t,
      version: getFirstMatch(/yandexbot\/(\d+(\.\d+))/i, ua)
    };

    yield /sogou/i.test(ua) && {
      name: 'Sogou Spider',
      bot: t,
      version: getFirstMatch(/spider\/(\d+(\.\d+))/i, ua)
    };

    yield /exabot/i.test(ua) && {
      name: 'Exabot',
      bot: t,
      version: getFirstMatch(/exabot\/(\d+(\.\d+))/i, ua)
    };

    yield /facebo(t|okexternalhit)/i.test(ua) && {
      name: 'Facebook Bot',
      bot: t,
      version: getFirstMatch(/facebo(t|okexternalhit)\/(\d+(\.\d+))/i, ua)
    };

    yield /twitterbot/i.test(ua) && {
      name: 'TwitterBot',
      bot: t,
      version: getFirstMatch(/twitterbot\/(\d+(\.\d+))/i, ua)
    };

    yield /linkedinbot/i.test(ua) && {
      name: 'LinkedInBot',
      bot: t,
      version: getFirstMatch(/linkedinbot\/(\d+(\.\d+))/i, ua)
    };

    yield /pinterest(bot)?/i.test(ua) && {
      name: 'PinterestBot',
      bot: t,
      version: getFirstMatch(/pinterest(bot)?\/(\d+(\.\d+))/i, ua)
    };

    yield /stackrambler/i.test(ua) && {
      name: 'StackRambler',
      bot: t,
      version: getFirstMatch(/stackrambler\/(\d+(\.\d+))/i, ua)
    };

    yield /ia_archiver/i.test(ua) && {
      name: 'Alexa Crawler',
      bot: t
    };

    yield /slack(bot)?/.test(ua) && {
      name: 'SlackBot',
      bot: t,
      version: getFirstMatch(/(\d+\.\d+)/i, ua)
    };

    yield /telegrambot\s(like\stwitterbot)/i.test(ua) && {
      name: 'TelegramBot',
      bot: t
    };

    yield /whatsapp/.test(ua) && {
      name: 'WhatsApp Bot',
      bot: t,
      version: getFirstMatch(/whatsapp\/(\d+(\.\d+)+)/i, ua)
    };

    yield /mj12bot/.test(ua) && {
      name: 'Majestic-12 Bot',
      bot: t,
      version: getSecondMatch(/mj12bot(\s|\/v)(\d+(\.\d+)+)/i, ua)
    };
  }

  proBrowser.detect = detect;

  /** Export detect function */
  return proBrowser;
}));
