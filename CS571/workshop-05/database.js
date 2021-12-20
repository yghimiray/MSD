const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017';

const mongoConnect = (callback)=>{
    mongoose.connect(dbUrl,{
        useNewUrlparser:true,
        useUnifiedTopology:true,
        dbName :'cs571'
    })
    .then(client=>{
        console.log({status:"Connected....."})
        callback();
    })
    .catch(error=>{
        handleError(error)
    })
}

exports.mongoConnect=mongoConnect;