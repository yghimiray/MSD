"use strict";

function isPrime(num) {
    let promise = new Promise(function (resolve, reject) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i !== 0) {
                setTimeout(() => resolve("true"), 500);
            } else {
                setTimeout(() => reject("false"), 500);
            }
        }
    })

    // promise.then(result => console.log(result))
    //     .catch(result => console.log(result));

    return promise;
}



// isPrime(8);


console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');