'use strict'

let test1 = cntZero(10)
console.log(test1) //
let test2 = cntZero(251)
console.log(test2)

/**
 * task is to count the last zero in factorial answer
 * Tip : do not calculate factorial
 * if we see from 1 to 20, whenver multiple of 5 present, check no. 5 factors
 * @param {*} n 
 */

function cntZero(n) {
    let res = 0;
    for (let i = 5; i <= n; i*=5) {
        res += Math.floor(n/i) 
    }
    return res;
}