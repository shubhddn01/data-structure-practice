'use strict'

primeTillN(10)
console.log("\n")
primeTillN(15)


/**
 * Use sieve of erathosthenes
 * take blank array till n+1
 * ignore 0 and 1 index
 * fill whole array true
 * mark false which are not prime
 * @param {number} n 
 */
function primeTillN(n){
    let isPrime = new Array(n+1).fill(true);
    for(let i=2;i<=n;i++){
        if(isPrime[i]){
            //when this number is prime, then its multiple will be not a prime
            console.log(i);
            
            for(let j=i*i;j<=n;j=j+i){
                isPrime[j]=false;
            }
        }
    }

    return
}
