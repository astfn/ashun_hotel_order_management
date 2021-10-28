import { memo } from "react";
import { withRouter } from "react-router";

import { LogoWrapper } from "./style.js";
const logoSrc = require("@/assets/images/logo.png").default;

const ASLogo = (props) => {
  const jumpRouter = () => {
    props.history.replace("/hot-room");
  };
  return (
    <LogoWrapper onClick={jumpRouter}>
      <div className="logo-box">
        <img src={logoSrc} alt="Ashuntefannao" />
      </div>
      <h2>AshunHotel</h2>
    </LogoWrapper>
  );
};

export default withRouter(memo(ASLogo));
