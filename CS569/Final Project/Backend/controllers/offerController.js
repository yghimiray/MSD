const offerCollection = require('../models/offer');
const ObjectId = require('mongodb').ObjectId



exports.addOffer = async (req, res, next) => {
    try {
        const offer = await offerCollection(req.body).save()
        res.status(200).json(offer);
    } catch (error) {
        next(error)
    }
}

exports.searchOfferById = async (req, res, next) => {
    try {
        const offer_id = new ObjectId(req.params.offer_id);
        res.status(200).json(await offerCollection.findOne({ _id: offer_id }))
    } catch (error) {
        next(error)
    }
}


// exports.updateoffer = async (req, res, next) => {
//     try {
//         const offer_id = new ObjectId(req.params.offer_id);
//         const content= req.body;
//         res.status(200).json(await offerCollection.updateOne({ _id: offer_id }, {
//              $set: {
//                 content,
//                 description,
//                 price
//              } }))
//     } catch (error) {
//         next(error)
//     }
// }


// exports.changeStatus = async (req, res, next) => {
//     try {
//         const offer_id = new ObjectId(req.params.offer_id);
//         // const {status} = req.body;
//         res.status(200).json(await offerCollection.updateOne({ _id: offer_id }, {
//              $set: {
//                 status:"Expired"
//              } }))
//     } catch (error) {
//         next(error)
//     }
// }

const statusExpire = async (id) => {
    try {
        await offerCollection.updateOne({ _id: id }, {
             $set: {
                status:"Expired"
             } })
    } catch (error) {
        throw new Error("Unsuccessful status change ")
    }
}



exports.searchOpenoffers = async (req, res, next) => {
    try {
        const offers = await offerCollection.find();
        const mappedOffers = offers.map(item=>{
            const timeDiff = Math.abs(new Date().getTime() -Number(item.postedTime));
            if(timeDiff>1000*60*60*48){
                const revisedItem = statusExpire(item._id)
                return revisedItem;
            }
            return item;
        })

        const openOffers = mappedOffers.filter(item=> item.status==="Open")
        openOffers.sort(function (a, b) {
            return new Date(b.postedTime) - new Date(a.postedTime);
          });
        res.status(200).json(openOffers)
    } catch (error) {
        next(error)
    }
}

exports.searchClosedoffers = async (req, res, next) => {
    try {
        const offers = await offerCollection.find();
        const closedOffers = offers.filter(item=> item.status!=="Open")
        closedOffers.sort(function (a, b) {
            return new Date(b.postedTime) - new Date(a.postedTime);
          });
        res.status(200).json(closedOffers)
    } catch (error) {
        next(error)
    }
}


exports.deleteoffer = async (req, res, next) => {
    try {
        const offer_id = new ObjectId(req.params.offer_id);
        res.status(200).json(await offerCollection.deleteOne({ _id: offer_id }))
    } catch (error) {
        next(error)
    }
}


exports.addComment = async (req, res, next) => {
    try {
        const offer_id = new ObjectId(req.params.offer_id);
        const comment = req.body;
        res.status(200).json(await offerCollection.updateOne({ _id: offer_id }, { $push: {comments:comment} }))
    } catch (error) {
        next(error)
    }

}
