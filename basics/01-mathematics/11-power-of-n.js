'use strict'

console.log(myPow(2,3))
console.log("\n")
console.log(myPow(3,4))



function myPow(a,n){
   if(n===0) return 1;
   let temp =myPow(a,Math.floor(n/2));
   temp*=temp;
   if(n%2===0) return temp;
   return temp*a;
}