/* 
  app-header 数据 
  
*/

export const headerLinks = [
  { title: "火爆房型", link: "/hot-room", isHot: true },
  { title: "在线订房", link: "/online-bookding" },
  { title: "个人中心", link: "/mine" },
  { title: "公告栏", link: "/notice" },
  { title: "意见箱", link: "/opinion" },
];

/* 
  online-booking 数据 

*/
export const onlineBookdingMenu = [
  {
    title: "传统房型",
    link: "/online-bookding/tradition-room",
    child: [
      {
        title: "标准单人间",
        link: "/online-bookding/tradition-room/single-room",
      },
      {
        title: "标准双人间",
        link: "/online-bookding/tradition-room/double-room",
      },
      { title: "大床房", link: "/online-bookding/tradition-room/big-bed-room" },
      {
        title: "豪华套房",
        link: "/online-bookding/tradition-room/deluxe-room",
      },
    ],
  },
  {
    title: "主题房型",
    link: "/online-bookding/theme-room",
    child: [
      { title: "生日派对", link: "/online-bookding/theme-room/birthday-room" },
      { title: "电竞房", link: "/online-bookding/theme-room/computer-room" },
      { title: "观影房", link: "/online-bookding/theme-room/film-room" },
    ],
  },
  {
    title: "推荐房型",
    link: "/hot-room",
    child: [],
  },
];

/* 
  footer数据 

*/
export const footerTexts = {
  servers: [
    {
      title: "服务条款",
      link: "/#",
    },
    {
      title: "隐私政策",
      link: "/#",
    },
    {
      title: "儿童隐私政策",
      link: "/#",
    },
    {
      title: "版权投诉指引",
      link: "/#",
    },
    {
      title: "意见反馈",
      link: "#",
    },
  ],
  copyright: [
    "Ashun 公司版权所有©1997-2021",
    "石家庄 Ashun 科技有限公司运营：xx网文[2021] 1186-054号",
  ],
  report: ["违法和不良信息举报电话：15737082xx1", "举报邮箱：ncm5990@163.com"],
  archives: [
    "粤B2-20090191-18  工业和信息化部备案管理系统网站",
    "浙公网安备 33010902002564号",
  ],
};

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth",
  },
  {
    link: "https://music.163.com/recruit",
  },
  {
    link: "https://music.163.com/web/reward",
  },
  {
    link: "https://music.163.com/uservideo#/plan",
  },
];

/*
    图片的引入
*/

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
