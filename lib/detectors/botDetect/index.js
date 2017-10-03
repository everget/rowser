'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  DOT_NUMBERS_3,
  DOT_NUMBERS_4,
  reVersion
} = require('../../constants');

const getFirstMatch = require('../../utils/getFirstMatch');
const getSecondMatch = require('../../utils/getSecondMatch');

/**
 * @param {String} ua
 * @param {Object} summary
 */
module.exports = function* botDetect(ua, summary) {
  yield /googlebot/i.test(ua) && {
    bot: t,
    googlebot: t,
    name: 'Googlebot',
    version: getSecondMatch(/googlebot-?(image|mobile)?[ \/](\d+(\.\d+))/i, ua),
  }

  yield /bingbot/i.test(ua) && {
    bingbot: t,
    bot: t,
    name: 'Bingbot',
    version: getFirstMatch(/bingbot\/(\d+(\.\d+))/i, ua),
  }

  yield /mj12bot/i.test(ua) && {
    bot: t,
    mj12bot: t,
    name: 'Majestic-12 Web Crawler',
    version: getFirstMatch(/mj12bot\/v(\d+(\.\d+)+)/i, ua),
  }

  yield /yandexbot/i.test(ua) && {
    bot: t,
    name: 'YandexBot',
    version: getFirstMatch(/yandexbot\/(\d+(\.\d+))/i, ua),
    yandexbot: t,
  }

  yield /yahoo\! slurp/i.test(ua) && {
    bot: t,
    name: 'Yahoo! Slurp',
    version: getFirstMatch(/yahoo!\sslurp\/(\d+(\.\d+))/i, ua),
    yahooslurp: t,
  }

  yield /baiduspider/i.test(ua) && {
    name: 'Baiduspider',
    bot: t,
    baiduspider: t,
    version: getFirstMatch(/baiduspider\/(\d+(\.\d+))/i, ua),
  }

  yield /sogou/i.test(ua) && {
    bot: t,
    name: 'Sogou Spider',
    sogouspider: t,
    version: getFirstMatch(/spider\/(\d+(\.\d+))/i, ua),
  }

  yield /duckduckbot/i.test(ua) && {
    bot: t,
    duckduckbot: t,
    name: 'DuckDuckBot',
    version: getFirstMatch(/duckduckbot\/(\d+(\.\d+))/i, ua),
  }

  yield /exabot/i.test(ua) && {
    bot: t,
    exabot: t,
    name: 'Exabot',
    version: getFirstMatch(/exabot\/(\d+(\.\d+))/i, ua),
  }

  // TODO: Add for Alexabot (Alexa Certify Crawler)
  yield /ia_archiver/i.test(ua) && {
    alexacrawler: t,
    bot: t,
    name: 'Alexa Crawler',
  }

  yield /stackrambler/i.test(ua) && {
    bot: t,
    name: 'StackRambler',
    stackrambler: t,
    version: getFirstMatch(/stackrambler\/(\d+(\.\d+))/i, ua),
  }

  yield /facebo(t|okexternalhit)/i.test(ua) && {
    bot: t,
    facebookbot: t,
    name: 'Facebook Bot',
    version: getSecondMatch(/facebo(t|okexternalhit)\/(\d+(\.\d+))/i, ua),
  }

  yield /linkedinbot/i.test(ua) && {
    bot: t,
    linkedinbot: t,
    name: 'LinkedInBot',
    version: getFirstMatch(/linkedinbot\/(\d+(\.\d+))/i, ua),
  }

  yield /pinterest(bot)?/i.test(ua) && {
    bot: t,
    name: 'Pinterest Bot',
    pinterestbot: t,
    version: getSecondMatch(/pinterest(bot)?\/(\d+(\.\d+))/i, ua),
  }

  yield /slack(bot)?/.test(ua) && {
    bot: t,
    name: 'SlackBot',
    slackbot: t,
    version: getFirstMatch(/(\d+\.\d+)/i, ua),
  }

  yield /telegrambot\s(like\stwitterbot)/i.test(ua) && {
    bot: t,
    name: 'TelegramBot',
    telegrambot: t,
  }

  yield /twitterbot/i.test(ua) && {
    bot: t,
    name: 'TwitterBot',
    twitterbot: t,
    version: getFirstMatch(/twitterbot\/(\d+(\.\d+))/i, ua),
  }

  yield /whatsapp/i.test(ua) && {
    bot: t,
    name: 'WhatsApp Bot',
    version: getFirstMatch(/whatsapp\/(\d+(\.\d+)+)/i, ua),
    whatsappbot: t,
  }

  yield /bot|(spid|crawl)er|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/i.test(ua) && {
    bot: t,
  }
}
