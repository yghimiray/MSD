// var createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoConnect = require('./mongoDb').mongoConnect
const cors = require('cors');
const postRouter = require('./routes/postRouter')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/posts',postRouter)





// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


mongoConnect(()=>{
  app.listen(1234,()=>console.log("running 1234....."))
})