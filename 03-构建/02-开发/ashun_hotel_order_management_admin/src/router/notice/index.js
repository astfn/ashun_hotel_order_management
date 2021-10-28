import React from "react";
import { Redirect } from "react-router";

const ASNotice = React.lazy(() => import("@/pages/notice"));
const ASMine = React.lazy(() => import("@/pages/notice/c-pages/mine"));
const ASPublish = React.lazy(() => import("@/pages/notice/c-pages/publish"));
const ASAll = React.lazy(() => import("@/pages/notice/c-pages/all"));

const noticeRoutes = {
  path: "/notice",
  component: ASNotice,
  routes: [
    {
      path: "/notice",
      exact: true,
      render: () => <Redirect to="/notice/mine" />,
    },
    {
      path: "/notice/mine",
      component: ASMine,
    },
    {
      path: "/notice/publish",
      component: ASPublish,
    },
    {
      path: "/notice/all",
      component: ASAll,
    },
  ],
};

export default noticeRoutes;
