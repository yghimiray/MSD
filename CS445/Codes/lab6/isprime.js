"use strict";

async function checkPrime(num) {
        // setTimeout(() => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) {
                    throw new Error("It is not a prime number");
                } else {
                   return "It is a prime number";
                }
            }
        // }, 500); 
    }

    async function isPrime(num){
        try{
            let result = await checkPrime(num);
            console.log(result);
        }catch(e){
            console.log(e.message);
        }
    }


// isPrime(8);


console.log('start');
isPrime(8);
console.log('end');