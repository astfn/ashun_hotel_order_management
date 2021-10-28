import React from "react";
import { Redirect } from "react-router";

const ASThemeRoom = React.lazy(() =>
  import("@/pages/online-bookding/c-pages/theme-room")
);

/* 引入子页面*/

const ASBirthdayRoom = React.lazy(() =>
  import(`@/pages/online-bookding/c-pages/theme-room/c-pages/birthday-room`)
);
const ASComputerRoom = React.lazy(() =>
  import(`@/pages/online-bookding/c-pages/theme-room/c-pages/computer-room`)
);
const ASFilmRoom = React.lazy(() =>
  import(`@/pages/online-bookding/c-pages/theme-room/c-pages/film-room`)
);

/* 路由配置 */
const routerPrePath = "/online-bookding/theme-room";

const themeRoomRouters = {
  path: `${routerPrePath}`,
  component: ASThemeRoom,
  routes: [
    {
      path: `${routerPrePath}`,
      exact: true,
      render: () => <Redirect to={`${routerPrePath}/birthday-room`} />,
    },
    {
      path: `${routerPrePath}/birthday-room`,
      component: ASBirthdayRoom,
    },
    {
      path: `${routerPrePath}/computer-room`,
      component: ASComputerRoom,
    },
    {
      path: `${routerPrePath}/film-room`,
      component: ASFilmRoom,
    },
  ],
};
export default themeRoomRouters;

// {
//     title: "主题房型",
//     link: "online-bookding/theme-room",
//     child: [
//       { title: "生日派对", link: "online-bookding/theme-room/birthday-room" },
//       { title: "电竞房", link: "online-bookding/theme-room/computer-room" },
//       { title: "观影房", link: "online-bookding/theme-room/film-room" },
//     ],
//   },
