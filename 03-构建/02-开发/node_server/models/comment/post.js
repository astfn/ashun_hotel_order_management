const { ObjectId } = require("mongodb");

const { COMMENT_COLLECTION } = require("./config.js");
const postCollection =
  require("../../config/mongoDbConnection.js").getCollection(
    COMMENT_COLLECTION
  );

const { getCommentByGoods } = require("./get.js");

//初始化模板
const { getAllRoom } = require("../goods/get.js");
const { ObjectID } = require("bson");
exports.InitialComments = async function () {
  try {
    const rooms = [];
    const allRooms = await getAllRoom();
    Object.values(allRooms.traditionRoom).map((val) => rooms.push(...val));
    Object.values(allRooms.themeRoom).map((val) => rooms.push(...val));
    const _col = await postCollection();

    rooms.map(async (goods, index) => {
      const result = await _col.insertOne({
        goodsId: goods["_id"],
        comments: [],
      });
    });
    return "初始化Comments成功";
  } catch (error) {
    throw error;
  }
};

exports.addComment = async function (commentData) {
  try {
    const { goodsId, uid, orderId, content } = commentData;
    const _col = await postCollection();
    const time = new Date().getTime();
    const result = await _col.findOneAndUpdate(
      { goodsId: ObjectId(goodsId) },
      { $push: { comments: { uid, orderId, time, content } } },
      {
        returnOriginal: false,
      }
    );
    return result.value;
  } catch (error) {
    throw "添加评论出错";
  }
};

exports.removeComment = async function (goodsId, orderId) {
  try {
    console.log(goodsId, orderId);
    const _col = await postCollection();
    const result = await _col.findOneAndUpdate(
      { goodsId: ObjectID(goodsId) },
      { $pull: { comments: { orderId } } },
      {
        returnOriginal: false,
      }
    );
    return result.value;
  } catch (error) {
    throw "删除某评论出错";
  }
};
