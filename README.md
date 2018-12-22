# color-to-color

[![Coverage Status](https://coveralls.io/repos/github/alexcambose/color-to-color/badge.svg?branch=master)](https://coveralls.io/github/alexcambose/color-to-color?branch=master)
[![Build Status](https://travis-ci.org/alexcambose/color-to-color.svg?branch=master)](https://travis-ci.org/alexcambose/color-to-color)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Transform _color to color_ based on percentage

[![Edit 382j03rm86](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/382j03rm86)

## Install

With [npm](https://www.npmjs.com/package/color-to-color)

```
npm i color-to-color -S
```

## Usage

```js
const c2c = require("color-to-color");
const fromColor = 'red';
const toColor = 'blue';
c2c(fromColor).toColor(toColor).withPercent(50).get(); // { r: 127, g: 0, b: 127 }

c2c(fromColor).toColor(toColor).withPercent(28).get('rgb'); // rgb(183, 0, 71)
c2c(fromColor).toColor(toColor).withPercent(50).get('hex'); // #7F007F
c2c(fromColor).toColor(toColor).withPercent(100).get('hsl'); // hsl(0, 0%, 255%)
c2c(fromColor).toColor(toColor).withPercent(84).get('hwb'); // hwb(40, 0%, 214%)

c2c(fromColor).toColor(toColor).withPercent(0).get('keyword'); // red
c2c(fromColor).toColor(toColor).withPercent(100).get('keyword'); // blue
c2c(fromColor).toColor(toColor).withPercent(65).get('keyword'); // undefined
```

## License

MIT
