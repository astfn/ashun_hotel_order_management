import { memo } from "react";

import { AppHeaderWrapper, HeaderContent } from "./style.js";
import ASLogo from "./c-pages/logo";
import ASLinks from "./c-pages/links";
import ASPortrait from "./c-pages/portrait";

const ASAppHeader = (props) => {
  return (
    <AppHeaderWrapper>
      <HeaderContent>
        <ASLogo />
        <ASLinks />
        <ASPortrait />
      </HeaderContent>
    </AppHeaderWrapper>
  );
};

export default memo(ASAppHeader);
