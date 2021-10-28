## admin

```
/* 1 */
{
    "_id" : ObjectId("617a851965fa87c9ea9b4daf"),
    "nickName" : "Ashun",
    "phone" : "15737082601",
    "password" : "astfn"
}

/* 2 */
{
    "_id" : ObjectId("617a863365fa87c9ea9b4db1"),
    "nickName" : "向军",
    "phone" : "15737082602",
    "password" : "ashun"
}
```

## applyCancelOrder

```
/* 1 */
{
    "_id" : ObjectId("617a80d091f396fa702d6011"),
    "time" : 1635418320582.0,
    "orderId" : "617a80ac91f396fa702d6010",
    "reason" : "手滑了，不好意思！"
}

/* 2 */
{
    "_id" : ObjectId("617a8c2ac46c1be9ec96aa69"),
    "time" : 1635421226681.0,
    "orderId" : "617a8c07c46c1be9ec96aa68",
    "reason" : "临时有事，去不了了，真不好意思"
}
```

## comment

重置数据时，记得通过接口`http://localhost:3060/InitialComments`初始化数据

```
/* 1 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5ffb"),
    "goodsId" : ObjectId("616be15eed2b27e38c229cda"),
    "comments" : []
}

/* 2 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5ff9"),
    "goodsId" : ObjectId("616be0a1ed2b27e38c229cc1"),
    "comments" : []
}

/* 3 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5ffa"),
    "goodsId" : ObjectId("616be0e5ed2b27e38c229cc9"),
    "comments" : []
}

/* 4 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5ffc"),
    "goodsId" : ObjectId("616be384ed2b27e38c229d0a"),
    "comments" : []
}

/* 5 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5ffd"),
    "goodsId" : ObjectId("616be3d9ed2b27e38c229d13"),
    "comments" : []
}

/* 6 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5ffe"),
    "goodsId" : ObjectId("616be42bed2b27e38c229d1c"),
    "comments" : []
}

/* 7 */
{
    "_id" : ObjectId("617a7fe391f396fa702d5fff"),
    "goodsId" : ObjectId("616be4e5ed2b27e38c229d35"),
    "comments" : []
}

/* 8 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6000"),
    "goodsId" : ObjectId("616be642ed2b27e38c229d55"),
    "comments" : []
}

/* 9 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6001"),
    "goodsId" : ObjectId("616be67fed2b27e38c229d5c"),
    "comments" : []
}

/* 10 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6002"),
    "goodsId" : ObjectId("616be6b1ed2b27e38c229d61"),
    "comments" : []
}

/* 11 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6003"),
    "goodsId" : ObjectId("616be7c0ed2b27e38c229d7b"),
    "comments" : [ 
        {
            "uid" : "15737082601",
            "orderId" : "617a7ef491f396fa702d5ff8",
            "time" : 1635418136521.0,
            "content" : "经济实惠，挺好的，干净整洁！！！"
        }, 
        {
            "uid" : "15737082602",
            "orderId" : "617a80ac91f396fa702d6010",
            "time" : 1635418308077.0,
            "content" : "挺不错的，客服处理速度快！"
        }
    ]
}

/* 12 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6004"),
    "goodsId" : ObjectId("616be7e5ed2b27e38c229d82"),
    "comments" : [ 
        {
            "uid" : "15737082601",
            "orderId" : "617a8c07c46c1be9ec96aa68",
            "time" : 1635421206862.0,
            "content" : "挺好的，nice！"
        }
    ]
}

/* 13 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6005"),
    "goodsId" : ObjectId("616be842ed2b27e38c229d8f"),
    "comments" : []
}

/* 14 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6006"),
    "goodsId" : ObjectId("616bea46ed2b27e38c229dba"),
    "comments" : [ 
        {
            "uid" : "15737082601",
            "orderId" : "617a7eec91f396fa702d5ff7",
            "time" : 1635418111163.0,
            "content" : "跟朋友一起过的生日，非常开心，功能多，环境好！"
        }
    ]
}

/* 15 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6007"),
    "goodsId" : ObjectId("616bea8bed2b27e38c229dc5"),
    "comments" : []
}

/* 16 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6008"),
    "goodsId" : ObjectId("616beb14ed2b27e38c229dd3"),
    "comments" : []
}

/* 17 */
{
    "_id" : ObjectId("617a7fe391f396fa702d6009"),
    "goodsId" : ObjectId("616becabed2b27e38c229df5"),
    "comments" : []
}

/* 18 */
{
    "_id" : ObjectId("617a7fe391f396fa702d600a"),
    "goodsId" : ObjectId("616becdaed2b27e38c229e00"),
    "comments" : []
}

/* 19 */
{
    "_id" : ObjectId("617a7fe391f396fa702d600b"),
    "goodsId" : ObjectId("616bed31ed2b27e38c229e09"),
    "comments" : []
}

/* 20 */
{
    "_id" : ObjectId("617a7fe391f396fa702d600c"),
    "goodsId" : ObjectId("616bee13ed2b27e38c229e1f"),
    "comments" : []
}

/* 21 */
{
    "_id" : ObjectId("617a7fe391f396fa702d600d"),
    "goodsId" : ObjectId("616bee3ded2b27e38c229e26"),
    "comments" : []
}
```

