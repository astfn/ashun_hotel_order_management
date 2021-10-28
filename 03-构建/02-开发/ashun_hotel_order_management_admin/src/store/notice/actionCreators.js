import { UPDATE_ALL_NOTICE } from "./constants.js";

import { getNoticeByType } from "@/services/notice";

export const updateAllNotceAction = (allNotice) => ({
  type: UPDATE_ALL_NOTICE,
  allNotice,
});

/* redux thunk */

export const updateAllNotceAction_thunk = () => {
  return async (dispatch, getState) => {
    try {
      const successNoticeList = await getNoticeByType("success");
      const cancelNoticeList = await getNoticeByType("cancel");
      const allNotice = { successNoticeList, cancelNoticeList };
      dispatch(updateAllNotceAction(allNotice));
    } catch (error) {
      console.log(error);
    }
  };
};
