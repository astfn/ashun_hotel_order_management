import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { withRouter } from "react-router";

import { PortraitWrapper, InfoWrapper, LoginWrapper } from "./style.js";

import { getUserAvatar } from "@/utils/getUserAvatar.js";

const ASPortrait = (props) => {
  /* redux hooks */
  const { admin } = useSelector(
    (state) => ({
      admin: state.getIn(["admin"]),
    }),
    shallowEqual
  );
  const { nickName, phone } = admin;
  /* 其它hook */

  /* handle Event */
  const jumpLogin = () => {
    props.history.replace("/login");
  };

  /* render 相关 */
  const renderInfo = () => {
    return (
      <InfoWrapper onClick={jumpLogin}>
        <div className="avatar-box">
          <img src={getUserAvatar()} alt={nickName} />
        </div>
        <div className="info-box">
          <span className="nickName">
            昵称：<i>{nickName}</i>
          </span>
          <span className="phone">
            工号：<i>{phone}</i>
          </span>
        </div>
      </InfoWrapper>
    );
  };
  const renderLogin = () => {
    return (
      <LoginWrapper>
        <div className="login-btn" onClick={jumpLogin}>
          登录
        </div>
      </LoginWrapper>
    );
  };
  return (
    <PortraitWrapper>{phone ? renderInfo() : renderLogin()}</PortraitWrapper>
  );
};

export default withRouter(memo(ASPortrait));
