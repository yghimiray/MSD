const mongoose =require ('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    _id:{type:String, required:true},
    name:{type:String,required:true},
    code:{type:String,required:true},
    students:[{
        student_id: {type:String},
        fullname:{type:String}
    }]
})




module.exports=mongoose.model('course',courseSchema)