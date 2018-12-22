
#  color-to-color

Transform *color to color* based with percentage

## Install
With [npm](https://www.npmjs.com/package/tctc)
```
npm i color-to-color -S
```

## Usage
```js
const fromColor = 'red';
const toColor = 'blue';
tctc(fromColor).toColor(toColor).withPercent(50).get(); // { r: 127, g: 0, b: 127 }

tctc(fromColor).toColor(toColor).withPercent(28).get('rgb'); // rgb(183, 0, 71)
tctc(fromColor).toColor(toColor).withPercent(50).get('hex'); // #7F007F
tctc(fromColor).toColor(toColor).withPercent(100).get('hsl'); // hsl(0, 0%, 255%)
tctc(fromColor).toColor(toColor).withPercent(84).get('hwb'); // hwb(40, 0%, 214%)

tctc(fromColor).toColor(toColor).withPercent(0).get('keyword'); // red
tctc(fromColor).toColor(toColor).withPercent(100).get('keyword'); // blue
tctc(fromColor).toColor(toColor).withPercent(65).get('keyword'); // undefined
```

## License
MIT