## goods

```
/* 1 */
{
    "_id" : ObjectId("616be0a1ed2b27e38c229cc1"),
    "types" : "traditionRoom/bigBedRooms",
    "info" : {
        "name" : "大床房",
        "price" : 108,
        "desc" : "精致的商旅客房，满足您各种差旅需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。智能化一键式客房系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您业余时间的娱乐生活。累了？在热带雨林和高级浴缸里彻底放松自己吧！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 180
    },
    "comments" : []
}

/* 2 */
{
    "_id" : ObjectId("616be0e5ed2b27e38c229cc9"),
    "types" : "traditionRoom/bigBedRooms",
    "info" : {
        "name" : "大床房",
        "price" : 108,
        "desc" : "精致的商旅客房，满足您各种差旅需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。智能化一键式客房系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您业余时间的娱乐生活。累了？在热带雨林和高级浴缸里彻底放松自己吧！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "14", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 180
    },
    "comments" : []
}

/* 3 */
{
    "_id" : ObjectId("616be15eed2b27e38c229cda"),
    "types" : "traditionRoom/bigBedRooms",
    "info" : {
        "name" : "大床房",
        "price" : 180,
        "desc" : "精致的商旅客房，满足您各种差旅需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。智能化一键式客房系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您业余时间的娱乐生活。累了？在热带雨林和高级浴缸里彻底放松自己吧！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "morrow",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 10,
        "purchasesNum" : 308
    },
    "comments" : []
}

/* 4 */
{
    "_id" : ObjectId("616be384ed2b27e38c229d0a"),
    "types" : "traditionRoom/deluxeRooms",
    "info" : {
        "name" : "豪华套房",
        "price" : 360,
        "desc" : "立城市之巅以览众，随大河之势以寄情！在这里，雅致的室内空间与锦秀山水触为一体，相得益彰，给您轻松的愉悦，进口的高档床具和独特的气味管理，为您营造完美的睡眠空间，先进的一键式智能系统，让服务更便捷，免去您一切后顾之忧。这一刻，将自己融入美景，从尘嚣中脱离。不要让疲乏带走您住店的乐趣，让令人愉悦的冲浪浴缸冲走您全部的疲惫，尽情享受在这里的美好旅程。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 4,
        "purchasesNum" : 326
    },
    "comments" : []
}

/* 5 */
{
    "_id" : ObjectId("616be3d9ed2b27e38c229d13"),
    "types" : "traditionRoom/deluxeRooms",
    "info" : {
        "name" : "豪华套房",
        "price" : 360,
        "desc" : "立城市之巅以览众，随大河之势以寄情！在这里，雅致的室内空间与锦秀山水触为一体，相得益彰，给您轻松的愉悦，进口的高档床具和独特的气味管理，为您营造完美的睡眠空间，先进的一键式智能系统，让服务更便捷，免去您一切后顾之忧。这一刻，将自己融入美景，从尘嚣中脱离。不要让疲乏带走您住店的乐趣，让令人愉悦的冲浪浴缸冲走您全部的疲惫，尽情享受在这里的美好旅程。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "16", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 155
    },
    "comments" : []
}

/* 6 */
{
    "_id" : ObjectId("616be42bed2b27e38c229d1c"),
    "types" : "traditionRoom/deluxeRooms",
    "info" : {
        "name" : "豪华套房",
        "price" : 699,
        "desc" : "立城市之巅以览众，随大河之势以寄情！在这里，雅致的室内空间与锦秀山水触为一体，相得益彰，给您轻松的愉悦，进口的高档床具和独特的气味管理，为您营造完美的睡眠空间，先进的一键式智能系统，让服务更便捷，免去您一切后顾之忧。这一刻，将自己融入美景，从尘嚣中脱离。不要让疲乏带走您住店的乐趣，让令人愉悦的冲浪浴缸冲走您全部的疲惫，尽情享受在这里的美好旅程。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "morrow",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 6,
        "purchasesNum" : 433
    },
    "comments" : []
}

/* 7 */
{
    "_id" : ObjectId("616be4e5ed2b27e38c229d35"),
    "types" : "traditionRoom/deluxeRooms",
    "info" : {
        "name" : "豪华套房",
        "price" : 266,
        "desc" : "(一小时豪华体验)立城市之巅以览众，随大河之势以寄情！在这里，雅致的室内空间与锦秀山水触为一体，相得益彰，给您轻松的愉悦，进口的高档床具和独特的气味管理，为您营造完美的睡眠空间，先进的一键式智能系统，让服务更便捷，免去您一切后顾之忧。这一刻，将自己融入美景，从尘嚣中脱离。不要让疲乏带走您住店的乐趣，让令人愉悦的冲浪浴缸冲走您全部的疲惫，尽情享受在这里的美好旅程。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "13", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 668
    },
    "comments" : []
}

/* 8 */
{
    "_id" : ObjectId("616be642ed2b27e38c229d55"),
    "types" : "traditionRoom/doubleRooms",
    "info" : {
        "name" : "双床房",
        "price" : 126,
        "desc" : "精致的双床房，满足您各种差旅需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。智能化一键式客房系统，让您的住店更加便捷。Ipod多媒体音响，影视点播，满足您业余时间的娱乐生活",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 163
    },
    "comments" : []
}

/* 9 */
{
    "_id" : ObjectId("616be67fed2b27e38c229d5c"),
    "types" : "traditionRoom/doubleRooms",
    "info" : {
        "name" : "双床房",
        "price" : 126,
        "desc" : "精致的双床房，满足您各种差旅需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。智能化一键式客房系统，让您的住店更加便捷。Ipod多媒体音响，影视点播，满足您业余时间的娱乐生活",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "16", 
                    "00"
                ]
            }
        },
        "sum" : 7,
        "purchasesNum" : 168
    },
    "comments" : []
}

/* 10 */
{
    "_id" : ObjectId("616be6b1ed2b27e38c229d61"),
    "types" : "traditionRoom/doubleRooms",
    "info" : {
        "name" : "双床房",
        "price" : 226,
        "desc" : "精致的双床房，满足您各种差旅需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。智能化一键式客房系统，让您的住店更加便捷。Ipod多媒体音响，影视点播，满足您业余时间的娱乐生活",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "morrow",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 10,
        "purchasesNum" : 268
    },
    "comments" : []
}

/* 11 */
{
    "_id" : ObjectId("616be7c0ed2b27e38c229d7b"),
    "types" : "traditionRoom/singleRooms",
    "info" : {
        "name" : "经济单人床",
        "price" : 88,
        "desc" : "经济实惠的单人床，满足您基本的需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。简约的装饰风格让您有舒适的住房体验。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 196
    },
    "comments" : []
}

/* 12 */
{
    "_id" : ObjectId("616be7e5ed2b27e38c229d82"),
    "types" : "traditionRoom/singleRooms",
    "info" : {
        "name" : "经济单人床",
        "price" : 88,
        "desc" : "（下午）经济实惠的单人床，满足您基本的需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。简约的装饰风格让您有舒适的住房体验。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "16", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 188
    },
    "comments" : []
}

/* 13 */
{
    "_id" : ObjectId("616be842ed2b27e38c229d8f"),
    "types" : "traditionRoom/singleRooms",
    "info" : {
        "name" : "经济单人床",
        "price" : 169,
        "desc" : "经济实惠的单人床，满足您基本的需求。房间免费网络畅游和双线电话，让您的工作畅行无阻。简约的装饰风格让您有舒适的住房体验。",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "morrow",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 8,
        "purchasesNum" : 268
    },
    "comments" : []
}

/* 14 */
{
    "_id" : ObjectId("616bea46ed2b27e38c229dba"),
    "types" : "themeRoom/birthdayRooms",
    "info" : {
        "name" : "生日派对房",
        "price" : 268,
        "desc" : "功能繁多的生日party房，让你的生日不再无聊，叫上你的亲朋好友，一起观影、游戏、diy、烹饪，其乐融融。活泼的装修风格让您眼前一亮！房间免费网络畅游和双线电话，让您娱乐畅行无阻。智能化一键式系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您的娱乐生活。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 2,
        "purchasesNum" : 363
    },
    "comments" : []
}

/* 15 */
{
    "_id" : ObjectId("616bea8bed2b27e38c229dc5"),
    "types" : "themeRoom/birthdayRooms",
    "info" : {
        "name" : "生日派对房",
        "price" : 268,
        "desc" : "功能繁多的生日party房，让你的生日不再无聊，叫上你的亲朋好友，一起观影、游戏、diy、烹饪，其乐融融。活泼的装修风格让您眼前一亮！房间免费网络畅游和双线电话，让您娱乐畅行无阻。智能化一键式系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您的娱乐生活。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "16", 
                    "00"
                ]
            }
        },
        "sum" : 2,
        "purchasesNum" : 369
    },
    "comments" : []
}

/* 16 */
{
    "_id" : ObjectId("616beb14ed2b27e38c229dd3"),
    "types" : "themeRoom/birthdayRooms",
    "info" : {
        "name" : "生日派对房",
        "price" : 512,
        "desc" : "功能繁多的生日party房，让你的生日不再无聊，叫上你的亲朋好友，一起观影、游戏、diy、烹饪，其乐融融。活泼的装修风格让您眼前一亮！房间免费网络畅游和双线电话，让您娱乐畅行无阻。智能化一键式系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您的娱乐生活。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "morrow",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 3,
        "purchasesNum" : 588
    },
    "comments" : []
}

/* 17 */
{
    "_id" : ObjectId("616becabed2b27e38c229df5"),
    "types" : "themeRoom/computerRooms",
    "info" : {
        "name" : "电竞房",
        "price" : 111,
        "desc" : "电竞房（双人），叫上你的亲朋好友，一起畅享刺激的游戏竞技，氛围灯让您的竞技过程更加舒适具有沉浸感，简洁的壁画让您心情舒适。年轻简约的装修风格深受年轻人喜爱！房间免费网络畅游和双线电话。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 213
    },
    "comments" : []
}

/* 18 */
{
    "_id" : ObjectId("616becdaed2b27e38c229e00"),
    "types" : "themeRoom/computerRooms",
    "info" : {
        "name" : "电竞房",
        "price" : 111,
        "desc" : "电竞房（双人），叫上你的亲朋好友，一起畅享刺激的游戏竞技，氛围灯让您的竞技过程更加舒适具有沉浸感，简洁的壁画让您心情舒适。年轻简约的装修风格深受年轻人喜爱！房间免费网络畅游和双线电话。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "16", 
                    "00"
                ]
            }
        },
        "sum" : 5,
        "purchasesNum" : 392
    },
    "comments" : []
}

/* 19 */
{
    "_id" : ObjectId("616bed31ed2b27e38c229e09"),
    "types" : "themeRoom/computerRooms",
    "info" : {
        "name" : "电竞房",
        "price" : 221,
        "desc" : "电竞房（双人），叫上你的亲朋好友，一起畅享刺激的游戏竞技，氛围灯让您的竞技过程更加舒适具有沉浸感，简洁的壁画让您心情舒适。年轻简约的装修风格深受年轻人喜爱！房间免费网络畅游和双线电话。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "morrow",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 7,
        "purchasesNum" : 312
    },
    "comments" : []
}

/* 20 */
{
    "_id" : ObjectId("616bee13ed2b27e38c229e1f"),
    "types" : "themeRoom/filmRooms",
    "info" : {
        "name" : "观影房",
        "price" : 112,
        "desc" : "观影房，让你的闲暇时光不再无聊，叫上你的亲朋好友，一起观影，其乐融融。活泼的装修风格让您眼前一亮！房间免费网络畅游和双线电话，让您娱乐畅行无阻。智能化一键式系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您的娱乐生活。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "08", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            }
        },
        "sum" : 3,
        "purchasesNum" : 412
    },
    "comments" : []
}

/* 21 */
{
    "_id" : ObjectId("616bee3ded2b27e38c229e26"),
    "types" : "themeRoom/filmRooms",
    "info" : {
        "name" : "观影房",
        "price" : 112,
        "desc" : "观影房，让你的闲暇时光不再无聊，叫上你的亲朋好友，一起观影，其乐融融。活泼的装修风格让您眼前一亮！房间免费网络畅游和双线电话，让您娱乐畅行无阻。智能化一键式系统，让您的住店更加便捷。Ipod多媒体音响，VOD高清影视点播，满足您的娱乐生活。！",
        "duration" : {
            "start" : {
                "type" : "today",
                "time" : [ 
                    "12", 
                    "00"
                ]
            },
            "end" : {
                "type" : "today",
                "time" : [ 
                    "16", 
                    "00"
                ]
            }
        },
        "sum" : 3,
        "purchasesNum" : 562
    },
    "comments" : []
}
```

