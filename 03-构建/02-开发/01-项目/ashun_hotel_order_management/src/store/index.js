import { createStore, compose, applyMiddleware } from "redux";
import ThunkMiddleWare from "redux-thunk";

import reducer from "./reducer.js";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(ThunkMiddleWare))
);

export default store;
