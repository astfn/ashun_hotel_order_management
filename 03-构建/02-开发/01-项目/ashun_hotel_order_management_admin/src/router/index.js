import React from "react";
import { Redirect } from "react-router";

import orderRoutes from "./order";
import noticeRoutes from "./notice";

const ASOpinion = React.lazy(() => import("@/pages/opinion"));
const ASOLogin = React.lazy(() => import("@/pages/login"));
const ASRegister = React.lazy(() => import("@/pages/login/register"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/order" />,
  },
  {
    ...orderRoutes,
  },
  {
    ...noticeRoutes,
  },
  {
    path: "/opinion",
    component: ASOpinion,
  },
  {
    path: "/login",
    component: ASOLogin,
  },
  {
    path: "/register",
    component: ASRegister,
  },
];

export default routes;
