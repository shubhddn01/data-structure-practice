'use strict'

let test1= countDigits(9235)
console.log(test1)
//4
let test2= countDigits(38)
console.log(test2)
//2


function countDigits(n){
    let res=0;
    while(n>0){
        n = Math.floor(n/10);
        res++
    }
    return res;
}