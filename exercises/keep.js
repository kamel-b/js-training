'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst =(str)=>{
  //   let result =""
  //   for(let i =0; i<= 1; i++){
  //     result = result + str[i]
  //   }
  //   return result
      return str.slice(0,2)
   }
  
  const keepLast = (str) => {
    return str.slice(str.length - str.length -2)
  }
  
  const keepFirstLast = (str) => {
    const res = str.slice(3)
    return res.slice(0,2)
  }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('kamel'), 'ka')
assert.deepStrictEqual(keepLast('bateaux'), 'ux')
assert.deepStrictEqual(keepFirstLast('papillon'),'il')



// assert.fail('You must write your own tests')
// End of tests */
