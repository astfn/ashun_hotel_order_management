import { createStore, compose, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import reducer from "./reducer.js";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);

export default store;
