'use strict';

const expect = require('chai').expect;

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/browsers/sailfish');

describe('Sailfish browser', () => {

  before(() => {
    rowser.summary = {};
  });

  it('should be detected', () => {
    userAgents.forEach(item => {
      expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      rowser.summary = {};
    });
  });
});
