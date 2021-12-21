var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors')

var usersRouter = require('./routes/users');
const movieRouter = require('./routes/movie')


// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient('mongodb+srv://umur:123@cluster0.of3d2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// , { useUnifiedTopology: true });
// let connection;


var app = express();

// app.use( (req, res, next) => {
//   if (!connection) {  
//     client.connect(function (err) {
//       connection = client.db('movieapp'); 
//       req.db = connection; 
//       next();
//     })
//   } else {
//     req.db = connection;
//     next();
//   }
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/users', usersRouter);
app.use('/movies', movieRouter);


 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.json(err)
});

app.listen(1234);

