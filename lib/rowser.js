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

  detect(ua = window.navigator.userAgent) {
    const _summary = {
      tmp: {},
    };

    const uaLowercased = ua.toLowerCase();
    const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

    if (/bot|(spid|crawl|seek|peek|archiv)er|bing|whatsapp|monitor/.test(uaLowercased)) {
      _summary.bot = true;
      run(botDetect, uaLowercased, _summary);
    } else {
      run(osDetect, uaLowercased, _summary);
      run(browserDetect, uaLowercased, _summary, canUseDOM);

      if (_summary.name === undefined) {
        run(botDetect, uaLowercased, _summary);
      } else {
        run(engineDetect, uaLowercased, _summary, canUseDOM);
        run(deviceDetect, uaLowercased, _summary, canUseDOM);
        run(gradeDetect, uaLowercased, _summary, canUseDOM);
      }
    }

    Reflect.deleteProperty(_summary, 'tmp');

    this.summary = _summary;
    return this.summary;
  }
};

const rowserProxy = new Proxy(rowser, {
  get(target, prop) {
    const lowerCasedProp = prop.toLowerCase();
    const summary = target.summary;

    if (lowerCasedProp === 'detect') {
      return (ua) => target.detect.call(target, ua);
    } else if (lowerCasedProp === 'summary') {
      return target.summary;
    } else if (lowerCasedProp.startsWith('is') === true) {
        if (Object.keys(target.summary).length === 0 && lowerCasedProp.length > 0) {
          throw new Error('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
        }

        const flag = lowerCasedProp.slice(2);

        if (summary[flag] != null && summary[flag] === true) {
          return summary[flag];
        } else {
          return false;
        }
    } else {
      if (Object.keys(target.summary).length === 0 && lowerCasedProp.length > 0) {
        throw new Error('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
      }

      if (typeof summary[lowerCasedProp] === 'boolean') {
        return summary[lowerCasedProp];
      } else {
        return target.summary[lowerCasedProp];
      }
    }
  }
});

module.exports = rowserProxy;
