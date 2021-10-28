export const getGoodsByStore = (storeGoods, _id) => {
  let allRoom = [];
  Object.values(storeGoods.traditionRoom).map((val) => allRoom.push(...val));
  Object.values(storeGoods.themeRoom).map((val) => allRoom.push(...val));
  const room = allRoom.find((v) => v._id === _id);
  return room;
};
