const  express = require('express');
const  path = require('path');
const {fork} = require('child_process');
const fibonacci = require('../fibonacci')

const  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/fib', (req,res,next)=>{
  const num = req.query.n
  console.log(num)
  const childProcess = fork('../fibonacci.js');
    childProcess.send(num)
    childProcess.on('message',fibonacci=>{
        res.end(`Fibonacci is ${fibonacci}`)
    })
})




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(3000,()=> console.log("Running 3000........."))
