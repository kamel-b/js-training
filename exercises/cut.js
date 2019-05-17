'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */


const cutFirst = (str) => {
    return str.slice(2)
  }

const cutLast = (str) => {
    return str.slice(0, str.length-2)
  }

const cutFirstLast = (str) => {
    return str.slice(2, str.length-2)
  }
  


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('kamel'), 'mel')
assert.deepStrictEqual(cutLast('kamel'), 'kam')
assert.deepStrictEqual(cutFirstLast('kamel'),'m')






// assert.fail('You must write your own tests')
// End of tests */
