import { memo } from "react";

import { AppSideBarWrapper, ContentWrapper } from "./style.js";
import ASLogo from "./c-pages/logo";
import ASPortrait from "./c-pages/portrait";
import ASLinks from "./c-pages/links";

const ASAppSideBar = (props) => {
  return (
    <AppSideBarWrapper>
      <ContentWrapper>
        <ASLogo />
        <ASPortrait />
        <ASLinks />
      </ContentWrapper>
    </AppSideBarWrapper>
  );
};

export default memo(ASAppSideBar);
