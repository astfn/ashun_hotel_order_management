import { Map } from "immutable";
import { UPDATE_ALL_GOODS } from "./constants.js";

const defaultState = Map({
  traditionRoom: {
    bigBedRooms: [],
    deluxeRooms: [],
    doubleRooms: [],
    singleRooms: [],
  },
  themeRoom: {
    birthdayRooms: [],
    computerRooms: [],
    filmRooms: [],
  },
});

function goodsReducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case UPDATE_ALL_GOODS: {
      const { themeRoom, traditionRoom } = action.allGoods;
      return state
        .set("traditionRoom", traditionRoom)
        .set("themeRoom", themeRoom);
    }
    default: {
      return state;
    }
  }
}

export default goodsReducer;
