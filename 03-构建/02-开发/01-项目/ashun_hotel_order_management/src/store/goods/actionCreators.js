import { UPDATE_ALL_GOODS } from "./constants.js";

export const updateAllGoodsAction = (allGoods) => ({
  type: UPDATE_ALL_GOODS,
  allGoods,
});
