'use strict';

const {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  reVersion
} = require('../../constants');

const getMatchByIndex = require('../../utils/getMatchByIndex');

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Object} [tmp]
 * @param {Boolean} [strict]
 */
module.exports = function* botDetect(ua, summary, tmp, strict) {
  yield (/mj12bot/i.test(ua) || !!~ua.indexOf('majestic12')) && {
    bot: t,
    mj12bot: t,
    name: 'Majestic-12 Web Crawler',
    version: getMatchByIndex(1, /mj12bot\/v(\d+(\.\d+)+)/i, ua),
  }

  yield /(mediapartners|apis|adsbot)?[ \-]?\(?google(bot)?/i.test(ua) && {
    bot: t,
    googlebot: t,
    name: 'Googlebot',
    version: getMatchByIndex(4, /(mediapartners-)?google(bot)?-?(image|video|mobile)?[ \/](\d+(\.\d+))/i, ua),
  }

  // TODO: check
  yield /msn|adidx|bing(bot|preview)/i.test(ua) && {
    bingbot: t,
    bot: t,
    name: 'Bing Bot',
    version: getMatchByIndex(4, /(msn|adidx|bing)(bot|preview)(-media)?[ \/](\d+(\.\d+))/i, ua),
  }

  yield /baiduspider/i.test(ua) && {
    name: 'Baiduspider',
    bot: t,
    baiduspider: t,
    version: getMatchByIndex(1, /baiduspider\/(\d+(\.\d+))/i, ua),
  }

  yield /sogou/i.test(ua) && {
    bot: t,
    name: 'Sogou Spider',
    sogouspider: t,
    version: getMatchByIndex(1, /spider\/(\d+(\.\d+))/i, ua),
  }

  yield /yahoo\! slurp/i.test(ua) && {
    bot: t,
    name: 'Yahoo! Slurp',
    version: getMatchByIndex(2, /yahoo! slurp( china)?\/(\d+(\.\d+))/i, ua),
    yahooslurp: t,
  }

  yield /ya(ndex)?[a-z]+/i.test(ua) && {
    bot: t,
    name: 'YandexBot',
    version: getMatchByIndex(2, /ya(ndex)?[a-z]+\/(\d+(\.\d+))/i, ua),
    yandexbot: t,
  }

  yield /duckduckbot/i.test(ua) && {
    bot: t,
    duckduckbot: t,
    name: 'DuckDuckBot',
    version: getMatchByIndex(1, /duckduckbot\/(\d+(\.\d+))/i, ua),
  }

  yield /exabot/i.test(ua) && {
    bot: t,
    exabot: t,
    name: 'Exabot',
    version: getMatchByIndex(1, /exabot\/(\d+(\.\d+))/i, ua),
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
    version: getMatchByIndex(1, /stackrambler\/(\d+(\.\d+))/i, ua),
  }

  yield /facebo(t|okexternalhit)/i.test(ua) && {
    bot: t,
    facebookbot: t,
    name: 'Facebook Bot',
    version: getMatchByIndex(2, /facebo(t|okexternalhit)\/(\d+(\.\d+))/i, ua),
  }

  yield /linkedinbot/i.test(ua) && {
    bot: t,
    linkedinbot: t,
    name: 'LinkedInBot',
    version: getMatchByIndex(1, /linkedinbot\/(\d+(\.\d+))/i, ua),
  }

  yield /pinterest(bot)?/i.test(ua) && {
    bot: t,
    name: 'Pinterest Bot',
    pinterestbot: t,
    version: getMatchByIndex(2, /pinterest(bot)?\/(\d+(\.\d+))/i, ua),
  }

  yield /slack(bot)?/.test(ua) && {
    bot: t,
    name: 'SlackBot',
    slackbot: t,
    version: getMatchByIndex(1, /(\d+\.\d+)/i, ua),
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
    version: getMatchByIndex(1, /twitterbot\/(\d+(\.\d+))/i, ua),
  }

  yield /whatsapp/i.test(ua) && {
    bot: t,
    name: 'WhatsApp Bot',
    version: getMatchByIndex(1, /whatsapp\/(\d+(\.\d+)+)/i, ua),
    whatsappbot: t,
  }

  yield /covario-ids|findlinks|dataparksearch|larbin|ng-search|snappy|teoma|jeeves|tineye/i.test(ua) && {
    bot: t,
  }
}
