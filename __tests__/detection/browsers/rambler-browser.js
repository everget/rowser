const { expect } = require('chai');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/browsers/rambler-browser');

describe('Rambler Browser', () => {
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
