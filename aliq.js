const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db;

const connectMongoDB = async () => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log('Connected successfully to MongoDB server');
  db = client.db(dbName);
};

const getDb = () => {
  if (!db) {
    throw new Error('Call connectMongoDB first!');
  }
  return db;
};

module.exports = { connectMongoDB, getDb };
