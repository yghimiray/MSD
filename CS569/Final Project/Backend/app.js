const express = require('express');
const cors = require('cors');
const mongoConnect = require('./dbConnect').mongoConnect;

const userRouter = require('./routers/userRouter')
const offerRouter = require('./routers/offerRouter')
const requestRouter = require('./routers/requestRouter')


const app = express();

app.use(cors());
app.use(express.json())

app.use('/users',userRouter);
app.use('/offers', offerRouter)
app.use('/requests', requestRouter)

// app.use((req, res, next) => {
//     res.status(404).json({ error: req.url + ' API not supported!' });
// });

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});


mongoConnect(() =>{
app.listen(3000, () => {
    console.log({status:'Server side app running'})
})
})

