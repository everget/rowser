'use strict';

const run = require('./utils/run');
const botDetect = require('./detectors/botDetect');
const browserDetect = require('./detectors/browserDetect');
const engineDetect = require('./detectors/engineDetect');
const deviceDetect = require('./detectors/deviceDetect');
const osDetect = require('./detectors/osDetect');

const rowser = {
  _tmp: new WeakSet(),
  summary: {},

  detect(ua = window.navigator.userAgent) {
    let summary = {};

    // TODO: move device detect to osDetect
    // run(deviceDetect, ua, summary);
    run(osDetect, ua, summary);
    run(browserDetect, ua, summary);
    run(engineDetect, ua, summary);

    if (summary.name === void 0) {
      run(botDetect, ua, summary);
    }

    return (this.summary = summary, this.summary);
  }
};

const rowserProxy = new Proxy(rowser, {
  get(target, prop) {
    const lowerCasedProperty = prop.toLowerCase();
    if (lowerCasedProperty === 'detect') {
      return (ua) => target.detect.call(target, ua);
    } else if (lowerCasedProperty === 'summary') {
      return target.summary;
    } else if (lowerCasedProperty.startsWith('is') === true) {
      const flag = lowerCasedProperty.slice(2);
      const summary = target.summary;
      if (Object.keys(summary).length === 0) {
        throw new Error('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
      } else if (flag in summary && summary[flag] === true) {
        return summary[flag];
      } else {
        return false;
      }
    } else {
      return target.summary[prop];
    }
  }
});

module.exports = rowserProxy;
