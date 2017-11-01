const t = true;

const DOT_NUMS_1 = '([0-9]+(?:\\.[0-9]+)+)';
const DOT_NUMS_2 = '([0-9]+(\\.[0-9]+)?)';

const reVersion = new RegExp(`version/${DOT_NUMS_2}`);

const tvTokens = [
  '(google|smart-?|apple|sonyd|net|internet.|pov_|hbb)tv', 'netcast', 'viera',
  'boxee', 'kylo', 'roku', 'dlnadoc', 'ce-html',
].join('|');

const reTV = new RegExp(`${tvTokens}`);
const reVersionTV = new RegExp(`${tvTokens}/${DOT_NUMS_2}`);

exports.t = t;
exports.DOT_NUMS_1 = DOT_NUMS_1;
exports.DOT_NUMS_2 = DOT_NUMS_2;
exports.reVersion = reVersion;
exports.reTV = reTV;
exports.reVersionTV = reVersionTV;
