'use strict'

const test1= gcd(4,6)
const test2= gcd(20,100)
console.log(test1) //2
console.log(test2) //20


/**
 * As per euclidean 
 * return till when b is 0, while swaping the input 
 */
function gcd(a,b){
   if(b===0) return a;
   return gcd(b,a%b)
}