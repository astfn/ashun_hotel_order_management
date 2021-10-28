const { ObjectId } = require("mongodb");
const { ORDER_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(ORDER_COLLECTION);

const { getUserBaseInfo } = require("../user/get.js");
const { getRoomById } = require("../goods/get.js");

//工具函数，添加展示的数据
const addShowData = async (order) => {
  const { uid, goodsId } = order;
  const userInfo = await getUserBaseInfo(uid);
  const roomInfo = await getRoomById(goodsId);
  order.userInfo = userInfo;
  order.roomInfo = roomInfo;
  return order;
};

async function getOrderByGoods(goodsId) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ goodsId: ObjectId(goodsId) }).toArray();
    return result;
  } catch (err) {
    throw "根据商品id获取订单失败";
  }
}
exports.getOrderByGoods = getOrderByGoods;

exports.getOrderByUidAndGoodsId = async function (goodsId, uid) {
  try {
    const _col = await getCollection();
    const OrderFromGoodsId = await getOrderByGoods(goodsId);

    return OrderFromGoodsId.filter((v) => v.uid === uid);
  } catch (error) {
    throw "根据商品id、用户id获取订单失败";
  }
};

exports.getOneOrderById = async function (orderId) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ _id: ObjectId(orderId) }).toArray();
    let order = result[0];

    order = addShowData(order);

    return order;
  } catch (error) {
    throw "根据orderId获取订单失败";
  }
};

exports.getOrderByType = async function (type) {
  try {
    const _col = await getCollection();
    let result = await _col.find({ type }).toArray();

    for (let order of result) {
      order = await addShowData(order);
    }

    return result;
  } catch (error) {
    throw "根据 订单状态，获取订单失败";
  }
};

exports.getOrderByUidAndType = async function (uid, type) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ uid, type }).toArray();
    return result;
  } catch (error) {
    throw "根据用户id(phone)、订单状态，获取订单失败";
  }
};

exports.getOrderByAdminIdAndType = async function (adminId, type) {
  try {
    const _col = await getCollection();
    const result = await _col
      .find({ "adminInfo.phone": adminId, type })
      .toArray();
    return result;
  } catch (error) {
    throw "获取某管理员取消过的订单";
  }
};
