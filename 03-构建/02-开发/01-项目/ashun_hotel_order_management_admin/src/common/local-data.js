/* sidebar 数据 */
export const sidebarLinks = [
  {
    title: "订单管理",
    link: "/order",
    child: [
      { title: "手动搜寻", link: "/order/manual-search" },
      { title: "用户申请", link: "/order/user-apply" },
    ],
  },
  {
    title: "公告管理",
    link: "/notice",
    child: [
      { title: "我的公告", link: "/notice/mine" },
      { title: "发布公告", link: "/notice/publish" },
      { title: "公告墙", link: "/notice/all" },
    ],
  },
  {
    title: "意见箱",
    link: "/opinion",
  },
];

export const roomTypeMapImages = [
  {
    type: "traditionRoom",
    rooms: [
      {
        type: "bigBedRooms",
        images: [
          require("@/assets/images/tradition-room/big-bed-room/01.jpg").default,
          require("@/assets/images/tradition-room/big-bed-room/02.jpg").default,
          require("@/assets/images/tradition-room/big-bed-room/03.jpg").default,
          require("@/assets/images/tradition-room/big-bed-room/04.jpg").default,
          require("@/assets/images/tradition-room/big-bed-room/05.jpg").default,
        ],
      },
      {
        type: "deluxeRooms",
        images: [
          require("@/assets/images/tradition-room/deluxe-room/01.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/02.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/03.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/04.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/05.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/06.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/07.jpg").default,
          require("@/assets/images/tradition-room/deluxe-room/08.jpg").default,
        ],
      },
      {
        type: "doubleRooms",
        images: [
          require("@/assets/images/tradition-room/double-room/01.jpg").default,
          require("@/assets/images/tradition-room/double-room/02.jpg").default,
          require("@/assets/images/tradition-room/double-room/03.jpg").default,
          require("@/assets/images/tradition-room/double-room/04.jpg").default,
        ],
      },
      {
        type: "singleRooms",
        images: [
          require("@/assets/images/tradition-room/single-room/01.jpg").default,
          require("@/assets/images/tradition-room/single-room/02.jpg").default,
        ],
      },
    ],
  },
  {
    type: "themeRoom",
    rooms: [
      {
        type: "birthdayRooms",
        images: [
          require("@/assets/images/theme-room/birthday-room/01.jpg").default,
          require("@/assets/images/theme-room/birthday-room/02.jpg").default,
          require("@/assets/images/theme-room/birthday-room/03.jpg").default,
          require("@/assets/images/theme-room/birthday-room/04.jpg").default,
          require("@/assets/images/theme-room/birthday-room/05.jpg").default,
          require("@/assets/images/theme-room/birthday-room/06.jpg").default,
          require("@/assets/images/theme-room/birthday-room/07.jpg").default,
          require("@/assets/images/theme-room/birthday-room/08.jpg").default,
        ],
      },
      {
        type: "computerRooms",
        images: [
          require("@/assets/images/theme-room/computer-room/01.jpg").default,
          require("@/assets/images/theme-room/computer-room/02.jpg").default,
          require("@/assets/images/theme-room/computer-room/03.jpg").default,
          require("@/assets/images/theme-room/computer-room/04.jpg").default,
          require("@/assets/images/theme-room/computer-room/05.jpg").default,
          require("@/assets/images/theme-room/computer-room/06.jpg").default,
          require("@/assets/images/theme-room/computer-room/07.jpg").default,
        ],
      },
      {
        type: "filmRooms",
        images: [
          require("@/assets/images/theme-room/film-room/01.jpg").default,
          require("@/assets/images/theme-room/film-room/02.jpg").default,
          require("@/assets/images/theme-room/film-room/03.jpg").default,
          require("@/assets/images/theme-room/film-room/04.jpg").default,
          require("@/assets/images/theme-room/film-room/05.jpg").default,
        ],
      },
    ],
  },
];
