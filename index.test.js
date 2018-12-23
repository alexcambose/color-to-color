const c2c = require('./index')
const color = require('color-string')

describe('color-to-color', () => {
  const c1 = 'red'
  const c2 = 'blue'
  it('transforms red color', () => {
    expect(
      c2c('rgb(255, 0, 0)')
        .toColor('rgb(0,0,0)')
        .withPercent(100)
        .get('keyword')
    ).toEqual('black')
    expect(
      c2c('rgb(0, 0, 0)')
        .toColor('rgb(255,0,0)')
        .withPercent(100)
        .get('keyword')
    ).toEqual('red')
  })
  it('transforms green color', () => {
    expect(
      c2c('rgb(0, 255, 0)')
        .toColor('rgb(0,0,0)')
        .withPercent(100)
        .get('keyword')
    ).toEqual('black')
    expect(
      c2c('rgb(0, 0, 0)')
        .toColor('rgb(0,255,0)')
        .withPercent(100)
        .get('keyword')
    ).toEqual('lime')
  })
  it('transforms blue color', () => {
    expect(
      c2c('rgb(0, 0, 255)')
        .toColor('rgb(0,0,0)')
        .withPercent(100)
        .get('keyword')
    ).toEqual('black')
    expect(
      c2c('rgb(0, 0, 0)')
        .toColor('rgb(0,0,255)')
        .withPercent(100)
        .get('keyword')
    ).toEqual('blue')
  })
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
  it('throws error if color model is not recognized', () => {
    expect(() =>
      c2c('red')
        .toColor('green')
        .withPercent(0)
        .get('something')
    ).toThrow()
  })
})
