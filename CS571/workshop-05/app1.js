const express = require('express');
const path = require('path');
const userRouter = require('./userRoute')
const cors = require('cors');
const mongoConnect = require('./database').mongoConnect

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

mongoConnect(()=>{
  app.listen(3000, ()=>console.log("Running 3000"))
})
