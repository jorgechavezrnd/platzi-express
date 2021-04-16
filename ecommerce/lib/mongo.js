const { MongoClient, ObjectId } = require('mongodb');
const debug = require('debug')('app:mongo');
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
        debug('Connected successfully to mongo');
        MongoLib.connection = this.client.db(this.dbName);
      } catch (error) {
        console.error(error);
      }
    }

    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect()
    .then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }

  get(collection, id) {
    return this.connect()
    .then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  create(collection, data) {
    return this.connect()
    .then(db => {
      return db.collection(collection).insertOne(data)
    })
    .then(result => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
    .then(db => {
      return db
        .collection(collection)
        .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    })
    .then(result => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect()
    .then(db => {
      return db
        .collection(collection)
        .deleteOne({ _id: ObjectId(id) });
    })
    .then(() => id);
  }
}

module.exports = MongoLib;