## notice

```
/* 1 */
{
    "_id" : ObjectId("617a855665fa87c9ea9b4db0"),
    "type" : "success",
    "intoTime" : 1635419478180.0,
    "adminInfo" : {
        "nickName" : "Ashun",
        "phone" : "15737082601"
    },
    "content" : "我是Ashun，新的管理员，以后如果联系不上客服，可以直接联系我哦！"
}

/* 2 */
{
    "_id" : ObjectId("617a865665fa87c9ea9b4db2"),
    "type" : "cancel",
    "intoTime" : 1635419734434.0,
    "adminInfo" : {
        "nickName" : "向军",
        "phone" : "15737082602"
    },
    "content" : "我是向军，最高管理员，很高兴与大家见面！",
    "cancelTime" : 1635419769289.0
}

/* 3 */
{
    "_id" : ObjectId("617a8dafc46c1be9ec96aa6a"),
    "type" : "success",
    "intoTime" : 1635421615623.0,
    "adminInfo" : {
        "nickName" : "向军",
        "phone" : "15737082602"
    },
    "content" : "请大家慎重取消订单，这将影响您的信誉！"
}
```

## opinion

```
/* 1 */
{
    "_id" : ObjectId("617a805891f396fa702d600e"),
    "userInfo" : {
        "nickName" : "Ashunefannao",
        "phone" : "15737082601"
    },
    "time" : 1635418200907.0,
    "content" : "感觉不错，再接再厉！！"
}

/* 2 */
{
    "_id" : ObjectId("617a811791f396fa702d6012"),
    "userInfo" : {
        "nickName" : "阿顺特烦恼",
        "phone" : "15737082602"
    },
    "time" : 1635418391970.0,
    "content" : "挺好的，管理人员辛苦了！！！"
}
```

