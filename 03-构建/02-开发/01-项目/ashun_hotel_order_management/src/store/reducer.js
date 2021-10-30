import { combineReducers } from "redux-immutable";

import userReducer from "./user";
import goodsReducer from "./goods";
import currentGoodsReducer from "./currentGoods";

export default combineReducers({
  user: userReducer,
  goods: goodsReducer,
  currentGoods: currentGoodsReducer,
});
