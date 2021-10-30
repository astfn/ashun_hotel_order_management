# 路由相关

* 这些嵌套路由在配置`link`时，祖先路径也要进行指明
* **并且开头一定不能忽略**`/`
  * 如果忽略了`/`，则路由会产生不断`push`的效果。
* 第一层路由配置`link`时，虽然忽略`/`没什么影响，但为了格式统一，最好也加上

```
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
        link: "/online-bookding/tradition-room/deluxe-Room",
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
];
```

# 图片引入

* 请求到数据后，按照`type`找到对应的图片，然后通过`require`进行引入
* 路径没错，但是就是引入不成功，一直报错，原因是`require`中**不能包含变量**，而我却恰恰引入了变量。

```
const imgPreSrc = "@/assets/images";

export const roomTypeMapImages = [
  {
    type: "traditionRoom",
    rooms: [
      {
        type: "bigBedRooms",
        images: [
          `${imgPreSrc}/tradition-room/big-bed-room/01.jpg`,
          `${imgPreSrc}/tradition-room/big-bed-room/02.jpg`,
          `${imgPreSrc}/tradition-room/big-bed-room/03.jpg`,
          `${imgPreSrc}/tradition-room/big-bed-room/04.jpg`,
          `${imgPreSrc}/tradition-room/big-bed-room/05.jpg`,
        ],
      },
      ……
     ]
   },
   {
     type: "themeRoom",
      rooms: [……]
   }
 ]
```

### 解决方案

**方案一**

​	不再抽离图片前面的路径`imgPreSrc`，路径中全部包含常量。

**方案二**

​	creat-react-app项目中，可以直接引入，但必须有一个条件：**这些图片资源必须放入**`public`**中**。

将图片放入`public`目录后，将上述代码的`imgPreSrc`改为`./images`即可
