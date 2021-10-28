import React from "react";
import { Redirect } from "react-router";

import themeRoomRouters from "./theme-room";
import traditionRoomRouters from "./tradition-room";

const ASOnlineBookding = React.lazy(() => import("@/pages/online-bookding"));

const onlineBookdingRoutes = {
  path: "/online-bookding",
  component: ASOnlineBookding,
  routes: [
    {
      path: "/online-bookding",
      exact: true,
      render: () => <Redirect to="/online-bookding/tradition-room" />,
    },
    {
      ...traditionRoomRouters,
    },
    {
      ...themeRoomRouters,
    },
  ],
};

export default onlineBookdingRoutes;
