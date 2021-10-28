export const hotRooms = (goodsStore) => {
  const allGoods = [];
  Object.entries(goodsStore.traditionRoom).map(([key, val]) =>
    allGoods.push(...val)
  );
  Object.entries(goodsStore.themeRoom).map(([key, val]) =>
    allGoods.push(...val)
  );
  return allGoods
    .sort((a, b) => b.info.purchasesNum - a.info.purchasesNum)
    .slice(0, 3);
};
