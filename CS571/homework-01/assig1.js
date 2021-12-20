const http = require ('http');
const {fork} = require('child_process');
const server = http.createServer();



server.on('request',(req,res)=>{
    const num = Number(req.query.n)
    // const searchParams = new URLSearchParams(window.location.search)
    // const number = searchParams.get('n')
    console.log(req.url)
    const childProcess = fork('fibonacci.js');
    childProcess.send(num)
    childProcess.on('message',fibonacci=>{
        res.end(`Fibonacci is ${fibonacci}`)
    })
})


server.listen(3000, ()=> console.log("Running 3000"))