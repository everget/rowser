const t = true;

const DOT_NUMS_1 = '([0-9]+(?:\\.[0-9]+)+)';
const DOT_NUMS_2 = '([0-9]+(\\.[0-9]+)?)';
// const DOT_NUMS_3 = '([0-9]+(?:\\.[0-9]+)?)';
// const DOT_NUMS_4 = '([0-9]+(\\.[0-9]+))';
// const DOT_NUMS_5 = '([0-9]+(?:\\.[0-9]+){1,2})';

const reVersion = new RegExp(`version/${DOT_NUMS_2}`);

const tvTokens = [
  '(google|smart-?|apple|sonyd|net|internet.|pov_|hbb)tv', 'netcast', 'viera',
  'boxee', 'kylo', 'roku', 'dlnadoc', 'ce-html',
].join('|');

const reTV = new RegExp(`${tvTokens}`);
const reVersionTV = new RegExp(`${tvTokens}/${DOT_NUMS_2}`);

module.exports = {
  t,
  DOT_NUMS_1,
  DOT_NUMS_2,
  reVersion,
  reTV,
  reVersionTV,
};
