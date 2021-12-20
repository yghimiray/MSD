const { ObjectID } = require('mongodb').ObjectId;
const getDB = require('./mongoDb').getDB;


module.exports = class Post {
    constructor(_id, PID, head, description) {
        this._id = _id;
        this.PID = PID;
        this.head = head;
        this.description = description
    }

    save() {
        return getDB().collection('posts').insertOne(this);
    }

    static listAll() {
        return getDB().collection('posts').find();
    }

    static searchByPID(PID) {
        return getDB().collection('posts').findOne({ PID: PID });
    }

}
