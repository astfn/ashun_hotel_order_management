const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const dbName = "ashunHotel";

let _db = null;

const connectDb = async function () {
  if (!_db) {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
      await client.connect();
      _db = client.db(dbName);
    } catch (err) {
      throw "连接数据库出错";
    }
  }
  return _db;
};

exports.getCollection = (collectionName) => {
  let _col = null;
  return async function () {
    if (!_col) {
      try {
        let _db = await connectDb();
        _col = _db.collection(collectionName);
      } catch (error) {
        throw "选择 collection 出错";
        throw error;
      }
    }
    return _col;
  };
};
