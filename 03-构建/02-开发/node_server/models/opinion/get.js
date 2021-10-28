const { ObjectId } = require("mongodb");
const { OPINION_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(
    OPINION_COLLECTION
  );

exports.getAllOpinion = async function () {
  try {
    const _col = await getCollection();
    const result = await _col.find().toArray();
    return result;
  } catch (err) {
    throw "获取所有意见失败";
  }
};
