import { UPDATE_ALL_NOTICE } from "./constants.js";

const defaultState = {
  successNoticeList: [],
  cancelNoticeList: [],
};

export default function adminReducer(state = defaultState, aciton) {
  const { type } = aciton;
  switch (type) {
    case UPDATE_ALL_NOTICE: {
      return aciton.allNotice;
    }
    default: {
      return state;
    }
  }
}
