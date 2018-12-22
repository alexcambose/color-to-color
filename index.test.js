const c2c = require('./index')
const color = require('color-string')

describe('color-to-color', () => {
  const c1 = 'red'
  const c2 = 'blue'
  it('transforms colors and outputs rgb object', () => {
    expect(
      c2c(c1)
        .toColor(c2)
        .withPercent(50)
        .get()
    ).toEqual({ r: Math.floor(255 / 2), g: 0, b: Math.floor(255 / 2) })
  })
  Object.keys(color.to).forEach(e => {
    if (e !== 'keyword') {
      it(`can output ${e} string`, () => {
        expect(
          typeof c2c(c1)
            .toColor(c2)
            .withPercent(50)
            .get(e)
        ).toEqual('string')
      })
    } else {
      it(`can output ${e} string`, () => {
        expect(
          typeof c2c(c1)
            .toColor(c2)
            .withPercent(0)
            .get(e)
        ).toEqual('string')
      })
    }
  })
})
console.log(
  c2c('red')
    .toColor('blue')
    .withPercent(28)
    .get('rgb')
)
console.log(color.get)
