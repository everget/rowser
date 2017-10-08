# rowser

An experimental generator-based browser/os/bot detector with proxied API

[![Build Status](https://travis-ci.org/everget/rowser.svg?branch=master)](https://travis-ci.org/everget/rowser) [![Build status](https://ci.appveyor.com/api/projects/status/oar5nqb50oowws9e/branch/master?svg=true)](https://ci.appveyor.com/project/everget/rowser/branch/master) [![codecov](https://codecov.io/gh/everget/rowser/branch/master/graph/badge.svg)](https://codecov.io/gh/everget/rowser) [![Coverage Status](https://coveralls.io/repos/github/everget/rowser/badge.svg)](https://coveralls.io/github/everget/rowser) [![npm version](https://img.shields.io/npm/v/rowser.svg?style=flat)](https://www.npmjs.com/package/rowser) [![npm](https://img.shields.io/npm/dm/rowser.svg?style=flat)](https://www.npmjs.com/package/rowser) [![David](https://img.shields.io/david/dev/everget/rowser.svg)](https://david-dm.org/everget/rowser) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Feverget%2Frowser.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Feverget%2Frowser?ref=badge_shield)

## Table of contents
1. [Installation](#installation)
1. [API](#api)
1. [Usage](#usage)
1. [Possible flags](#possible-flags)
1. [License](#license)

## Installation
```
npm install rowser --save
```

```
yarn add rowser --save
```

[Back to top](#table-of-contents)

## API

### detect(ua: string = window.navigator.userAgent) => Object

Method `detect` runs detection process

### summary: Object

Property `summary` saves result of the last detection

[Back to top](#table-of-contents)

## Usage

By default, rowser gets `window.navigator.userAgent` as its `ua` parameter. So in browser environment you can simply do:

```js
rowser.detect();
```

Also you can use custom useragent string:

```js
const someMobilaUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a';

rowser.detect(someMobilaUA);
```

After that, `rowser.detect(ua)` returns ```PlainObject``` as result:

```js
rowser.detect(someMobilaUA);
// =>
//  {
//    device: "iPhone",
//    engine: "Webkit",
//    ios: true,
//    name: "Safari",
//    osname: "iOS",
//    osversion: "7.0.4",
//    safari: true,
//    version: "",
//    webkit: true
//  }
```

**NOTE**: if you call `rowser.detect('')` you will get an empty object:

```js
rowser.detect('');
// => {}
```

After detection `rowser` saves result in its property called `summary`:

```js
rowser.summary
// =>
//  {
//    device: "iPhone",
//    engine: "Webkit",
//    ios: true,
//    name: "Safari",
//    osname: "iOS",
//    osversion: "7.0.4",
//    safari: true,
//    version: "",
//    webkit: true
//  }
```

**NOTE**: When detection is done `rowser`'s proxied API will allow you to get result's directly:

```js
rowser.device
// => 'iPhone'

rowser.ios
// => true

rowser.osversion
// => '7.0.4'
```

Additionally for boolean props, you can add `is`-prefixes to props names:

```js
rowser.isWebkit
// => true

rowser.iswebkit
// => true

rowser.isWeBkIt
// => true

rowser.isWEBKIT
// => true

rowser.isSafari
// => true

rowser.issafari
// => true

rowser.isSaFArI
// => true

rowser.isSAFARI
// => true
```

**NOTE**: `is`-prefixed props are case insensetive

[Back to top](#table-of-contents)

## Possible flags

[Back to top](#table-of-contents)


## License

MIT © Alex Orekhov

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Feverget%2Frowser.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Feverget%2Frowser?ref=badge_large)

#### Browsers

Browser                     | Rowser flag
--------------------------- | -----------
Android Browser             | ```androidbrowser```
BlackBerry Browser          | ```blackberrybrowser```, ```bbbrowser```
Chromium                    | ```chromium```
Google Chrome               | ```chrome```
Dorothy Browser             | ```dorothy```
Epiphany                    | ```epiphany```
Mozilla Firefox             | ```firefox```
Microsoft Internet Explorer | ```msie```
K-Meleon                    | ```kmeleon```
Maxthon                     | ```maxthon```
Microsoft Edge              | ```msedge```
OmniWeb                     | ```omniweb```
Opera                       | ```opera```
Opera Coast                 | ```opera```, ```operacoast```
Opera Mini                  | ```opera```, ```operamini```
Opera Mobile                | ```opera```, ```operamobile```
Opera Neon                  | ```opera```, ```operaneon```
Pale Moon                   | ```palemoon```
PhantomJS                   | ```phantomjs```
Puffin                      | ```puffin```
QupZilla                    | ```qupzilla```
Rambler Browser             | ```ramblerbrowser```, ```nichrome```
Apple Safari                | ```safari```
Sailfish Browser            | ```sailfishbrowser```
Samsung Internet            | ```samsungbrowser```, ```samsunginternet```
SeaMonkey                   | ```seamonkey```
Amazon Silk                 | ```silk```
Skyfire                     | ```skyfire```
Sleipnir                    | ```sleipnir```
SlimerJS                    | ```slimerjs```
Tesla Car Browser           | ```teslacarbrowser```, ```qtcarbrowser```
Tizen Browser               | ```tizenbrowser```
UC Browser                  | ```ucbrowser```
Vivaldi                     | ```vivaldi```
webOS Browser               | ```webosbrowser```
Yandex Browser              | ```yandexbrowser```

#### Rendering engines

Rendering engine  | Rowser flag
----------------- | -----------
Blink             | ```blink```
EdgeHTML          | ```edgehtml```
Gecko             | ```gecko```
Goanna            | ```goanna```
Presto            | ```presto```
Trident           | ```trident```
Webkit            | ```webkit```

#### Operatins systems

Operating system  | Rowser flag
----------------- | -----------
Android           | ```android```
(SOON) Android TV | ```androidtv```
(SOON) Bada       | ```bada```
BlackBerry OS     | ```blackberry```
Chrome OS         | ```chromeos```
(SOON) Firefox OS | ```firefoxos```, ```fxos```
iOS               | ```ios```
Linux             | ```linux```
macOS             | ```macos```
NetCast           | ```netcast```
Sailfish          | ```sailfish```
Tizen             | ```tizen```
webOS             | ```webos```
Windows           | ```windows```
Windows Phone     | ```windowsphone```

#### Bots

[Back to top](#table-of-contents)
