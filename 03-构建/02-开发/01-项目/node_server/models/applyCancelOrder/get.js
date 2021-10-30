const { ObjectId } = require("mongodb");
const { APPLY_CANCEL_ORIDER_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(
    APPLY_CANCEL_ORIDER_COLLECTION
  );

exports.getApplyByOrderId = async function (orderId) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ orderId }).toArray();
    return result[0];
  } catch (err) {
    throw "根据orderId获取 取消订单申请 失败";
  }
};
