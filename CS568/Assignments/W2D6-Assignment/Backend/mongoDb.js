const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect =(callback)=>{
MongoClient.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(client=>{
    _db=client.db('cs568');
    callback();
})
.catch(error=>console.log(error));
}


const getDB=()=>{
if(_db){
    return _db;
}else{
    throw new Error("No Database Found !")
}
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;