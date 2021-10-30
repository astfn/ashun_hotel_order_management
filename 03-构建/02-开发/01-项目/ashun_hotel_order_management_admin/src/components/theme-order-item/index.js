import { memo, useEffect, useState } from "react";

import { ThemeOrderItemWrapper, InfoWrapper } from "./style.js";

import { getRoomImages } from "@/utils/getRoomImages.js";
import { cancelOrder } from "@/services/order";
import {
  formatShowPrice,
  formatShowDuration,
  formatShowOrderStatus,
} from "@/utils/format.js";
import moment from "moment";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";

const ASThemeOrderItem = (props) => {
  const [isCancel, setIsCancel] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  //props 数据
  const { order, room, user, width = "", cancelCallback } = props;
  const { adminInfo, buySum, buyTime, type, _id, applyReason, applyTime } =
    order;
  const { types, info } = room;
  const { phone, nickName } = user;
  /* redux hooks*/
  const { admin } = useSelector(
    (state) => ({ admin: state.getIn(["admin"]) }),
    shallowEqual
  );
  /* 其它 hooks */
  useEffect(() => {
    //若数据变更前，订单的reason表单处于打开状态，数据变更后，该组件并不会卸载，因此会导致reason依然处于打开状态，数据变更时set为false即可
    setIsCancel(false);
  }, [order]);
  /* handel event */

  //取消订单申请
  const handleCancelOrder = async () => {
    if (!cancelReason || cancelReason.trim() === "") {
      alert("不要偷懒，请填写理由😑！");
      return;
    }
    try {
      const cancelAdminInfo = {
        nickName: admin.nickName,
        phone: admin.phone,
      };
      const result = await cancelOrder(_id, cancelAdminInfo, cancelReason);
      console.log(result);
      alert("取消订单成功😀！");
      //内容置空
      setIsCancel(false);
      setCancelReason("");
      cancelCallback && cancelCallback();
    } catch (error) {
      return error;
    }
  };

  /* render 相关 */

  //取消订单相关
  const renderCancelBtn = () => {
    if (type === "pending") {
      return (
        <span
          className="cancelOrderTxt"
          onClick={() => {
            setIsCancel(!isCancel);
          }}
        >
          取消订单
        </span>
      );
    }
    return null;
  };

  const renderCancelDependent = () => {
    return (
      <div className="cancelDependent">
        <textarea
          className="reason"
          placeholder="请输入取消订单的理由"
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)}
        />
        <div className="confirm" onClick={handleCancelOrder}>
          确认取消
        </div>
      </div>
    );
  };

  return (
    <ThemeOrderItemWrapper width={width}>
      <div className="img-box">
        <img src={getRoomImages(types)[0]} alt={info.name} />
      </div>
      <InfoWrapper>
        <div className="room-info">
          <span className="name">{info.name}</span>
          <span className="duration">{formatShowDuration(info.duration)}</span>
          <p className="desc">{info.desc}</p>
          <span className="price">
            价格: <i>{formatShowPrice(info.price)}</i>
          </span>
        </div>
        <div className="order-info">
          <div className="line user-info">
            <span className="nickName">
              用户名: <i>{nickName}</i>
            </span>
            <span className="phone">
              联系电话: <i>{phone}</i>
            </span>
          </div>
          <div className="line">
            <span className="buySum">
              购买数量: <i>{buySum}</i>
            </span>
            <span className="buyTime">
              购买时间: <i>{moment(buyTime).format("YYYY/MM/DD_HH:mm:ss")}</i>
            </span>
            <span className="type">
              订单状态: <i>{formatShowOrderStatus(type)}</i>
            </span>
          </div>
          <div className="line">
            <span className="type">
              订单编号: <i>{_id}</i>
            </span>
            <span className="adminInfo">
              处理人: <i>{adminInfo.nickName}</i>
            </span>
            <div className="line">
              {applyTime && (
                <span className="applyTime">
                  申请时间:{" "}
                  <i>{moment(applyTime).format("YYYY-MM-DD HH:mm:ss")}</i>
                </span>
              )}
            </div>
            <div className="line applyReason">
              {applyReason && (
                <span>
                  申请理由: <textarea readOnly value={applyReason}></textarea>
                </span>
              )}
            </div>
          </div>
          <div className="line operation">{renderCancelBtn()}</div>
          {isCancel && renderCancelDependent()}
        </div>
      </InfoWrapper>
    </ThemeOrderItemWrapper>
  );
};

export default memo(ASThemeOrderItem);
