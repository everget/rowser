const t = true;

// Chinese search engine Baidu crawlers
module.exports = [
  {
    ua: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '2.0',
    }
  },
  {
    ua: 'Baiduspider+(+http://www.baidu.com/search/spider.htm)',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Baidu's Japanese bot
    ua: 'Baiduspider+(+http://www.baidu.jp/spider/)',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Baidu's Japanese bot
    ua: 'Baiduspider+(+http://www.baidu.com/search/spider_jp.html',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {
    ua: 'Mozilla/5.0 (Linux;u;Android 4.2.2;zh-cn;) AppleWebKit/534.46 (KHTML,like Gecko) Version/5.1 Mobile Safari/10600.6.3 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '2.0',
    }
  },
  {
    ua: 'Baiduspider/2.0',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '2.0',
    }
  },
  {// Web/Mobile Search
    ua: 'Baiduspider',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Business Search (Advertisements)
    ua: 'Baiduspider-ads',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Baidu Union
    ua: 'Baiduspider-cpro',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Baidu Favorites
    ua: 'Baiduspider-favo',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Image Search
    ua: 'Baiduspider-image',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// News Search
    ua: 'Baiduspider-news',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  },
  {// Video Search
    ua: 'Baiduspider-video',
    descriptor: {
      bot: t,
      baiduspider: t,
      name: 'Baiduspider',
      version: '',
    }
  }
];
