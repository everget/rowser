const t = true;

const DOT_NUMBERS_1 = '([0-9]+(?:\\.[0-9]+)+)';
const DOT_NUMBERS_2 = '([0-9]+(\\.[0-9]+)?)';
// const DOT_NUMBERS_3 = '([0-9]+(?:\\.[0-9]+)?)';
// const DOT_NUMBERS_4 = '([0-9]+(\\.[0-9]+))';
// const DOT_NUMBERS_5 = '([0-9]+(?:\\.[0-9]+){1,2})';

const reVersion = new RegExp(`version\/${DOT_NUMBERS_2}`, 'i');

const tvTokens = [
  'googletv', 'smart-?tv', 'appletv', 'sonydtv', 'viera', 'boxee', 'kylo',
  'internet\.tv', 'netcast', 'nettv', 'roku', 'dlnadoc', 'pov_tv', 'hbbtv',
  'ce-html',
].join('|');

const reTV = new RegExp(`${tvTokens}`, 'i');
const reVersionTV = new RegExp(`${tvTokens}\/${DOT_NUMBERS_2}`, 'i');

module.exports = {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  reVersion,
  reTV,
  reVersionTV,
};
