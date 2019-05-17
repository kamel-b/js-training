'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper =(str) =>{
    return '* ' +  str.toLowerCase() + ' *'
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('KAMEL'), '* kamel *'  )
assert.deepStrictEqual(whisper('Fire'), '* fire *' )
assert.deepStrictEqual(whisper('YoLoLOl'), '* yololol *')

// assert.fail('You must write your own tests')
// End of tests */
