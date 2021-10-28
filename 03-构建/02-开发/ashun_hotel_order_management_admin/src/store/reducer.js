import { combineReducers } from "redux-immutable";

import adminReducer from "./admin";
import noticeReducer from "./notice";
import opinionReducer from "./opinion";

export default combineReducers({
  admin: adminReducer,
  notice: noticeReducer,
  opinion: opinionReducer,
});
