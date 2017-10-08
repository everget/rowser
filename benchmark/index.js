const Benchmark = require('benchmark');
const bowser = require('bowser');
const platform = require('platform');
const UAParser = require('ua-parser-js');
const rowser = require('../lib/rowser');

const androidDetectionTimeSuite = new Benchmark.Suite;
const blackberryDetectionTimeSuite = new Benchmark.Suite;
const chromeDetectionTimeSuite = new Benchmark.Suite;
const edgeDetectionTimeSuite = new Benchmark.Suite;
const firefoxDetectionTimeSuite = new Benchmark.Suite;
const ieDetectionTimeSuite = new Benchmark.Suite;
const operaDetectionTimeSuite = new Benchmark.Suite;
const safariDetectionTimeSuite = new Benchmark.Suite;

const shouldRunAsync = false;

const androidUA = 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
const blackberryUA = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.4633 Mobile Safari/537.10+';
const chromeUA = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36';
const edgeUA = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/19.10136';
const firefoxUA = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0';
const ieUA = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MAARJS; rv:11.0) like Gecko';
const operaUA = 'Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.72 Mobile Safari/537.36 OPR/19.0.1340.69721';
const safariUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

androidDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(androidUA);
  })
  .add('platform.parse', () => {
    platform.parse(androidUA);
  })
  .add('UAParser', () => {
    UAParser(androidUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(androidUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nAndroid Browser: fastest is ${androidDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

blackberryDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(blackberryUA);
  })
  .add('platform.parse', () => {
    platform.parse(blackberryUA);
  })
  .add('UAParser', () => {
    UAParser(blackberryUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(blackberryUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nBlackBerry Browser: fastest is ${blackberryDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

chromeDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(chromeUA);
  })
  .add('platform.parse', () => {
    platform.parse(chromeUA);
  })
  .add('UAParser', () => {
    UAParser(chromeUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(chromeUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nGoogle Chrome: fastest is ${chromeDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

edgeDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(edgeUA);
  })
  .add('platform.parse', () => {
    platform.parse(edgeUA);
  })
  .add('UAParser', () => {
    UAParser(edgeUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(edgeUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nMicrosoft Edge: fastest is ${edgeDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

firefoxDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(firefoxUA);
  })
  .add('platform.parse', () => {
    platform.parse(firefoxUA);
  })
  .add('UAParser', () => {
    UAParser(firefoxUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(firefoxUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nMozilla Firefox: fastest is ${firefoxDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

ieDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(ieUA);
  })
  .add('platform.parse', () => {
    platform.parse(ieUA);
  })
  .add('UAParser', () => {
    UAParser(ieUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(ieUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nMicrosoft Internet Explorer: fastest is ${ieDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

operaDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(operaUA);
  })
  .add('platform.parse', () => {
    platform.parse(operaUA);
  })
  .add('UAParser', () => {
    UAParser(operaUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(operaUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nOpera: fastest is ${operaDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });

safariDetectionTimeSuite
  .add('bowser._detect' , () => {
    bowser._detect(safariUA);
  })
  .add('platform.parse', () => {
    platform.parse(safariUA);
  })
  .add('UAParser', () => {
    UAParser(safariUA);
  })
  .add('rowser.detect', () => {
    rowser.detect(safariUA);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`\nApple Safari: fastest is ${safariDetectionTimeSuite.filter('fastest').map('name')}\n`);
  })
  .run({ 'async': shouldRunAsync });
