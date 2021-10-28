const { ObjectId } = require("mongodb");

const { NOTICE_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(NOTICE_COLLECTION);

exports.addNotice = async function (adminInfo, content) {
  try {
    const _col = await postCollection();
    const intoTime = new Date().getTime();
    const result = await _col.insertOne({
      type: "success",
      intoTime,
      adminInfo,
      content,
    });
    return result;
  } catch (error) {
    throw "添加公告出错";
  }
};

exports.cancelNotice = async function (noticeId, adminInfo) {
  try {
    const _col = await postCollection();
    const cancelTime = new Date().getTime();
    const result = await _col.findOneAndUpdate(
      { _id: ObjectId(noticeId) },
      { $set: { type: "cancel", adminInfo, cancelTime } },
      {
        returnOriginal: false,
      }
    );
    return result.value;
  } catch (error) {
    throw "撤销某公告出错";
  }
};
