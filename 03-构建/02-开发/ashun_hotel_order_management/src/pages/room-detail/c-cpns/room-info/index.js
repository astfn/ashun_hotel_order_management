import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RoomInfoWrapper, ContentWrapper } from "./style.js";
import ASCarousel from "@/components/basis-image-carousel";
import ASThemeHeader from "@/components/theme-header";

import { getRoomImages } from "@/utils/getRoomImages.js";
import { formatShowPrice, formatShowDuration } from "@/utils/format.js";
import { useBuyCounter, useUpdateGoodsByCurrentGoods } from "@/common/hooks";
import {
  changeUserMoney_thunk,
  changeAddUserOrder_thunk,
} from "@/store/user/actionCreators.js";
import { changeCurrentRoomAction } from "@/store/currentGoods/actionCreators.js";
import { changeGoodsSum } from "@/services/goods";

const ASRoomInfo = (props) => {
  //redux hooks
  const dispatch = useDispatch();
  const { user, room } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
      room: state.getIn(["currentGoods"]),
    }),
    shallowEqual
  );
  const { phone, accountInfo } = user;
  const { types, info, _id } = room;

  const [counter, addCounter, subCounter] = useBuyCounter(1, info.sum);

  //handel
  const handleBuy = async () => {
    if (!phone) {
      alert("登陆后才可下订单哦😀！");
      return;
    }
    if (accountInfo.money < info.price) {
      alert("账户余额不足，快去个人中心充值吧😓");
      return;
    }
    const sumMney = counter * info.price;
    //更新用户数据
    dispatch(changeUserMoney_thunk(phone, -sumMney));
    dispatch(changeAddUserOrder_thunk(phone, _id, counter));
    //更新商品数据
    const newRoom = await changeGoodsSum(_id, -counter);
    dispatch(changeCurrentRoomAction(newRoom));
    alert("购买成功😀！");
  };
  //其它 hooks
  useUpdateGoodsByCurrentGoods();

  //render 相关
  const renderInfo = () => (
    <div className="info">
      <div className="important-info">
        <span className="duration">
          住房时间:<i>{formatShowDuration(info.duration)}</i>
        </span>
        <span className="price">
          价格:<i>{formatShowPrice(info.price)}</i>
        </span>
      </div>
      <div className="other-info">
        <span className="purchasesNum">
          销售量:<i>{info.purchasesNum}</i>
        </span>
        <span className="sum">
          剩余:<i>{info.sum}</i>
        </span>
        <div className="desc-box">
          <span>商品描述:</span>
          <p className="desc">{info.desc}</p>
        </div>
      </div>
    </div>
  );

  const renderBuyBtn = () => {
    if (info.sum <= 0) {
      return <div className="disable-btn">商品已售完</div>;
    }
    return (
      <div className="buy-box">
        <div className="counter-box">
          <button className="sub" onClick={subCounter}>
            -
          </button>
          <span className="counter">{counter}</span>
          <button className="add" onClick={addCounter}>
            +
          </button>
        </div>
        <div className="buy-btn" onClick={handleBuy}>
          购买
        </div>
      </div>
    );
  };
  return (
    <RoomInfoWrapper>
      <ASThemeHeader title={info.name} />
      <ContentWrapper>
        <div className="left">
          <div className="pre-carousel-box">
            <ASCarousel list={getRoomImages(types)} height="300px" />
          </div>
        </div>
        <div className="info-box">
          {renderInfo()}
          {renderBuyBtn()}
        </div>
      </ContentWrapper>
    </RoomInfoWrapper>
  );
};

export default memo(ASRoomInfo);