## order

```
/* 1 */
{
    "_id" : ObjectId("617a7eec91f396fa702d5ff7"),
    "type" : "success",
    "buyTime" : 1635417836978.0,
    "adminInfo" : {
        "nickName" : "系统"
    },
    "uid" : "15737082601",
    "goodsId" : "616bea46ed2b27e38c229dba",
    "buySum" : 1
}

/* 2 */
{
    "_id" : ObjectId("617a7ef491f396fa702d5ff8"),
    "type" : "success",
    "buyTime" : 1635417844382.0,
    "adminInfo" : {
        "nickName" : "系统"
    },
    "uid" : "15737082601",
    "goodsId" : "616be7c0ed2b27e38c229d7b",
    "buySum" : 1
}

/* 3 */
{
    "_id" : ObjectId("617a80ac91f396fa702d6010"),
    "type" : "cancel",
    "buyTime" : 1635418284415.0,
    "adminInfo" : {
        "nickName" : "Ashun",
        "phone" : "15737082601"
    },
    "uid" : "15737082602",
    "goodsId" : "616be7c0ed2b27e38c229d7b",
    "buySum" : 1,
    "cancelTime" : 1635419588309.0,
    "reason" : "用户申请原因合理！"
}

/* 4 */
{
    "_id" : ObjectId("617a8c07c46c1be9ec96aa68"),
    "type" : "cancel",
    "buyTime" : 1635421191874.0,
    "adminInfo" : {
        "nickName" : "向军",
        "phone" : "15737082602"
    },
    "uid" : "15737082601",
    "goodsId" : "616be7e5ed2b27e38c229d82",
    "buySum" : 1,
    "cancelTime" : 1635421288767.0,
    "reason" : "用户有急事！"
}
```

## user

```
/* 1 */
{
    "_id" : ObjectId("617a7ec391f396fa702d5ff6"),
    "nickName" : "Ashunefannao",
    "phone" : "15737082601",
    "password" : "ashun",
    "accountInfo" : {
        "money" : 644
    }
}

/* 2 */
{
    "_id" : ObjectId("617a809691f396fa702d600f"),
    "nickName" : "阿顺特烦恼",
    "phone" : "15737082602",
    "password" : "ashun",
    "accountInfo" : {
        "money" : 912
    }
}
```

