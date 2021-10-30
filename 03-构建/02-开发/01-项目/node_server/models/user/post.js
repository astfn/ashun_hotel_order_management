const { ObjectId } = require("mongodb");

const { USER_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(USER_COLLECTION);
const { getUser } = require("./get.js");

exports.addUser = async function (user) {
  try {
    const _col = await postCollection();
    const result = await _col.insertOne(user);
    return result;
  } catch (error) {
    throw "添加用户出错";
  }
};

exports.updateUserMoney = async function (phone, money) {
  try {
    const _col = await postCollection();

    const user = await getUser(phone);
    const newMoney = user && user.accountInfo.money + money;
    const result = await _col.findOneAndUpdate(
      { phone: phone },
      { $set: { "accountInfo.money": newMoney } },
      {
        returnOriginal: false,
      }
    );
    const newUser = await getUser(phone);
    return newUser;
  } catch (error) {
    throw error;
    // throw "更改用户money出错";
  }
};

exports.deleteUser = async function (id) {
  try {
    const _col = await postCollection();
    const result = await _col.deleteOne({ _id: ObjectId(id) });
    return result;
  } catch (error) {
    throw "删除用户失败";
  }
};
