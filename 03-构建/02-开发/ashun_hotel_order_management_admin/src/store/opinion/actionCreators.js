import { UPDATE_ALL_OPINION } from "./constants.js";

import { getAllOpinion } from "@/services/opinion";

export const updateAllOpinionAction = (allOpinion) => ({
  type: UPDATE_ALL_OPINION,
  allOpinion,
});

/* redux thunk */

export const updateAllOpinionAction_thunk = () => {
  return async (dispatch, getState) => {
    try {
      const allOpinion = await getAllOpinion();
      dispatch(updateAllOpinionAction(allOpinion));
    } catch (error) {
      console.log(error);
    }
  };
};
