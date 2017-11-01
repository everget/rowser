const { t } = require('../../constants');

/**
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 */
// eslint-disable-next-line no-unused-vars
module.exports = function gradeDetect(ua, summary, canUseDOM) {
  /**
   * https://github.com/yui/yui3/wiki/Graded-Browser-Support
   * https://www.mediawiki.org/wiki/Compatibility
   */
  return [
    (summary.msedge ||
      (summary.msie && summary.version.split('.')[0] >= 10) ||
      (summary.yandexbrowser && summary.version.split('.')[0] >= 15) ||
      (summary.vivaldi && summary.version.split('.')[0] >= 1) ||
      (summary.chrome && summary.version.split('.')[0] >= 20) ||
      (summary.samsungbrowser && summary.version.split('.')[0] >= 4) ||
      (summary.firefox && !summary.firefoxfocus && summary.version >= 20.0) ||
      (summary.safari && summary.version.split('.')[0] >= 6) ||
      (summary.opera && !summary.operamini && !summary.operaneon && summary.version >= 10.0) ||
      (summary.ios && summary.osversion && summary.osversion.split('.')[0] >= 6) ||
      (summary.blackberry && summary.version >= 10.1) ||
      (summary.chromium && summary.version.split('.')[0] >= 20)
    ) && {
      a: t,
    },

    ((summary.msie && !summary.version.startsWith('10')) ||
      (summary.chrome && !summary.version.startsWith('20')) ||
      (summary.firefox && !summary.firefoxfocus && !summary.version.startsWith('20')) ||
      (summary.safari && !summary.version.startsWith('6')) ||
      (summary.opera && !summary.operamini && !summary.operaneon && !summary.version.startsWith('10')) ||
      (summary.ios && summary.osversion && !summary.osversion.startsWith('6')) ||
      (summary.chromium && !summary.version.startsWith('20'))
    ) && {
      c: t,
    },
  ];
  // yield {
  //   x: t,
  // }
};
