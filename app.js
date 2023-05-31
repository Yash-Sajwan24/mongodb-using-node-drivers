const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'practice';

async function connectToMongoDB() {
    try {
      const client = await MongoClient.connect(url);
      
      const db = client.db(dbName);

      const collection = db.collection('fruits');
      // return db.collection('fruits');
      const document = { name: 'gucci', age: 30 };

      await collection.insertOne(document);
      console.log(`Inserted 1 entry document(s)`);    

      client.close();

    } catch (error) {
      console.error('Error:', error);
    }
  }

connectToMongoDB();

module.exports = connectToMongoDB;
  