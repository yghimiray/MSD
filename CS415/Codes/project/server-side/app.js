const express = require('express');
const cors = require('cors');
const mongoConnect = require('./database').mongoConnect;
const router = require('./router');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/books',router);


// app.use((req, res, next) => {
//     res.status(404).json({ error: req.url + ' API not supported!' });
// });

// app.use((err, req, res, next) => {
//     console.log(err);
//     if (err.message === 'NOT Found') {
//         res.status(404).json({ error: err.message });
//     } else {
//         res.status(500).json({ error: 'Something is wrong! Try later' });
//     }
// });




mongoConnect(()=>{
    app.listen(6500,()=>console.log("running 6500........"));
});