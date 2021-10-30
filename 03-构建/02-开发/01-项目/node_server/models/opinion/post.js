const { ObjectId } = require("mongodb");

const { OPINION_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(
    OPINION_COLLECTION
  );

exports.addOpinion = async function (opinionData) {
  try {
    const { userInfo, content } = opinionData;
    const _col = await postCollection();
    const time = new Date().getTime();
    const result = await _col.insertOne({ userInfo, time, content });
    return result;
  } catch (error) {
    throw error;
  }
};
exports.deleteOpinion = async function (opinionId) {
  try {
    const _col = await postCollection();
    const result = await _col.deleteOne({
      _id: ObjectId(opinionId),
    });
    return result;
  } catch (error) {
    throw "删除意见失败";
  }
};
