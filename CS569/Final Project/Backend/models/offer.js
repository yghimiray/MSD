const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    // _id:{type:String, required:true},
    content:{type:String, required:true},
    description:{type:String, required:true},
    longitude:{type:String}, // find from Geolocation
    latitude:{type:String},  // find from Geolocation
    postedTime:{type:Date, required:true},  // new Date()
    status:{type:String, required:true}, 
    price:{type:String, required:true},
    comments:[{comment:{type:String},user:{type:Object}}], // the logged user who adds the comment
    offeringMember:{type:Object} // the logged user who adds the post    
})




module.exports=mongoose.model('offer',offerSchema)