function callback() {
  var performanceEnabled = 'performance' in window;
  if (performanceEnabled) {
    var startTime = window.performance.now();
    window.rowser.detect(window.navigator.userAgent);
    var endTime = window.performance.now();
    document.getElementsByClassName('js-item-result-detection-time')[0].textContent = `${(endTime - startTime).toFixed(1)}ms`;
  } else {
    window.rowser.detect(window.navigator.userAgent);
  }

  document.getElementsByClassName('js-item-result-user-agent')[0].textContent = window.navigator.userAgent;
  document.getElementsByClassName('js-item-result-browser')[0].textContent = rowser.summary.name || 'unknown';
  document.getElementsByClassName('js-item-result-browser-version')[0].textContent = rowser.summary.version || 'unknown';
  document.getElementsByClassName('js-item-result-engine')[0].textContent = rowser.summary.engine || 'unknown';
  document.getElementsByClassName('js-item-result-engine-version')[0].textContent = rowser.summary.engineversion || 'unknown';
  document.getElementsByClassName('js-item-result-os')[0].textContent = rowser.summary.os || 'unknown';
  document.getElementsByClassName('js-item-result-os-version')[0].textContent = rowser.summary.osversion || 'unknown';
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
