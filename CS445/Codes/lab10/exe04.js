
function fibonacci1(n) {
    if (n < 1) {
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

function fibonacci(num){
    let object = {};
    let value;
    function fibonacciHelper(num){
        if(object[num]){
            value = object[num];
        }else if (num === 0 || num === 1){
            value = num ;
            object[num] = value;
        }else {
            value = fibonacciHelper(num - 1) + fibonacciHelper(num - 2);
            object[num] = value;
        }
        return value;
    }
    return fibonacciHelper(num);
}
//0,1,1,2,3,5,8,13,21,34,55,89
console.log(fibonacci(40));
// console.log(fibonacci1(40));

