'use strict'

const test1= factorial(4)
const test2= factorialRec(6)
console.log(test1) //24
console.log(test2) //720



function factorial(n){
    let res=1;
    for(let i=2;i<=n;i++){
        res*=i;
    }
    return res
}

/**
 * reursively
 * @param {number} n 
 */
function factorialRec(n){
    if(n===1) return 1;
    return n*factorialRec(n-1);
}