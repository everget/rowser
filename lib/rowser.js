'use strict';

const run = require('./utils/run');
const botDetect = require('./detectors/botDetect');
const browserDetect = require('./detectors/browserDetect');
const deviceDetect = require('./detectors/deviceDetect');
const engineDetect = require('./detectors/engineDetect');
const gradeDetect = require('./detectors/gradeDetect');
const osDetect = require('./detectors/osDetect');

const rowser = {
  summary: {},

  detect(ua = window.navigator.userAgent, strict = false) {
    let _summary = {};
    let _tmp = {};

    if (/bot|(spid|crawl|seek|peek|archiv)er|bing|whatsapp/i.test(ua)) {
      _summary.bot = true;
      run(botDetect, ua, _summary, _tmp, strict);
    } else {
      run(osDetect, ua, _summary, _tmp, strict);
      run(browserDetect, ua, _summary, _tmp, strict);

      if (_summary.name === undefined) {
        run(botDetect, ua, _summary, _tmp, strict);
      } else {
        run(engineDetect, ua, _summary, _tmp, strict);
        run(deviceDetect, ua, _summary, _tmp, strict);
        run(gradeDetect, ua, _summary);
      }
    }

    this.summary = _summary;
    return this.summary;
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
