const express = require('express');
const path = require('path');
const cors = require('cors')
const productRouter = require('./routes/productRouter')
const mongoConnect =require('./mongoDB').mongoConnect


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/products',productRouter)






// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});

// module.exports = app;
mongoConnect(()=>{
  app.listen(1234,()=>console.log("running 1234"));
})