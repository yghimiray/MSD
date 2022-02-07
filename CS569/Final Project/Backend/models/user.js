const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id:{type:String, required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    address:{
        street:{type:String,required:true},
        apt:{type:String},
        city:{type:String,required:true},
        state:{type:String,required:true},
        zip:{type:String,required:true},
    },
    
})




module.exports=mongoose.model('user',userSchema)