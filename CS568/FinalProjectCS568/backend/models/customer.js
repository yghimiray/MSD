const mongoose =require ('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    _id:{type:String, required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true,index: { unique: true }},
    password:{type:String,required:true},
    active:{type:Boolean},
    cart:[{type:Object}],
    order:[{type:Object}],
    history:[{type:Object}]
})




module.exports=mongoose.model('customer',customerSchema)