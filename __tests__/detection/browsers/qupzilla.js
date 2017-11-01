const { expect } = require('chai');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/browsers/qupzilla');

describe('QupZilla browser', () => {
  beforeEach(() => {
    rowser.summary = {};
  });

  userAgents.forEach((item) => {
    describe(`${item.ua}`, () => {
      it('should be detected correctly', () => {
        expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      });
    });
  });
});
