'use strict'

const test1= isPrime(13)
const test2= isPrime(14)
console.log(test1) //true
console.log(test2) //false


/**
 * Idea is to eliminate all the number divisible bt 2 & 3, so number remaining wil be
 * 5,7,11,13,17,19,23
 * so we can move from 5 with difference ,
 * CHECK for i & i+2 divisbility
 * @param {number} n
 */
function isPrime(n){
  if(n===1) return false;
  if(n===2 || n===3) return true;
  if(n%2===0 || n%3===0) return false;
  for(let i=5;i*i<=n;i=i+6){
    if(n%i===0 || n%(i+2)===0) return false;
  }
  return true;
}