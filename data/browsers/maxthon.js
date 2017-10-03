const t = true;

module.exports = [
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1 MXiOS/4.8.6.59',
    descriptor: {
      // a: t,
      device: 'iPhone',
      engine: 'Webkit',
      ios: t,
      // iphone: t,
      maxthon: t,
      // mobile: t,
      name: 'Maxthon',
      os: 'iOS',
      osversion: '9.3.1',
      version: '4.8.6.59',
      webkit: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1',
    descriptor: {
      engine: 'Webkit',
      maxthon: t,
      name: 'Maxthon',
      os: 'Windows',
      osversion: '',
      version: '3.0.8.2',
      webkit: t,
      windows: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.4 (KHTML, like Gecko) Maxthon/3.0.6.27 Safari/532.4',
    descriptor: {
      engine: 'Webkit',
      maxthon: t,
      name: 'Maxthon',
      os: 'Windows',
      osversion: '',
      version: '3.0.6.27',
      webkit: t,
      windows: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; Maxthon/3.0)',
    descriptor: {
      engine: 'Trident',
      engineversion: '5.0',
      maxthon: t,
      name: 'Maxthon',
      os: 'Windows',
      osversion: '',
      version: '3.0',
      trident: t,
      windows: t,
    }
  },
  // {
  //   ua: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; MAXTHON 2.0)',
  //   descriptor: {
  //     engine: 'Trident',
  //     engineversion: '4.0',
  //     maxthon: t,
  //     name: 'Maxthon',
  //     os: 'Windows',
  //     osversion: '',
  //     version: '2.0',
  //     trident: t,
  //     windows: t,
  //   }
  // }
];
