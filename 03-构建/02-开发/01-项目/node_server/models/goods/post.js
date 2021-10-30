const { ObjectId } = require("mongodb");

const { GOODS_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(GOODS_COLLECTION);

const { getRoomById } = require("./get.js");

exports.changeGoodsSum = async function (goodsId, num) {
  try {
    const _col = await postCollection();
    const goods = await getRoomById(goodsId);
    const { info } = goods;

    const newSum = info.sum + num;
    let newPurchasesNum = info.purchasesNum;
    if (num < 0) {
      newPurchasesNum += -num;
    }

    const result = await _col.findOneAndUpdate(
      { _id: ObjectId(goodsId) },
      { $set: { "info.sum": newSum, "info.purchasesNum": newPurchasesNum } },
      {
        returnOriginal: false,
      }
    );
    //findOneAndUpdate不能返回新数据，所以再次获取
    const newGoods = await getRoomById(goodsId);

    return newGoods;
  } catch (error) {
    throw "改变商品 sum 失败";
  }
};
