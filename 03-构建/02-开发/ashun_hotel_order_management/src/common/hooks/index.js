import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { updateAllGoodsAction } from "@/store/goods/actionCreators.js";
import { changeCurrentRoomAction } from "@/store/currentGoods/actionCreators.js";

import { getAllRoom } from "@/services/goods";

import { getGoodsByStore } from "@/utils/getGoodsByStore.js";

export function useBuyCounter(min, max) {
  const [counter, setCounter] = useState(1);
  const addCounter = () => {
    const newCounter = counter >= max ? max : counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    const newCounter = counter <= min ? counter : counter - 1;
    setCounter(newCounter);
  };
  return [counter, addCounter, subCounter];
}

//localStorage hook
export function useLocalStorange(key) {
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}

//当store中的user更新时，也同步到localStorage中
export function useUpdateLocalStorangeUserByStore() {
  //redux hooks
  const { user } = useSelector(
    (state) => ({ user: state.getIn(["user"]) }),
    shallowEqual
  );
  //其它hooks
  const [, setLocalStorageUser] = useLocalStorange("user");
  useEffect(() => {
    setLocalStorageUser(user);
  }, [user, setLocalStorageUser]);
}

//当store中的currentGoods更新时，也更新到store存储的（goods）所有商品中
export function useUpdateGoodsByCurrentGoods() {
  //redux hooks
  const dispatch = useDispatch();
  const { currentGoods } = useSelector(
    (state) => ({
      currentGoods: state.getIn(["currentGoods"]),
    }),
    shallowEqual
  );
  //其它hooks
  useEffect(() => {
    async function operation() {
      const allGoods = await getAllRoom();
      dispatch(updateAllGoodsAction(allGoods));
    }
    operation();
  }, [dispatch, currentGoods]);
}

//组件挂载时，从数据库更新goods
export function useUpdateGoodsByDataBase() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllRoom().then((res) => {
      dispatch(updateAllGoodsAction(res));
      console.log(res);
    });
  }, [dispatch]);
}

//组件挂载时，先更新goods，再更新currentGoods
export function useUpdateCurrentGoodsByGoods(_id) {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllRoom().then((res) => {
      dispatch(updateAllGoodsAction(res));
      const room = getGoodsByStore(res, _id);
      dispatch(changeCurrentRoomAction(room));
    });
  }, [dispatch, _id]);
}

//未登录状态跳转到登录页
export function useOfflineJumpLoginPage(props) {
  //redux hooks
  const { user } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
    }),
    shallowEqual
  );
  //其它hooks
  useEffect(() => {
    if (!user.phone) {
      props.history.replace("/not-login");
    }
  }, [props, user]);
}
