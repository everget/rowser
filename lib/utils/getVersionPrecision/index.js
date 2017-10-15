'use strict';

/**
 * @param {String} [version]
 * @returns {Number}
 */
module.exports = function getVersionPrecision(version) {
  return version.length > 0 ? version.split('.').length : 0;
}
