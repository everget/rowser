'use strict';

const run = require('./utils/run');
const botDetect = require('./detectors/botDetect');
const browserDetect = require('./detectors/browserDetect');
const engineDetect = require('./detectors/engineDetect');
const osDetect = require('./detectors/osDetect');

const rowser = {
  _tmp: new Set(),
  summary: {},

  detect(ua = window.navigator.userAgent) {
    let summary = {};

    if (/bot|(spid|crawl|seek|peek|archiv)er|bing|whatsapp/i.test(ua)) {
      this.summary.bot = true;
      run(botDetect, ua, summary);
    } else {
      run(osDetect, ua, summary);
      run(browserDetect, ua, summary);
      run(engineDetect, ua, summary);

      if (summary.name === undefined) {
        run(botDetect, ua, summary);
      }
    }

    return (this.summary = summary, this.summary);
  }
};

const rowserProxy = new Proxy(rowser, {
  get(target, prop) {
    const lowerCasedProp = prop.toLowerCase();

    if (lowerCasedProp === 'detect') {
      return (ua) => target.detect.call(target, ua);
    } else if (lowerCasedProp === 'summary') {
      return target.summary;
    } else if (lowerCasedProp.startsWith('is') === true) {
        if (Object.keys(target.summary).length === 0 && lowerCasedProp.length > 0) {
          throw new Error('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
        }

        const flag = lowerCasedProp.slice(2);
        const summary = target.summary;

        if (flag in summary && summary[flag] === true) {
          return summary[flag];
        } else {
          return false;
        }
    } else {
      if (Object.keys(target.summary).length === 0 && lowerCasedProp.length > 0) {
        throw new Error('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
      }

      return target.summary[lowerCasedProp];
    }
  }
});

module.exports = rowserProxy;
