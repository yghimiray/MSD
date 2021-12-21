var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
 
var usersRouter = require('./routes/users');
const productsRouter =require('./routes/products')
const uaaRouter = require('./routes/uaa');


var app = express();

 
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 
 
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/users',uaaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.json(err)
});

 app.listen(1234);
