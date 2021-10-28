const { ObjectId } = require("mongodb");

const { APPLY_CANCEL_ORIDER_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(
    APPLY_CANCEL_ORIDER_COLLECTION
  );

const { pendingOrder } = require("../order/post.js");

exports.addApplyCancel = async function (applyCancelData) {
  try {
    console.log(applyCancelData);
    const { orderId, reason } = applyCancelData;

    const _col = await postCollection();
    const time = new Date().getTime();
    const result = await _col.insertOne({ time, orderId, reason });
    await pendingOrder(orderId);
    return result;
  } catch (error) {
    throw "添加 取消订单申请 失败";
  }
};

exports.deleteApplyByOrderId = async function (orderId) {
  try {
    const _col = await postCollection();
    const result = await _col.deleteOne({ orderId });
    return result;
  } catch (error) {
    throw "删除 取消订单申请 失败";
  }
};
