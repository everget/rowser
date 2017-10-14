'use strict';

const expect = require('chai').expect;
const snapshot = require('snap-shot');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/bots/majestic-12-crawlers');

describe('Majestic-12 Crawlers', () => {

  before(() => {
    rowser.summary = {};
  });

  it('all test user agents should be detected correctly', () => {
    userAgents.forEach(item => {
      expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      rowser.summary = {};
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
