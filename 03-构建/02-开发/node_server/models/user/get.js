const { USER_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(USER_COLLECTION);

exports.getUser = async function (phone) {
  const { getOrderByUidAndType } = require("../order/get.js");

  try {
    const _col = await getCollection();
    const result = await _col.find({ phone }).toArray();
    const user = result[0];
    if (!user) return user;

    let { accountInfo } = user;
    const successOrderList = await getOrderByUidAndType(user.phone, "success");
    const cancelOrderList = await getOrderByUidAndType(user.phone, "cancel");
    const pendingOrderList = await getOrderByUidAndType(user.phone, "pending");
    accountInfo["successOrderList"] = successOrderList;
    accountInfo["cancelOrderList"] = cancelOrderList;
    accountInfo["pendingOrderList"] = pendingOrderList;

    const userData = { ...user, accountInfo };
    return userData;
  } catch (err) {
    throw "获取用户失败";
  }
};

exports.getUserBaseInfo = async function (phone) {
  const _col = await getCollection();
  const result = await _col.find({ phone }).toArray();
  const user = result[0];

  const showUser = { nickName: user.nickName, phone: user.phone };

  return showUser;
};
