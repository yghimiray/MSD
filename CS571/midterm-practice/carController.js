const carCollection = require('./car')

exports.save = async(req,res,next)=>{
    try{
        const car = await carCollection(req.body).save();
        res.json(car)
    }catch(error){
        next(error)
    }
}


exports.searchById = async (req, res, next) => {
    try {
        const id = req.params.id;
        res.json(await customerCollection.findOne({ _id: id }))
    } catch (error) {
        next(error)
    }
}


exports.update = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const reservation_id = req.params.reservation_id
        const car = await carCollection.updateOne({
            _id:id,
            "rental_details.reservation_id":reservation_id 
        },
        {
            $set:{
                "rental_details.$.number_of_days":req.body.number_of_days,
                "rental_details.$.end_mileage":req.body.end_mileage
            }})
        res.json(car)
    }catch(error){
        next(error)
    }
}


exports.delete = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const reservation_id = req.params.reservation_id
        const car = await carCollection.updateOne()
        res.json(car)
    }catch(error){
        next(error)
    }
}