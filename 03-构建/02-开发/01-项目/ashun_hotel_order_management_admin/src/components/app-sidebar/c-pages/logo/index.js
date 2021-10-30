import { memo } from "react";
import { withRouter } from "react-router";

import { LogoWrapper } from "./style.js";
const logoSrc = require("@/assets/images/logo.png").default;

const ASLogo = (props) => {
  const jumpHome = () => {
    props.history.replace("/");
  };
  return (
    <LogoWrapper onClick={jumpHome}>
      <div className="logo-box">
        <img src={logoSrc} alt="Ashuntefannao" />
      </div>
      <h2>AshunHotel_Admin</h2>
    </LogoWrapper>
  );
};

export default withRouter(memo(ASLogo));
