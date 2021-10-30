import { updateUserMoney, getUser } from "@/services/user";
import { addOrder } from "@/services/order";
import { UPDATE_USER } from "./constants.js";

export const updateUserAction = (user) => ({
  type: UPDATE_USER,
  user,
});

//redux-thunk

export const updateUser_thunk = (phone) => {
  return async (dispatch) => {
    const user = await getUser(phone);
    dispatch(updateUserAction(user));
  };
};

export const changeUserMoney_thunk = (phone, money) => {
  return (dispatch) => {
    updateUserMoney(phone, money).then(
      (user) => {
        console.log(user);
        dispatch(updateUserAction(user));
      },
      (err) => err
    );
  };
};

export const changeAddUserOrder_thunk = (phone, goodsId, buySum) => {
  return async (dispatch) => {
    try {
      await addOrder(phone, goodsId, buySum);
      const user = await getUser(phone);
      dispatch(updateUserAction(user));
    } catch (error) {}
  };
};
