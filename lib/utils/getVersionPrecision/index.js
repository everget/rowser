'use strict';

/**
 * @param {String} version
 * @returns {Number}
 */
module.exports = function getVersionPrecision(version) {
  return version.split('.').length;
}
