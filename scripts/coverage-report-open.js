const path = require('path');
const opn = require('opn');

const coverageHTMLReportPath = path.join(__dirname, '../coverage/lcov-report/index.html')

opn(coverageHTMLReportPath, { app: 'chrome' }, (err) => {
  if (err) {
    throw err;
  }
});
