const mongoose =require ('mongoose');
const Schema = mongoose.Schema;


const carSchema = new Schema ({
    _id:{type:String, required:true},
    brand:{type:String,required:true},
    type:{type:String, required:true},
    year:{type:String, required:true},
    status:{type:Number, required:true},
    rate_per_day:{type:Number, required:true},
    rental_details:[{type:{
        driver_name:{type:String},
        reservation_id:{type:String},
        driving_license:{type:String},
        start_mileage:{type:Number},
        end_mileage:{type:Number},
        number_of_days:{type:Number},
        total_rent:{type:Number},
    }}],
         
})

module.exports = mongoose.model('car',carSchema)

