'use strict'

const test1= palindrome(78987)
const test2= palindrome(21)
console.log(test1) //true
console.log(test2) //false



function palindrome(n){
    let rev=0, temp=n;
    while(temp>0){
        rev = rev*10+(temp%10)
        temp = Math.floor(temp/10);        
    }
    return rev === n;
}