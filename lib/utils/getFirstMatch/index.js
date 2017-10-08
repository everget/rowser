'use strict';

/**
 * @param {RegExp} regexp
 * @param {String} ua
 * @returns {String}
 */
module.exports = function getFirstMatch(regexp, ua) {
  const match = ua.match(regexp);
  return (match !== null && match.length > 1 && match[1]) || '';
}
