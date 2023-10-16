'use strict'

primeFactors(13)
primeFactors(450)


/**
 * Idea is to print all numbers divisibe by 2, 3 then 5 and then 5+2
 * @param {number} n
 */
function primeFactors(n) {
    if (n <= 1) return false;
    //divide till it doesn't divide
    while (n % 2 == 0) {
        console.log(n / 2);
        n = n / 2;
    }
    while (n % 3 == 0) {
        console.log(n / 3);
        n = n / 3;
    }
    //again logic is same, divide by i & i+2
    for (let i = 5; i * i <= n; i = i + 6) {
        while (n % i == 0) {
            console.log(n / i);
            n = n / i;
        }
        while (n % (i+2) == 0) {
            console.log(n / (i+2));
            n = n /  (i+2);
        }
    }
    if(n>3) console.log(n)
}