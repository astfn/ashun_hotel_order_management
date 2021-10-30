import { CHANGE_CURRENT_GOODS } from "./constants.js";

export const changeCurrentRoomAction = (room) => ({
  type: CHANGE_CURRENT_GOODS,
  room,
});

//redux thunk
