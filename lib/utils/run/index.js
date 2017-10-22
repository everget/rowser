'use strict';

/**
 * @param {GeneratorFunction} [generator]
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Boolean} [canUseDOM]
 * @returns {Void}
 */
module.exports = function run(generator, ua, summary, canUseDOM) {
  for (let matching of generator(ua, summary, canUseDOM)) {
    if (matching) {
      Object.assign(summary, matching);
      break;
    }
  }
}
