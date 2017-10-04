const path = require('path');
const opn = require('opn');

const indexHTMLPath = path.join(__dirname, '../static/index.html')

opn(indexHTMLPath, { app: 'chrome' }, (err) => {
  if (err) {
    throw err;
  }
});
