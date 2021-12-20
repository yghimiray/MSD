const { ObjectID } = require('mongodb').ObjectId;
// const { ObjectID } = require('mongodb');
const getDB = require('./mongoDb').getDB;

module.exports = class Movie {
    constructor(_id, name, rating, genre,id) {
        this._id = _id;
        this.name = name;
        this.rating = rating;
        this.genre = genre
        this.id=id
    }

    save() {
        return getDB().collection('movies').insertOne(this);
    }

    static listAll() {
        return getDB().collection('movies').find();
    }

    static searchById(id) {
        return getDB().collection('movies').findOne({id:id});
    }


    update(id) {
        return getDB().collection('movies').updateOne({ id:id }, { $set: { name: this.name, rating: this.rating, genre: this.genre } });
    }

    static deleteById(id) {
        return getDB().collection('movies').deleteOne({ id:id });
    }

};