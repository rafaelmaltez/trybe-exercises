const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';

let schema = null;

async function connection() {
  if (schema) return Promise.resolve(schema);

  return MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db('model_example'))
    .then((dbschema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = connection;