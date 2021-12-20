const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb://localhost:27017',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(client=>{
        database=client.db('cs568');
        callback();
    })
    .catch(err=>console.log(err))
}


const getDB=()=>{
    if(database){
        return database
    }else{
        throw new Error("No database found !")
    }
}


exports.mongoConnect=mongoConnect;
exports.getDB=getDB;

