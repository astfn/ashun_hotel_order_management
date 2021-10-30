const { ObjectId } = require("mongodb");
const { GOODS_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(GOODS_COLLECTION);

const { getCommentByGoods } = require("../comment/get.js");

const getRoomById = async function (goodsId) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ _id: ObjectId(goodsId) }).toArray();
    const room = result[0];
    const comments = await getCommentByGoods(room._id);
    room.comments = comments;
    return room;
  } catch (err) {
    throw "根据 Id 获取商品失败";
  }
};
exports.getRoomById = getRoomById;

exports.getAllRoom = async function (phone) {
  try {
    const _col = await getCollection();

    //获取各种traditionRoom房型
    const bigBedRooms = await _col
      .find({ types: "traditionRoom/bigBedRooms" })
      .toArray();
    const deluxeRooms = await _col
      .find({ types: "traditionRoom/deluxeRooms" })
      .toArray();
    const doubleRooms = await _col
      .find({ types: "traditionRoom/doubleRooms" })
      .toArray();
    const singleRooms = await _col
      .find({ types: "traditionRoom/singleRooms" })
      .toArray();

    //获取各种themeRoom房型
    const birthdayRooms = await _col
      .find({ types: "themeRoom/birthdayRooms" })
      .toArray();
    const computerRooms = await _col
      .find({ types: "themeRoom/computerRooms" })
      .toArray();
    const filmRooms = await _col
      .find({ types: "themeRoom/filmRooms" })
      .toArray();

    //数据整合
    const result = {
      traditionRoom: {
        bigBedRooms,
        deluxeRooms,
        doubleRooms,
        singleRooms,
      },
      themeRoom: {
        birthdayRooms,
        computerRooms,
        filmRooms,
      },
    };
    //为各个商品添加上comments
    async function injectComment(allRoom, firstType) {
      const firstTypeRooms = allRoom[firstType];
      for (let secondType in firstTypeRooms) {
        const secondTypeRooms = firstTypeRooms[secondType];
        for (let j = 0; j < secondTypeRooms.length; j++) {
          const room = secondTypeRooms[j];
          const comments = await getCommentByGoods(room._id);
          room.comments = comments;
        }
      }
    }
    await injectComment(result, "traditionRoom");
    await injectComment(result, "themeRoom");

    return result;
  } catch (err) {
    throw "获取所有房型失败";
  }
};
