import React from "react";
import { Redirect } from "react-router";

const ASOrder = React.lazy(() => import("@/pages/order"));
const ASManualSearch = React.lazy(() =>
  import("@/pages/order/c-pages/manual-search")
);
const ASUserApply = React.lazy(() =>
  import("@/pages/order/c-pages/user-apply")
);

const orderRoutes = {
  path: "/order",
  component: ASOrder,
  routes: [
    {
      path: "/order",
      exact: true,
      render: () => <Redirect to="/order/manual-search" />,
    },
    {
      path: "/order/manual-search",
      component: ASManualSearch,
    },
    {
      path: "/order/user-apply",
      component: ASUserApply,
    },
  ],
};

export default orderRoutes;
