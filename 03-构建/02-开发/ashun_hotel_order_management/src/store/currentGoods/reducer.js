import { CHANGE_CURRENT_GOODS } from "./constants.js";

//这里由于直接更改所有数据，所以不使用immutableJS
const defaultState = {
  _id: "",
  types: "",
  info: {
    name: "",
    price: 0,
    desc: "",
    duration: {
      start: {
        type: "today",
        time: ["00", "00"],
      },
      end: {
        type: "today",
        time: ["00", "00"],
      },
    },
    sum: 0,
    purchasesNum: 0,
  },
  comments: [],
};

export default function currentGoodsReducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case CHANGE_CURRENT_GOODS: {
      return { ...action.room };
    }
    default: {
      return state;
    }
  }
}
