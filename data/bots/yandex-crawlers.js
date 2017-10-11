const t = true;

// Russian search engine Yandex' crawlers
module.exports = [
  {// The main indexing robot
    ua: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Indexing robot
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Downloads pages to check user accessibility
    ua: 'Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Determines if webpage layouts are suitable for mobile devices
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexMobileBot/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Generates dynamic banners
    ua: 'Mozilla/5.0 (compatible; YandexDirectDyn/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Takes screenshots of the page
    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36 (compatible; YandexScreenshotBot/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// The Yandex.Images indexer
    ua: 'Mozilla/5.0 (compatible; YandexImages/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// The Yandex.Video indexer
    ua: 'Mozilla/5.0 (compatible; YandexVideo/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// The Yandex.Video indexer
    ua: 'Mozilla/5.0 (compatible; YandexVideoParser/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Indexes multimedia content
    ua: 'Mozilla/5.0 (compatible; YandexMedia/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// The blog search robot that indexes comments on posts
    ua: 'Mozilla/5.0 (compatible; YandexBlogs/0.99; robot; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '0.99',
      yandexbot: t,
    }
  },
  {// Indexes site favicons
    ua: 'Mozilla/5.0 (compatible; YandexFavicons/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Robot for the Yandex.Webmaster service
    ua: 'Mozilla/5.0 (compatible; YandexWebmaster/2.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '2.0',
      yandexbot: t,
    }
  },
  {// Accesses the page for validating the microformat
    ua: 'Mozilla/5.0 (compatible; YandexPagechecker/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Робот мобильных сервисов
    ua: 'Mozilla/5.0 (compatible; YandexImageResizer/2.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '2.0',
      yandexbot: t,
    }
  },
  {// Робот Рекламной сети Яндекса
    ua: 'Mozilla/5.0 (compatible; YandexAdNet/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Скачивает информацию о контенте сайтов-партнеров Рекламной сети, чтобы уточнить их тематику для подбора релевантной рекламы
    ua: 'Mozilla/5.0 (compatible; YandexDirect/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Cкачивает целевые страницы рекламных объявлений для проверки их доступности и уточнения тематики
    ua: 'Mozilla/5.0 (compatible; YaDirectFetcher/1.0; Dyatel; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Yandex.Calendar robot used for syncing with other calendars
    ua: 'Mozilla/5.0 (compatible; YandexCalendar/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// The sitelinks `fetcher` used for checking the availability of webpages determined to be sitelinks
    ua: 'Mozilla/5.0 (compatible; YandexSitelinks; Dyatel; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '',
      yandexbot: t,
    }
  },
  {// The Yandex.Metrica robot
    ua: 'Mozilla/5.0 (compatible; YandexMetrika/2.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '2.0',
      yandexbot: t,
    }
  },
  {// Робот Яндекс.Новостей
    ua: 'Mozilla/5.0 (compatible; YandexNews/4.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '4.0',
      yandexbot: t,
    }
  },
  {// `Простукивалка` Яндекс.Каталога, используется для временного снятия с публикации недоступных сайтов в Каталоге
    ua: 'Mozilla/5.0 (compatible; YandexCatalog/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Робот Яндекс.Маркета
    ua: 'Mozilla/5.0 (compatible; YandexMarket/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Vertical search robot
    ua: 'Mozilla/5.0 (compatible; YandexVertis/3.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Робот почты для домена, используется при проверке прав на владение доменом
    ua: 'Mozilla/5.0 (compatible; YandexForDomain/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Determines if a site is a mirror
    ua: 'Mozilla/5.0 (compatible; YandexBot/3.0; MirrorDetector; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '3.0',
      yandexbot: t,
    }
  },
  {// Робот Яндекс.Справочника
    ua: 'Mozilla/5.0 (compatible; YandexSpravBot/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Робот, который регулярно скачивает YML-файлы каталогов товаров (по инициативе пользователей), которые часто располагаются в запрещенных для индексации каталогах.
    ua: 'Mozilla/5.0 (compatible; YandexSearchShop/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Робот сервиса Яндекс.Медиана
    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36 (compatible; YandexMedianaBot/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Робот объектного ответа
    ua: 'Mozilla/5.0 (compatible; YandexOntoDB/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Робот объектного ответа, скачивающий динамические данные
    ua: 'Mozilla/5.0 (compatible; YandexOntoDBAPI/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {// Робот Яндекс.Вертикалей: Авто.ру, Янекс.Недвижимость, Яндекс.Работа, Яндекс.Отзывы
    ua: 'Mozilla/5.0 (compatible; YandexVerticals/1.0; +http://yandex.com/bots)',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  },
  {
    ua: 'YandexSomething/1.0',
    descriptor: {
      bot: t,
      name: 'YandexBot',
      version: '1.0',
      yandexbot: t,
    }
  }
];
