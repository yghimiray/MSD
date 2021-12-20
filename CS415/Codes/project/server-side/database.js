const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(client=>{
        _db=client.db('cityLibrary-db');
        callback();
    })
    .catch(err => console.log(err));
};




const getDB = ()=> {
    if(_db){
        return _db;
    }
    throw new Error("No Database Found !")
};



exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

