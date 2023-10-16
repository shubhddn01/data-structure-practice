'use strict'

printDiv(13)
console.log("\n")
printDiv(15)



function printDiv(n){
    let i;
    //print all the number which divisible
    for(i=1;i*i<n;i++){
        if(n%i===0) console.log(i);
    }
    //again print, 
    //this will print in ascending
    for(;i>=1;i--){
        if(n%i===0) console.log(n/i);
    }
}