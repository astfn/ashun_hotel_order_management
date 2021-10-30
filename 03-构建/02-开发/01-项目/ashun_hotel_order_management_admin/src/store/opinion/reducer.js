import { UPDATE_ALL_OPINION } from "./constants.js";

const defaultState = [];

export default function adminReducer(state = defaultState, aciton) {
  const { type } = aciton;
  switch (type) {
    case UPDATE_ALL_OPINION: {
      return aciton.allOpinion;
    }
    default: {
      return state;
    }
  }
}
