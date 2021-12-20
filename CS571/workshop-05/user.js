const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:String, required:true},
    location:{type:Object},
    prev_location:[]
})

module.exports = mongoose.model('user',userSchema)