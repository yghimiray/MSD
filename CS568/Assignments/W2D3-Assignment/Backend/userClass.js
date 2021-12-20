const { ObjectID } = require('mongodb').ObjectId;
const getDB = require('./mongoDb').getDB;
// let collection = getDB().collection('users')

module.exports = class User {
    constructor(_id, username, password, role) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.role = role
    }

    // collection =()=>{
    //     return getDB().collection('users');
    // }

    save() {
        return getDB().collection('users').insertOne(this);
    }

    static listAll() {
        return getDB().collection('users').find();
    }

    static searchById(_id) {
        return getDB().collection('users').findOne({ _id: _id });
    }


    update(_id) {
        return getDB().collection('users').updateOne({ _id: _id }, { $set: { username: this.username, password: this.password, role: this.role } });
    }

    static deleteById(_id) {
        return getDB().collection('users').deleteOne({ _id: _id });
    }

    login() {
        return getDB().collection('users').findOne({username: this.username, password : this.password });
    }

};