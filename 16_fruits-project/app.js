const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const dbName = 'fruitsDB';

const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect((err) => {
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    insertDocuments(db, function() {
        client.close();
    })
});

const insertDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('fruits');

    // Insert some documents
    collection.insertMany([
        {
            name: 'Apple',
            score: 8,
            review: 'Great fruit',
        },
        {
            name: 'Orange',
            score: 6,
            review: 'Kinda sour',
        },
        {
            name: 'Banana',
            score: 9,
            review: 'Great stuff!',
        },
    ], (err, result) => {
        console.log('Inserted 3 documents into the collection');
        callback(result);
    });
}