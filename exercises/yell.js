'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = (str)=>{
    return str.toUpperCase()
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('kamel'), 'KAMEL' )
assert.deepStrictEqual(yell('Fire'), 'FIRE' )





// assert.fail('You must write your own tests')
// End of tests */
