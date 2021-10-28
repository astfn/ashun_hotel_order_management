import { memo } from "react";
import { withRouter } from "react-router";
import { renderRoutes } from "react-router-config";

import { NoticeWrapper } from "./style.js";
import ASThemeHeader from "@/components/theme-header";

import { useOfflineJumpLoginPage } from "@/common/hooks";

const ASNotice = (props) => {
  useOfflineJumpLoginPage(props);

  return (
    <NoticeWrapper>
      <ASThemeHeader title="公告管理" />
      {renderRoutes(props.route.routes)}
    </NoticeWrapper>
  );
};

export default withRouter(memo(ASNotice));
