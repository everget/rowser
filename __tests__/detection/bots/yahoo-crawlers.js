const { expect } = require('chai');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/bots/yahoo-crawlers');

describe('Yahoo! Crawlers', () => {
  beforeEach(() => {
    rowser.summary = {};
  });

  after(() => {
    rowser.summary = {};
  });

  userAgents.forEach((item) => {
    describe(`${item.ua}`, () => {
      it('should be detected correctly', () => {
        expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      });
    });
  });

  // it('every detection result should match its snapshot', (done) => {
  //   userAgents.forEach(item => {
  //     snapshot(rowser.detect(item.ua));
  //     rowser.summary = {};
  //   });

  //   done();
  // }).timeout(8000);
});
