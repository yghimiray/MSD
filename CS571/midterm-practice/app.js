const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
let db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('midterm');
            req.db = db.collection('cars');
            next();
        });
    } else {
        req.db = db.collection('cars');
        next();
    }
})

// Your code here
const carRouter = require('./carRouter')

app.use('/cars',carRouter)


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});
app.listen(3000, () => console.log('listening to 3000'));
