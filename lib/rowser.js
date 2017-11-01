const run = require('./utils/run');
const botDetect = require('./detectors/botDetect');
const browserDetect = require('./detectors/browserDetect');
const deviceDetect = require('./detectors/deviceDetect');
const engineDetect = require('./detectors/engineDetect');
const gradeDetect = require('./detectors/gradeDetect');
const osDetect = require('./detectors/osDetect');

const rowser = {
  summary: {},

  detect(ua = typeof window !== 'undefined' ? window.navigator.userAgent : '') {
    const summary = {
      tmp: {},
    };

    const uaLowercased = ua.toLowerCase();
    const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

    if (/bot|(spid|crawl|seek|peek|archiv)er|bing|whatsapp|monitor/.test(uaLowercased)) {
      summary.bot = true;
      run(botDetect, uaLowercased, summary, canUseDOM);
    } else {
      run(osDetect, uaLowercased, summary, canUseDOM);
      run(browserDetect, uaLowercased, summary, canUseDOM);

      if (summary.name === undefined) {
        run(botDetect, uaLowercased, summary, canUseDOM);
      } else {
        run(engineDetect, uaLowercased, summary, canUseDOM);
        run(deviceDetect, uaLowercased, summary, canUseDOM);
        run(gradeDetect, uaLowercased, summary, canUseDOM);
      }
    }

    Reflect.deleteProperty(summary, 'tmp');

    this.summary = summary;
    return this.summary;
  },
};

const rowserProxy = new Proxy(rowser, {
  get(target, prop) {
    const lowerCasedProp = prop.toLowerCase();

    if (lowerCasedProp === 'detect') {
      return ua => target.detect.call(target, ua);
    } else if (lowerCasedProp === 'summary') {
      return target.summary;
    } else if (lowerCasedProp.startsWith('is') === true) {
      if (Object.keys(target.summary).length === 0 && lowerCasedProp.length > 0) {
        throw new Error('`rowser.summary` is empty. Run `rowser.detect`.');
      }

      const flag = lowerCasedProp.slice(2);

      if (target.summary[flag] != null && target.summary[flag] === true) {
        return target.summary[flag];
      }
      return false;
    }
    if (Object.keys(target.summary).length === 0 && lowerCasedProp.length > 0) {
      throw new Error('`rowser.summary` is empty. Run `rowser.detect`.');
    }

    if (typeof target.summary[lowerCasedProp] === 'boolean') {
      return target.summary[lowerCasedProp];
    }
    return target.summary[lowerCasedProp];
  },
});

module.exports = rowserProxy;
