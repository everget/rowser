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
 */
module.exports = function* botDetect(ua, summary) {
  yield /mj12bot|majestic12/.test(ua) && {
    bot: t,
    mj12bot: t,
    name: 'Majestic-12 Web Crawler',
    version: getMatchByIndex(1, /mj12bot\/v([0-9]+(\.[0-9]+)+)/, ua),
  }

  yield /(mediapartners|apis|adsbot)?[ -]?\(?google(bot)?/.test(ua) && {
    bot: t,
    googlebot: t,
    name: 'Googlebot',
    version: getMatchByIndex(4, /(mediapartners-)?google(bot)?-?(image|video|mobile)?[ /]([0-9]+(\.[0-9]+))/, ua),
  }

  // TODO: check
  yield /msn|adidx|bing(bot|preview)/.test(ua) && {
    bingbot: t,
    bot: t,
    name: 'Bing Bot',
    version: getMatchByIndex(4, /(msn|adidx|bing)(bot|preview)(-media)?[ /]([0-9]+(\.[0-9]+))/, ua),
  }

  yield /baiduspider/.test(ua) && {
    name: 'Baiduspider',
    bot: t,
    baiduspider: t,
    version: getMatchByIndex(1, /baiduspider\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /sogou/.test(ua) && {
    bot: t,
    name: 'Sogou Spider',
    sogouspider: t,
    version: getMatchByIndex(1, /spider\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /yahoo! slurp/.test(ua) && {
    bot: t,
    name: 'Yahoo! Slurp',
    version: getMatchByIndex(2, /yahoo! slurp( china)?\/([0-9]+(\.[0-9]+))/, ua),
    yahooslurp: t,
  }

  yield /ya(ndex)?[a-z]+/.test(ua) && {
    bot: t,
    name: 'YandexBot',
    version: getMatchByIndex(2, /ya(ndex)?[a-z]+\/([0-9]+(\.[0-9]+))/, ua),
    yandexbot: t,
  }

  yield /duckduckbot/.test(ua) && {
    bot: t,
    duckduckbot: t,
    name: 'DuckDuckBot',
    version: getMatchByIndex(1, /duckduckbot\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /exabot/.test(ua) && {
    bot: t,
    exabot: t,
    name: 'Exabot',
    version: getMatchByIndex(1, /exabot\/([0-9]+(\.[0-9]+))/, ua),
  }

  // TODO: Add for Alexabot (Alexa Certify Crawler)
  yield /a_archiver/.test(ua) && {
    alexacrawler: t,
    bot: t,
    name: 'Alexa Crawler',
  }

  yield /stackrambler/.test(ua) && {
    bot: t,
    name: 'StackRambler',
    stackrambler: t,
    version: getMatchByIndex(1, /stackrambler\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /facebo(t|okexternalhit)/.test(ua) && {
    bot: t,
    facebookbot: t,
    name: 'Facebook Bot',
    version: getMatchByIndex(2, /facebo(t|okexternalhit)\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /linkedinbot/.test(ua) && {
    bot: t,
    linkedinbot: t,
    name: 'LinkedInBot',
    version: getMatchByIndex(1, /linkedinbot\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /pinterest(bot)?/.test(ua) && {
    bot: t,
    name: 'Pinterest Bot',
    pinterestbot: t,
    version: getMatchByIndex(2, /pinterest(bot)?\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /slack(bot)?/.test(ua) && {
    bot: t,
    name: 'SlackBot',
    slackbot: t,
    version: getMatchByIndex(1, /([0-9]+\.[0-9]+)/, ua),
  }

  yield /telegrambot/.test(ua) && {
    bot: t,
    name: 'TelegramBot',
    telegrambot: t,
  }

  yield /twitterbot/.test(ua) && {
    bot: t,
    name: 'TwitterBot',
    twitterbot: t,
    version: getMatchByIndex(1, /twitterbot\/([0-9]+(\.[0-9]+))/, ua),
  }

  yield /whatsapp/.test(ua) && {
    bot: t,
    name: 'WhatsApp Bot',
    version: getMatchByIndex(1, /whatsapp\/([0-9]+(\.[0-9]+)+)/, ua),
    whatsappbot: t,
  }

  yield /scoutjet|simplepie|covario-ids|findlinks|dataparksearch|larbin|ng-search|snappy|teoma|jeeves|tineye/.test(ua) && {
    bot: t,
  }
}
