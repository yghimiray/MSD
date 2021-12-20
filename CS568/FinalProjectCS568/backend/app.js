
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const mongoConnect = require('./utils/dbConnect').mongoConnect;
const farmerRouter = require('./routes/farmerRouter')
const customerRouter = require('./routes/customerRouter')
const transactionRouter = require('./routes/transactionRouter')

const app = express();

app.use(cors());
app.use(express.json())

//routers call
app.use('/farmers',farmerRouter);
app.use('/customers',customerRouter)
app.use('/transactions',transactionRouter)

app.use(function(req, res, next){
    res.send("big error")
});

mongoConnect(() =>{
app.listen(4000, () => {
    console.log({status:'Server side app running'})
})
})

