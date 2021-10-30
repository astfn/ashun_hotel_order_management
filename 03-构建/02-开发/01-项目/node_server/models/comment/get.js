const { ObjectID } = require("bson");
const { COMMENT_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(
    COMMENT_COLLECTION
  );

const { getUser } = require("../user/get.js");

//在原有数据基础上增加userInfo，用于前端展示
const getShowComments = async (comments) => {
  const showComments = [];
  for (let val of comments) {
    const user = await getUser(val.uid);
    const { nickName } = user;
    val.userInfo = {
      nickName,
    };
    showComments.push(val);
    if (showComments.length === comments.length) return showComments;
  }
};

async function getCommentByGoods(goodsId) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ goodsId: ObjectID(goodsId) }).toArray();
    const comments = result[0] ? result[0].comments : [];

    const showComments = await getShowComments(comments);
    return showComments || [];
  } catch (err) {
    throw "根据商品获取评论失败";
  }
}
exports.getCommentByGoods = getCommentByGoods;

exports.getCommentByUidAndGoodsId = async function (goodsId, uid) {
  try {
    const _col = await getCollection();
    const comments = await getCommentByGoods(goodsId);

    return comments.filter((v) => v.uid === uid);
  } catch (error) {
    throw "根据商品id、用户id获取评论失败";
  }
};

exports.getCommentByOrderId = async function (orderId) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ "comments.orderId": orderId }).toArray();
    return result[0];
  } catch (error) {
    throw "根据 orderId 获取评论失败";
  }
};
