const t = true;

module.exports = [
  {
    ua: 'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36',
    descriptor: {
      // a: t,
      android: t,
      blink: t,
      engine: 'Blink',
      // mobile: t,
      name: 'Samsung Internet',
      osname: 'Android',
      osversion: '5.0.2',
      samsungbrowser: t,
      samsunginternet: t,
      version: '4.0',
    }
  },
  {
    ua: 'Mozilla/5.0 (SMART-TV; Linux; Tizen 2.3) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.0 TV Safari/538.1',
    descriptor: {
      engine: 'Webkit',
      name: 'Samsung Internet',
      osname: 'Tizen',
      osversion: '2.3',
      samsungbrowser: t,
      samsunginternet: t,
      tizen: t,
      version: '1.0',
      webkit: t,
    }
  }
];
