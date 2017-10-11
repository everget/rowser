const t = true;

// Yahoo!'s Web Crawler
module.exports = [
  {
    ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp/3.0; http://help.yahoo.com/help/us/ysearch/slurp)',
    descriptor: {
      bot: t,
      name: 'Yahoo! Slurp',
      version: '3.0',
      yahooslurp: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
    descriptor: {
      bot: t,
      name: 'Yahoo! Slurp',
      version: '',
      yahooslurp: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp China; http://misc.yahoo.com.cn/help.html)',
    descriptor: {
      bot: t,
      name: 'Yahoo! Slurp',
      version: '',
      yahooslurp: t,
    }
  }
];
