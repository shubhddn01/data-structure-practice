'use strict'

const test1= lcm(4,6)
const test2= lcm(12,15)
console.log(test1) //12
console.log(test2) //60


/**
 * (a*b )/ gcd(a,b)
 * 
 */

function lcm(a,b){
    return (a*b) / gcd(a,b);
}

function gcd(a,b){
   if(b===0) return a;
   return gcd(b,a%b)
}