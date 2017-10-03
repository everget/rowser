const Benchmark = require('benchmark');
const bowser = require('bowser');
// const detect = require('detect');
// const { detect } = require('detect-browser');
const platform = require('platform');
const UAParser = require('ua-parser-js');
const rowser = require('../lib/rowser');

const suite = new Benchmark.Suite;

const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

suite
  .add('bowser._detect' , () => {
    bowser._detect(ua);
  })
  // .add('detect.parse', () => {
  //   detect.parse(ua);
  // })
  // .add('detect-browser', () => {
  //   detect(ua);
  // })
  .add('platform.parse', () => {
    platform.parse(ua);
  })
  .add('UAParser', () => {
    UAParser(ua);
  })
  .add('rowser.detect', () => {
    rowser.detect(ua);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
  })
  .run({ 'async': true });
