import { memo } from "react";
import { withRouter } from "react-router";
import { renderRoutes } from "react-router-config";

import { OrderWrapper } from "./style.js";
import ASThemeHeader from "@/components/theme-header";

import { useOfflineJumpLoginPage } from "@/common/hooks";

const ASOrder = (props) => {
  useOfflineJumpLoginPage(props);

  return (
    <OrderWrapper>
      <ASThemeHeader title="订单管理" />
      {renderRoutes(props.route.routes)}
    </OrderWrapper>
  );
};

export default withRouter(memo(ASOrder));
