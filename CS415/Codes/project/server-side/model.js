const { ObjectID } = require('mongodb');
const getDB = require('./database').getDB;

module.exports = class Book{
constructor(_id,ISBN,title,overdue_fee,publisher,datePublished){
    this._id = _id;
    this.title=title;
    this.ISBN=ISBN;
    this.overdue_fee=overdue_fee;
    this.publisher=publisher;
    this.datePublished=datePublished;
}
save(){
    return getDB().collection('books').insertOne(this);
}

static listAll(){
    return getDB().collection('books').find();
}

static searchById(bookId) {
    return getDB().collection('books').findOne({ _id: bookId});
}

static searchByIndex(searchText){
    return getDB().collection('books').find({$text:{$search:searchText}});
}

update(){
    return getDB().collection('books').updateOne({_id:this._id},{$set:{ISBN:this.ISBN, title:this.title, overdue_fee:this.overdue_fee,publisher:this.publisher,datePublished:this.datePublished}});
}

static deleteById(bookId) {
    return getDb().collection('books').deleteOne({ _id: bookId });
}


};