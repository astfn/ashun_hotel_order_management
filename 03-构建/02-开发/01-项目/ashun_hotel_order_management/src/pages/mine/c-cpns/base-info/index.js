import { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { BaseInfoWrapper } from "./style.js";
import ASRechargefrom from "./recharge";

import { formatShowPrice } from "@/utils/format.js";

const ASBaseInfo = (props) => {
  const [isShowRecharge, setIsShowRecharge] = useState(false);

  //redux hook
  const { user } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
    }),
    shallowEqual
  );
  const { phone, nickName, accountInfo } = user;

  const avatar = require("@/assets/images/avatar.png").default;
  return (
    <BaseInfoWrapper>
      <div className="avatar">
        <img src={avatar} alt={nickName} />
      </div>
      <div className="info-box">
        <p className="nickName">
          <span className="prev-txt">昵称：</span>
          {nickName}
        </p>
        <p className="phone">
          <span className="prev-txt">手机号：</span>
          {phone}
        </p>
        <div className="money-box">
          <p className="money">
            <span className="prev-txt">账户余额：</span>
            {formatShowPrice(accountInfo.money)}
          </p>
          <div
            className="recharge"
            onClick={() => setIsShowRecharge(!isShowRecharge)}
          >
            充值
          </div>
          {isShowRecharge && <ASRechargefrom />}
        </div>
      </div>
    </BaseInfoWrapper>
  );
};

export default memo(ASBaseInfo);
