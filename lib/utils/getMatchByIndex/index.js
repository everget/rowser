'use strict';

/**
 * @param {RegExp} regexp
 * @param {String} ua
 * @returns {String}
 */
module.exports = function getMatchByIndex(index, regexp, ua) {
  const match = ua.match(regexp);
  return (match !== null && match.length > index && match[index]) || '';
}
