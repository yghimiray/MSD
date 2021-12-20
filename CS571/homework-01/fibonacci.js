
let result = {}

function fibonacci(n){
    
    if(n<=1){
        return n;
    }
    if (n in result){
        return result[n]
    }else{
        result[n]=fibonacci(n-1)+fibonacci(n-2)
    }
    return result[n]
}

process.on('message', (msg)=>{
    const fibResult= fibonacci(msg);
    process.send(fibResult)
})

// console.log(fibonacci(1000))