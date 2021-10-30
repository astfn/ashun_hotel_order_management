import { memo, useState } from "react";
import { withRouter } from "react-router";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { OrderWrapper } from "./style.js";
import ASThemeHeader from "@/components/theme-header";
import ASEmpty from "@/components/empty";
import ASOrderItem from "./order-item";

const ASOrder = (props) => {
  const [cIndex, setCIndex] = useState(0);

  //redux hooks
  const { user, goods } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
      goods: state.getIn(["goods"]).toJS(),
    }),
    shallowEqual
  );

  const { accountInfo } = user;
  const {
    successOrderList = [],
    cancelOrderList = [],
    pendingOrderList = [],
  } = accountInfo;
  //其它业务
  const getGoodsById = (_id) => {
    let allRoom = [];
    Object.values(goods.traditionRoom).map((val) => allRoom.push(...val));
    Object.values(goods.themeRoom).map((val) => allRoom.push(...val));
    const room = allRoom.find((v) => v._id === _id);
    return room;
  };

  //handel event
  const tabControlClick = (index) => {
    setCIndex(index);
  };

  //render 相关
  const controlList = [
    {
      title: "成功",
      list: successOrderList,
    },
    {
      title: "已取消",
      list: cancelOrderList,
    },
    {
      title: "待处理",
      list: pendingOrderList,
    },
  ];

  const renderList = () => {
    if (controlList[cIndex].list.length === 0) {
      return <ASEmpty height="400px" />;
    }
    return (
      <div className="content-box">
        {controlList[cIndex].list.map((order, index) => {
          const room = getGoodsById(order.goodsId);
          return <ASOrderItem key={order._id} order={order} room={room} />;
        })}
      </div>
    );
  };

  return (
    <OrderWrapper>
      <ASThemeHeader title="我的订单" />
      <div className="goodsControl">
        <div className="menu">
          {controlList.map((item, index, arr) => (
            <div className="link-box" key={item.title}>
              <div
                className={classNames("link", { active: cIndex === index })}
                onClick={() => tabControlClick(index)}
              >
                <span className="title">{item.title}</span>
              </div>
              {index !== arr.length - 1 && <span className="line">|</span>}
            </div>
          ))}
        </div>
      </div>
      {renderList()}
    </OrderWrapper>
  );
};

export default withRouter(memo(ASOrder));
