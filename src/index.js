const rowser = require('../lib/rowser');
require('./index.css');

function callback() {
  const performanceEnabled = 'performance' in window;
  if (performanceEnabled) {
    const startTime = performance.now();
    rowser.detect(navigator.userAgent);
    const endTime = performance.now();
    document.getElementsByClassName('js-item-result-detection-time')[0].textContent = `${(endTime - startTime).toFixed(1)}ms`;
  } else {
    rowser.detect(navigator.userAgent);
  }

  document.getElementsByClassName('js-item-result-user-agent')[0].textContent = navigator.userAgent;
  document.getElementsByClassName('js-item-result-browser')[0].textContent = rowser.summary.name || 'unknown';
  document.getElementsByClassName('js-item-result-browser-version')[0].textContent = rowser.summary.version || 'unknown';
  document.getElementsByClassName('js-item-result-engine')[0].textContent = rowser.summary.engine || 'unknown';
  document.getElementsByClassName('js-item-result-engine-version')[0].textContent = rowser.summary.engineversion || 'unknown';
  document.getElementsByClassName('js-item-result-os')[0].textContent = rowser.summary.osname || 'unknown';
  document.getElementsByClassName('js-item-result-os-version')[0].textContent = rowser.summary.osversion || 'unknown';

  document.getElementsByClassName('js-item-result-device')[0].textContent = rowser.summary.device || 'unknown';

  document.getElementsByClassName('js-item-result-device-type')[0].textContent = (rowser.summary.mobile && 'Mobile' || rowser.summary.tablet && 'Tablet' || rowser.summary.tv && 'TV' || rowser.summary.gameconsole && 'Game Console') || 'unknown';
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
