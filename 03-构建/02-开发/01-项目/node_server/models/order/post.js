const { ObjectId } = require("mongodb");

const { ORDER_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(ORDER_COLLECTION);

const { getOneOrderById } = require("./get.js");
const { getRoomById } = require("../goods/get.js");

const { changeGoodsSum } = require("../goods/post.js");
const { updateUserMoney } = require("../user/post.js");

exports.addOrder = async function (orderData) {
  try {
    console.log(orderData);
    const _col = await postCollection();
    const buyTime = new Date().getTime();
    const adminInfo = { nickName: "系统" };
    const result = await _col.insertOne({
      type: "success",
      buyTime,
      adminInfo,
      ...orderData,
    });
    return result;
  } catch (error) {
    throw "添加订单出错";
  }
};

//供applyCancelOrder使用，让该订单变为pending状态,并压入相关数据
exports.pendingOrder = async function (orderId, applyInfo) {
  try {
    const { applyTime, applyReason } = applyInfo;
    const _col = await postCollection();
    const result = await _col.findOneAndUpdate(
      { _id: ObjectId(orderId) },
      { $set: { type: "pending", applyTime, applyReason } },
      {
        returnOriginal: false,
      }
    );
    return result.value;
  } catch (error) {
    throw "让某订单为pending状态，出错";
  }
};

exports.cancelOrder = async function (cancelData) {
  try {
    const { orderId, adminInfo, reason } = cancelData;
    console.log(adminInfo);
    const _col = await postCollection();
    const cancelTime = new Date().getTime();
    const result = await _col.findOneAndUpdate(
      { _id: ObjectId(orderId) },
      { $set: { type: "cancel", adminInfo, reason, cancelTime } },
      {
        returnOriginal: false,
      }
    );

    const newOrder = result.value;
    const { uid, goodsId, buySum } = newOrder;

    /* 订单取消后的数据恢复 */
    //获取数据
    const goodsInfo = await getRoomById(goodsId);
    const { price } = goodsInfo.info;
    const money = buySum * price;
    //修改数据
    await updateUserMoney(uid, money);
    await changeGoodsSum(goodsId, buySum);

    return newOrder;
  } catch (error) {
    throw "取消某订单出错";
  }
};
