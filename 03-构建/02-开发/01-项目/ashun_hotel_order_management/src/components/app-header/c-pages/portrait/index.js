import { memo } from "react";
import { withRouter } from "react-router";
import { useSelector, shallowEqual } from "react-redux";

import { PortraitWrapper } from "./style.js";

const ASPortrait = (props) => {
  const { user } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
    }),
    shallowEqual
  );

  const renderInfo = () => {
    return (
      <div className="user-info">
        <div className="avatar"></div>
        <p className="nickName text-nowrap">{user.nickName}</p>
      </div>
    );
  };
  function renderPortrait() {
    return (
      <div className="login-box">
        <button
          className="login"
          onClick={() => {
            props.history.replace("/login");
          }}
        >
          登录
        </button>
      </div>
    );
  }
  return (
    <PortraitWrapper>
      {user.nickName && renderInfo()}
      {renderPortrait()}
    </PortraitWrapper>
  );
};

export default withRouter(memo(ASPortrait));
