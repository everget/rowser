const { expect } = require('chai');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/browsers/yandex-browser');

describe('Yandex Browser', () => {
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
});
