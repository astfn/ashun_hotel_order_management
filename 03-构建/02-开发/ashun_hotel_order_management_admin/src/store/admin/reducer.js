import { UPDATE_ADMIN } from "./constants.js";

const defaultState = {
  phone: "",
  nickName: "",
  password: "",
  cancelOrderList: [],
  noticeList: {
    successNoticeList: [],
    cancelNoticeList: [],
  },
};

export default function adminReducer(state = defaultState, aciton) {
  const { type } = aciton;
  switch (type) {
    case UPDATE_ADMIN: {
      return aciton.admin;
    }
    default: {
      return state;
    }
  }
}
