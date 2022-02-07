const requestCollection = require('../models/request');
const ObjectId = require('mongodb').ObjectId

exports.addrequest = async (req, res, next) => {
    try {
        const request = await requestCollection(req.body).save()
        res.status(200).json(request);
    } catch (error) {
        next(error)
    }
}

exports.searchrequestById = async (req, res, next) => {
    try {
        const request_id = new ObjectId(req.params.request_id);
        res.status(200).json(await requestCollection.findOne({ _id: request_id }))
    } catch (error) {
        next(error)
    }
}


exports.updaterequest = async (req, res, next) => {
    try {
        const request_id = new ObjectId(req.params.request_id);
        const {content, description} = req.body;
        res.status(200).json(await requestCollection.updateOne({ _id: request_id }, {
             $set: {
                content,
                description
             } }))
    } catch (error) {
        next(error)
    }
}


exports.changeStatus = async (req, res, next) => {
    try {
        const request_id = new ObjectId(req.params.request_id);
        const {status, price, EngagedMember} = req.body;
        res.status(200).json(await requestCollection.updateOne({ _id: request_id }, {
             $set: {
                status,
                price,
                EngagedMember
             } }))
    } catch (error) {
        next(error)
    }
}

const statusExpire = async (id) => {
    try {
        await requestCollection.updateOne({ _id: id }, {
             $set: {
                status:"Expired",
                price:"Not Applicable",
                EngagedMember:"None"
             } })
    } catch (error) {
        throw new Error("Unsuccessful status change ")
    }
}

exports.searchOpenRequests = async (req, res, next) => {
    try {
        const requests = await requestCollection.find();
        const mappedRequests = requests.map(item=>{
            const timeDiff = Math.abs(new Date().getTime() -Number(item.postedTime));
            if(timeDiff>1000*60*60*48 && item.status === "Pending"){
                const revisedItem = statusExpire(item._id)
                return revisedItem;
            }
            return item;
        })

        const openRequests = mappedRequests.filter(item=> item.status==="Pending")
        openRequests.sort(function (a, b) {
            return new Date(b.postedTime) - new Date(a.postedTime);
          });
        res.status(200).json(openRequests)
    } catch (error) {
        next(error)
    }
}

exports.searchClosedRequests = async (req, res, next) => {
    try {
        const requests = await requestCollection.find();
        const closedRequests = requests.filter(item=> item.status!=="Pending")
        closedRequests.sort(function (a, b) {
            return new Date(b.postedTime) - new Date(a.postedTime);
          });
        res.status(200).json(closedRequests)
    } catch (error) {
        next(error)
    }
}


exports.deleterequest = async (req, res, next) => {
    try {
        const request_id = new ObjectId(req.params.request_id);
        res.status(200).json(await requestCollection.deleteOne({ _id: request_id }))
    } catch (error) {
        next(error)
    }
}


exports.addComment = async (req, res, next) => {
    try {
        const request_id = new ObjectId(req.params.request_id);
        const comment = req.body;
        res.status(200).json(await requestCollection.updateOne({ _id: request_id }, { 
            $push: {comments:comment} }))
    } catch (error) {
        next(error)
    }

}
