var rgb2hsl = require('./')
var test = require('tape')

test('converts [R,G,B] to [H,S,L]', function (t) {
  t.deepEqual(rgb2hsl([0.375, 0.625, 0.625]), [0.5, 0.25, 0.5])
  t.deepEqual(rgb2hsl([1, 0, 0]), [0, 1.0, 0.5])
  t.deepEqual(rgb2hsl([0, 1, 0]), [1 / 3, 1.0, 0.5])
  t.deepEqual(rgb2hsl([0.5, 0.5, 0.5]), [0, 0, 0.5])
  t.deepEqual(rgb2hsl([0.75, 0.25, 0.25]), [0, 0.5, 0.5])
  t.deepEqual(rgb2hsl([0, 0, 0]), [0, 0, 0])
  t.deepEqual(rgb2hsl([1, 1, 1]), [0, 0, 1])
  t.end()
})
