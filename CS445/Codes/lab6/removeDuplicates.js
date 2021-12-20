"use strict";

async function makeSet(arr) {
   if(arr.length === 0){
       throw new Error("The array is empty.");
   }else{
       return [...new Set(arr)];
   }
}

Array.prototype.removeDuplicates = async function () {
    try{
        let result = await makeSet(this);
        console.log(result);
    }catch(e){
        console.log(e.message);
    }
}



console.log("start");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates(); 
console.log("end");