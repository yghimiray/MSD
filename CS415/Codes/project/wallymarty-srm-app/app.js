const MongoClient = require('mongodb').MongoClient;

let conn = null;
const manySuppliers = [{"suppNo": "S101","suppName": "United Organic Farms LLC", "phNo": "(319) 123-1322","prodId": "P0716", "prodName": "Organic Bananas", "unit-price": 1.25, "quantity": 480},
{"suppNo": "S105","suppName": "Valley View Bakeries LLC"},
{"suppNo": "S102","suppName": "Eggland Poultry Farms of Des Moines", "phNo": "(319) 001-1234","prodId": "P1204", "prodName": "Eggland's Best Eggs-Jumbo/GradeA", "unit-price": 1.09, "quantity": 525},
{"suppNo": "S103","suppName": "El Segundo Agro Products", "phNo": "(641) 000-0001","prodId": "P1205", "prodName": "Avocados-medium/Green", "unit-price": 2.49, "quantity": 164},
{"suppNo": "S102","suppName": "Eggland Poultry Farms of Des Moines", "phNo": "(319) 001-1234","prodId": "P0818", "prodName": "Eggland's Best Eggs-Large/GradeA", "unit-price": 4.99, "quantity": 120},
{"suppNo": "S104","suppName": "Midwestern Farms, LLC", "phNo": "(641) 123-4567"},
{"suppNo": "S106","suppName": "Boulangerie Robuchon", "prodId": "P3372", "prodName": "Brioche", "unit-price": 1.89, "quantity": 96}]

async function main() {
    conn = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('Connected......');
    const db = conn.db('wallymarty-db');
    const collection = db.collection('suppliers');
    addManySuppliers(collection,manySuppliers);
    const suppliers = await getSuppliers(collection);
    suppliers.forEach(supplier => console.log(supplier));
    return "Operation Completed";
};


const getSuppliers = async function (collection) {
    return await collection.find({}).toArray();
};

const addNewSupplier = async function (collection, newSupplier) {
    return await collection.insertOne(newSupplier);
};



const addManySuppliers = async function (collection, manySuppliers) {
    return await collection.insertMany(manySuppliers);
};





main()
    .then(console.log)
    .catch(console.error)
    .finally(() => { if (!conn) conn.close(); })