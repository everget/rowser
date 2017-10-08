const t = true;

module.exports = [
  {
    ua: 'Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
    descriptor: {
      engine: 'Gecko',
      engineversion: '10.0.1',
      gecko: t,
      name: 'SeaMonkey',
      osname: 'Windows',
      osversion: 'XP 64-bit || Server 2003',
      seamonkey: t,
      version: '2.7',
      windows: t,
      // x: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
    descriptor: {
      engine: 'Gecko',
      engineversion: '10.0.1',
      gecko: t,
      macos: t,
      name: 'SeaMonkey',
      osname: 'macOS',
      osversion: '10.5',
      seamonkey: t,
      version: '2.7',
      // x: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
    descriptor: {
      engine: 'Gecko',
      engineversion: '10.0.1',
      gecko: t,
      linux: t,
      name: 'SeaMonkey',
      osname: 'Linux',
      osversion: '',
      seamonkey: t,
      version: '2.7',
      // x: t,
    }
  }
];
