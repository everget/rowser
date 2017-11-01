/**
 * @param {Function} [detector]
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 * @returns {Void}
 */
module.exports = function run(detector, ua, summary, canUseDOM) {
  const matching = detector(ua, summary, canUseDOM).find(item => !!item);
  if (matching) {
    Object.assign(summary, matching);
  }
};
