const mongoose =require ('mongoose');
const dbUrl = 'mongodb://localhost:27017';

const mongoConnect = (callback)=>{
    mongoose.connect(dbUrl,{
        useNewUrlparser:true,
        useUnifiedTopology:true,
        dbName :'CS569'
    })
    .then((client)=>{
        console.log({status:"Connected....."})
        callback();
    })
    .catch((error)=>{
        console.log(error)
    })
}

exports.mongoConnect=mongoConnect;
