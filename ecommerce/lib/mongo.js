const { MongoClient } = require('mongodb')
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}`; // prettier-ignore

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  async connect() {
    if (!MongoLib.connection) {
      try {
        await this.client.connect()
        console.log('Connected successfully to mongo');
        MongoLib.connection = this.client.db(this.dbName);
      } catch (error) {
        console.error(error);
      }
    }

    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }
}

module.exports = MongoLib;
