const t = true;

module.exports = [
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13E238 UCBrowser/10.7.0.782 Mobile',
    descriptor: {
      // a: t,
      device: 'iPhone',
      engine: 'Webkit',
      engineversion: '537.51',
      // iphone: t,
      ios: t,
      // mobile: t,
      name: 'UC Browser',
      osname: 'iOS',
      osversion: '9.3.1',
      ucbrowser: t,
      version: '10.7.0.782',
      webkit: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 UCBrowser/5.4.5426.1034 Safari/537.36',
    descriptor: {
      blink: t,
      engine: 'Blink',
      name: 'UC Browser',
      osname: 'Windows',
      osversion: '7 || Server 2008 R2',
      ucbrowser: t,
      version: '5.4.5426.1034',
      windows: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (iPad; U; CPU OS 9 like Mac OS X; en-us; iPad4,4) AppleWebKit/534.46 (KHTML, like Gecko) UCBrowser/2.4.0.367 U3/1 Safari/7543.48.3',
    descriptor: {
      // a: t,
      device: 'iPad',
      engine: 'Webkit',
      engineversion: '534.46',
      // ipad: t,
      ios: t,
      name: 'UC Browser',
      osname: 'iOS',
      osversion: '9',
      // tablet: t,
      ucbrowser: t,
      version: '2.4.0.367',
      webkit: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SM-T210R Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30 UCBrowser/2.3.2.300',
    descriptor: {
      android: t,
      engine: 'Webkit',
      engineversion: '534.30',
      name: 'UC Browser',
      osname: 'Android',
      osversion: '4.1.2',
      // tablet: t,
      ucbrowser: t,
      version: '2.3.2.300',
      webkit: t,
      // x: t,
    }
  }
];
