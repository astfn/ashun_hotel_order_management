import { memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RechargeWrapper } from "./style.js";

import { changeUserMoney_thunk } from "@/store/user/actionCreators.js";

const ASRecharge = (props) => {
  const [num, setNum] = useState(0);
  //redux hook
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => ({ user: state.getIn(["user"]) }),
    shallowEqual
  );
  const { phone } = user;
  //handel event
  const handelRecharg = () => {
    dispatch(changeUserMoney_thunk(phone, Number(num)));
    setNum(0);
  };

  return (
    <RechargeWrapper>
      <input
        type="number"
        placeholder="请输入充值金额"
        min={0}
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <div className="confirm" onClick={handelRecharg}>
        确认
      </div>
    </RechargeWrapper>
  );
};

export default memo(ASRecharge);
