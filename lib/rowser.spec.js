'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const rowser = require('./rowser');

describe('Object: rowser', () => {

  describe('Definition', () => {

    it('should be a non-empty proxied object', () => {
      expect(typeof rowser).to.equal('object');
      expect(Object.keys(rowser).length > 0).to.equal(true);
    });

  });

  describe('Property: `summary`', () => {

    it('should be defined', () => {
      expect(rowser.summary).to.exist;
    });

    it('should have initial value of empty object', () => {
      expect(typeof rowser.summary).to.equal('object');
      expect(Object.keys(rowser.summary).length).to.equal(0);
    });

  });

  describe('Method: `detect`', () => {

    it('should be defined', () => {
      expect(rowser.detect).to.exist;
    });

    it('should be a function', () => {
      expect(typeof rowser.detect).to.equal('function');
    });

    it('should have 1 parameter', () => {
      expect(rowser.detect.length).to.equal(1);
    });

  });

  describe('Access by summary\' keys', () => {
    let ua = null;

    beforeEach(() => {
      ua = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.4633 Mobile Safari/537.10+';
      rowser.summary = {};
      rowser.detect(ua);
    });

    afterEach(() => {
      ua = null;
    });

    it('should allow access to `rowser.summary` values', () => {
      expect(rowser.bbbrowser).to.equal(true);
      expect(rowser.blackberry).to.equal(true);
      expect(rowser.blackberrybrowser).to.equal(true);
      expect(rowser.engine).to.equal('Webkit');
      expect(rowser.name).to.equal('BlackBerry Browser');
      expect(rowser.osname).to.equal('BlackBerry OS');
      expect(rowser.osversion).to.equal('10.1');
      expect(rowser.version).to.equal('10.1');
      expect(rowser.webkit).to.equal(true);
    });

    it('should allow case insensetive access to `rowser.summary` values', () => {
      expect(rowser.BBbrowser).to.equal(true);
      expect(rowser.blackBerry).to.equal(true);
      expect(rowser.BlackBerry).to.equal(true);
      expect(rowser.BLACKBERRY).to.equal(true);
      expect(rowser.enGINE).to.equal('Webkit');
      expect(rowser.EnGiNe).to.equal('Webkit');
      expect(rowser.ENGINE).to.equal('Webkit');
      expect(rowser.nAme).to.equal('BlackBerry Browser');
      expect(rowser.NAME).to.equal('BlackBerry Browser');
      expect(rowser.osName).to.equal('BlackBerry OS');
      expect(rowser.osVersion).to.equal('10.1');
      expect(rowser.VERSION).to.equal('10.1');
      expect(rowser.WeBkit).to.equal(true);
      expect(rowser.webkit).to.equal(true);
      expect(rowser.WEBKIT).to.equal(true);
    });

  });

  describe('Access to summary\' keys by `is`-prefixed keys', () => {
    let ua = null;

    beforeEach(() => {
      ua = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.4633 Mobile Safari/537.10+';
      rowser.summary = {};
      rowser.detect(ua);
    });

    afterEach(() => {
      ua = null;
    });

    it('should allow access to summary booleans with `is`-prefixed props', () => {
      expect(rowser.isBlackBerry).to.equal(true);
      expect(rowser.isWebkit).to.equal(true);
    });

    it('should allow case insensetive access to summary booleans with `is`-prefixed props', () => {
      expect(rowser.isblackBerry).to.equal(true);
      expect(rowser.isBlackBerry).to.equal(true);
      expect(rowser.isBLACKBERRY).to.equal(true);
      expect(rowser.isWeBkit).to.equal(true);
      expect(rowser.iswebkit).to.equal(true);
      expect(rowser.isWEBKIT).to.equal(true);
    });


    it('should return false when there is no suitable keys', () => {
      expect(rowser.isSafari).to.equal(false);
      expect(rowser.isMSEdge).to.equal(false);
      expect(rowser.isChrome).to.equal(false);
      expect(rowser.isFirefox).to.equal(false);
    });

  });

  describe('Access to summary\' keys before running detection', () => {
    let ua = null;
    let spyProps = null;

    beforeEach(() => {
      ua = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.4633 Mobile Safari/537.10+';
      rowser.summary = {};
    });

    afterEach(() => {
      ua = null;
    });

    it('should throw error while accessing summary\' key', () => {
      try {
        rowser.webkit;
      } catch (e) {
        expect(typeof e).to.equal('object');
        expect(({}).toString.call(e).slice(8, -1)).to.equal('Error');
        expect(e.message).to.equal('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
      }
    });

    it('should throw error while accessing summary\' key with `is`-prefixed key', () => {
      try {
        rowser.isWebkit;
      } catch (e) {
        expect(typeof e).to.equal('object');
        expect(({}).toString.call(e).slice(8, -1)).to.equal('Error');
        expect(e.message).to.equal('`rowser.summary` is empty. Run `rowser.detect(ua)`.');
      }
    });

  });

});
