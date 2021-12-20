const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:String, required:true},
    location:{
        zipcode:{type:String},
        city:{type:String},
        state:{type:String}
    },
    logs:[{timeStamp:Number, city: String, state: String}]
})

module.exports = mongoose.model('user',userSchema)