import React from "react";
import { Redirect } from "react-router";

import onlineBookdingRoutes from "./online-bookding";
const ASHotRoom = React.lazy(() => import("@/pages/hot-room"));
const ASMine = React.lazy(() => import("@/pages/mine"));
const ASNotice = React.lazy(() => import("@/pages/notice"));
const ASOpinion = React.lazy(() => import("@/pages/opinion"));
const ASRoomDetail = React.lazy(() => import("@/pages/room-detail"));
const ASLogin = React.lazy(() => import("@/pages/login"));
const ASRegister = React.lazy(() => import("@/pages/login/register"));
const ASNotLogin = React.lazy(() => import("@/pages/not-login"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/hot-room" />,
  },
  {
    path: "/hot-room",
    component: ASHotRoom,
  },
  {
    ...onlineBookdingRoutes,
  },
  {
    path: "/mine",
    component: ASMine,
  },
  {
    path: "/notice",
    component: ASNotice,
  },
  {
    path: "/opinion",
    component: ASOpinion,
  },
  {
    path: "/room-detail:_id",
    component: ASRoomDetail,
  },
  {
    path: "/login",
    component: ASLogin,
  },
  {
    path: "/register",
    component: ASRegister,
  },
  {
    path: "/not-login",
    component: ASNotLogin,
  },
];

export default routes;
