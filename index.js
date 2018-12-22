const color = require('color-string')
const rgbObject = value => {
  const array = color.get.rgb(value)
  return {
    r: array[0],
    g: array[1],
    b: array[2],
    a: array[3]
  }
}

module.exports = from => {
  from = rgbObject(from)

  let colorDiff, result
  this.toColor = colorValue => {
    colorValue = rgbObject(colorValue)
    colorDiff = {
      r: colorValue.r - from.r,
      g: colorValue.g - from.g,
      b: colorValue.b - from.b
    }
    return { withPercent }
  }
  const withPercent = p => {
    const percentF = p / 100

    result = {
      r:
        from.r +
        Math.floor(
          colorDiff.r > 0 ? colorDiff.r * percentF : -(-colorDiff.r * percentF)
        ),
      g:
        from.g +
        Math.floor(
          colorDiff.g > 0 ? colorDiff.g * percentF : -(-colorDiff.g * percentF)
        ),
      b:
        from.b +
        Math.floor(
          colorDiff.b > 0 ? colorDiff.b * percentF : -(-colorDiff.b * percentF)
        )
    }
    return { get }
  }
  const get = type => {
    if (!type) return result
    const values = Object.keys(color.to)
    if (values.indexOf(type) !== -1) { return color.to[type]([result.r, result.g, result.b]) } else throw new Error(`Unknown type '${type}'`)
  }
  return this
}
