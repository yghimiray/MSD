"use strict";

Array.prototype.removeDuplicates = function() {
   return new Promise((resolve,reject) => {
       resolve([...new Set(this)]) 
    }).then(console.log);
}



console.log("start");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates(); 
console.log("end");