
const express = require('express');
const cors = require('cors');
const courseRouter = require('../backend/courseRouter')
const mongoConnect = require('../backend/dbConnect').mongoConnect;

const app = express();

app.use(cors());
app.use(express.json())

app.use('/courses',courseRouter);

// app.use(function(req, res, next){
//     res.send("big error")
// });

mongoConnect(() =>{
app.listen(3000, () => {
    console.log({status:'Server side app running'})
})
})

