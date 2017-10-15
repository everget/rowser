'use strict';

/**
 * @param {GeneratorFunction} [generator]
 * @param {String} [ua]
 * @param {Object} [summary]
 * @param {Object} [tmp]
 * @param {Boolean} [strict]
 * @returns {Void}
 */
module.exports = function run(generator, ua, summary, tmp, strict) {
  for (let matching of generator(ua, summary, tmp, strict)) {
    if (!matching) {
      continue;
    } else {
      Object.assign(summary, matching);
      break;
    }
  }
}
