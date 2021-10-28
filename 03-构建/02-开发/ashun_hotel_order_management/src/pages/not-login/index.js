import { memo } from "react";
import { withRouter } from "react-router";

import { NotLoginWeapper } from "./style.js";

const ASNotLogin = (props) => {
  const jumpLogin = () => {
    props.history.push("/login");
  };
  return (
    <NotLoginWeapper>
      <div className="content-box">
        <button onClick={jumpLogin}>登录</button>
        <span>
          您处于未登录状态，为了拥有更多的功能及其更好的体验，快去登陆吧！
        </span>
      </div>
    </NotLoginWeapper>
  );
};
export default withRouter(memo(ASNotLogin));
