import { memo, useEffect } from "react";
import { withRouter } from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { MineWrapper } from "./style.js";
import ASBaseInfo from "./c-cpns/base-info";
import ASOrder from "./c-cpns/order";

import { updateUser_thunk } from "@/store/user/actionCreators.js";
import {
  useUpdateLocalStorangeUserByStore,
  useOfflineJumpLoginPage,
} from "@/common/hooks";

const ASMine = (props) => {
  //redux hooks
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
    }),
    shallowEqual
  );
  const { phone } = user;

  //其它hooks

  useOfflineJumpLoginPage(props);

  //每次进入页面后，都更新一次最新的数据
  useEffect(() => {
    dispatch(updateUser_thunk(phone));
  }, [dispatch, phone]);
  useUpdateLocalStorangeUserByStore();

  /*redner 相关*/
  const rednerMine = () => {
    if (!phone) return "";
    return (
      <MineWrapper>
        {phone && <ASBaseInfo />}
        {phone && <ASOrder />}
      </MineWrapper>
    );
  };

  return rednerMine();
};

export default withRouter(memo(ASMine));
