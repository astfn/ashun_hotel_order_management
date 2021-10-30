import { UPDATE_USER } from "./constants.js";

//由于一开始会直接替换掉user信息，所以这里不使用immutableJS
const defaultState = {
  phone: "",
  nickName: "",
  password: "",
  accountInfo: {
    money: 0,
    successOrderList: [],
    cancelOrderList: [],
    pendingOrderList: [],
  },
};

function userReducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case UPDATE_USER: {
      return action.user;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
