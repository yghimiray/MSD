const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    // _id:{type:String, required:true},
    content:{type:String, required:true},
    description:{type:String, required:true},
    longitude:{type:String}, // find from Geolocation
    latitude:{type:String},  // find from Geolocation
    postedTime:{type:Date, required:true},  // new Date()
    price:{type:String},
    status:{type:String, required:true},  //pending/accepted/fulfilled/expired
    comments:[{comment:{type:String},user:{type:Object}}], // the logged user who adds the comment
    requestingMember:{type:Object}, // the logged user who adds the post  
    EngagedMember:{type:Object},  // the logged user who starts working with the requested service  
})




module.exports=mongoose.model('request',requestSchema)