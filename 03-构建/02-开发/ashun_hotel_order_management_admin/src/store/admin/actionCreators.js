import { UPDATE_ADMIN } from "./constants.js";

import { getAdmin } from "@/services/admin";

export const updateAdminAction = (admin) => ({
  type: UPDATE_ADMIN,
  admin,
});

/* redux thunk */

export const updateAdminAction_thunk = (phone) => {
  return async (dispatch, getState) => {
    try {
      const admin = await getAdmin(phone);
      dispatch(updateAdminAction(admin));
      console.log(admin);
    } catch (error) {
      console.log(error);
    }
  };
};
