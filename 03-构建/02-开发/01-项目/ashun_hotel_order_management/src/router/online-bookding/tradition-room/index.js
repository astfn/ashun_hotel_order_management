import React from "react";
import { Redirect } from "react-router";

const ASTraditionRoom = React.lazy(() =>
  import("@/pages/online-bookding/c-pages/tradition-room")
);

/* 引入子页面*/
const ASSingleRoom = React.lazy(() =>
  import("@/pages/online-bookding/c-pages/tradition-room/c-pages/single-room")
);
const ASTDoubleRoom = React.lazy(() =>
  import("@/pages/online-bookding/c-pages/tradition-room/c-pages/double-room")
);
const ASTBigBedRoom = React.lazy(() =>
  import("@/pages/online-bookding/c-pages/tradition-room/c-pages/big-bed-room")
);
const ASTDeluxeRoom = React.lazy(() =>
  import("@/pages/online-bookding/c-pages/tradition-room/c-pages/deluxe-room")
);

/* 路由配置*/
const routerPrePath = "/online-bookding/tradition-room";

const traditionRoomRouters = {
  path: `${routerPrePath}`,
  component: ASTraditionRoom,
  routes: [
    {
      path: `${routerPrePath}`,
      exact: true,
      render: () => <Redirect to={`${routerPrePath}/single-room`} />,
    },
    {
      path: `${routerPrePath}/single-room`,
      component: ASSingleRoom,
    },
    {
      path: `${routerPrePath}/double-room`,
      component: ASTDoubleRoom,
    },
    {
      path: `${routerPrePath}/big-bed-room`,
      component: ASTBigBedRoom,
    },
    {
      path: `${routerPrePath}/deluxe-room`,
      component: ASTDeluxeRoom,
    },
  ],
};
export default traditionRoomRouters;

// {
//   title: "传统房型",
//   link: "/online-bookding/tradition-room",
//   child: [
//     {
//       title: "标准单人间",
//       link: "/online-bookding/tradition-room/single-room",
//     },
//     {
//       title: "标准双人间",
//       link: "/online-bookding/tradition-room/double-room",
//     },
//     { title: "大床房", link: "/online-bookding/tradition-room/big-bed-room" },
//     {
//       title: "豪华套房",
//       link: "/online-bookding/tradition-room/deluxe-room",
//     },
//   ],
// },
