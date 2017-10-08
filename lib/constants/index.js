const t = true;

const DOT_NUMBERS_1 = '(\\d+(?:\\.\\d+)+)';
const DOT_NUMBERS_2 = '(\\d+(\\.\\d+)?)';
const DOT_NUMBERS_3 = '(\\d+(?:\\.\\d+)?)';
const DOT_NUMBERS_4 = '(\\d+(\\.\\d+))';
const DOT_NUMBERS_5 = '(\\d+(?:\\.\\d+){1,2})';

const reVersion = new RegExp(`version\/${DOT_NUMBERS_2}`, 'i');

const reTV = (function() {
  const tvDevices = [
    'googletv', 'sonydtv', 'viera', 'smarttv', 'appletv', 'boxee', 'kylo',
    'internet\.tv', 'netcast', 'nettv', 'roku', 'dlnadoc', 'pov_tv', 'hbbtv',
    'ce-html',
  ].join('|');

  return new RegExp(`tvDevices\/${DOT_NUMBERS_1}`, 'i');
})();

module.exports = {
  t,
  DOT_NUMBERS_1,
  DOT_NUMBERS_2,
  DOT_NUMBERS_3,
  DOT_NUMBERS_4,
  reVersion,
  reTV
};
