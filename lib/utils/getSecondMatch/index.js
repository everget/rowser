'use strict';

/**
 * @param {RegExp} regexp
 * @param {String} ua
 * @returns {String}
 */
module.exports = function getSecondMatch(regexp, ua) {
  const match = ua.match(regexp);
  return (match !== null && match.length > 2 && match[2]) || '';
}
