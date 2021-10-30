const { ObjectId } = require("mongodb");
const { NOTICE_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(NOTICE_COLLECTION);

exports.getNoticeByType = async function (type) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ type }).toArray();
    return result;
  } catch (err) {
    throw "根据是否发布，获取公告失败";
  }
};

exports.getNoticeByAdminIDAndType = async function (adminId, type) {
  try {
    const _col = await getCollection();
    console.log(adminId, type);
    const result = await _col
      .find({ "adminInfo.phone": adminId, type })
      .toArray();
    return result;
  } catch (err) {
    throw "根据adminId以及是否发布，获取公告失败";
  }
};
