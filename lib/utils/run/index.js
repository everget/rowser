'use strict';

/**
 * @param {GeneratorFunction} generator
 * @param {String} ua
 * @param {Object} summary
 * @returns {Void}
 */
module.exports = function run(generator, ua, summary) {
  for (let matching of generator(ua, summary)) {
    if (!matching) {
      continue;
    } else {
      // TODO: return matching and Object.assign to summary in rowser.detect
      Object.assign(summary, matching);
      break;
    }
  }
}
