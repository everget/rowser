'use strict';

const expect = require('chai').expect;

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/browsers/pale-moon');

describe('Pale Moon browser', () => {

  before(() => {
    rowser.summary = {};
  });

  it('all test user agents should be detected correctly', () => {
    userAgents.forEach(item => {
      expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      rowser.summary = {};
    });
  });
});
