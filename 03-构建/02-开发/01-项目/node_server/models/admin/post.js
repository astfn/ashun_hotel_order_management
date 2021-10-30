const { ObjectId } = require("mongodb");

const { ADMIN_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(ADMIN_COLLECTION);

exports.addAdmin = async function (adminInfo) {
  try {
    const _col = await postCollection();
    const result = await _col.insertOne(adminInfo);
    return result;
  } catch (error) {
    throw "添加管理员出错";
  }
};
