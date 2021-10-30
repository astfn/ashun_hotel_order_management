import { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { OrderItemWrapper, InfoWrapper } from "./style.js";

import { getRoomImages } from "@/utils/getRoomImages.js";
import {
  formatShowPrice,
  formatShowDuration,
  formatShowOrderStatus,
} from "@/utils/format.js";
import { getApplyByOrderId, addApplyCancel } from "@/services/applyCancelOrder";
import { getCommentByOrderId, addComment } from "@/services/comment";
import moment from "moment";

const ASOrderItem = (props) => {
  const [isCancel, setIsCancel] = useState(false);
  const [applyReason, setApplyReason] = useState("");

  const [isComment, setIsComment] = useState(false);
  const [commentTxt, setCommentTxt] = useState("");

  //props 数据
  const { order, room } = props;
  const { adminInfo, buySum, buyTime, cancelTime, type, _id, applyTime } =
    order;
  const { types, info } = room;

  /* redux hooks */
  const { user } = useSelector(
    (state) => ({ user: state.getIn(["user"]) }),
    shallowEqual
  );

  /* handel event */

  //取消订单申请
  const applyCancel = async () => {
    if (!applyReason || applyReason.trim() === "") {
      alert("不要偷懒，请填写理由😑！");
      return;
    }
    try {
      const result = await getApplyByOrderId(_id);
      if (result._id) {
        alert("请不要重复发送该订单申请😑！");
        //内容置空
        setIsCancel(false);
        setApplyReason("");
        return;
      }
      await addApplyCancel(_id, applyReason);
      alert("发送申请成功，请等待管理员处理😀");
      //内容置空
      setIsCancel(false);
      setApplyReason("");
    } catch (error) {
      return error;
    }
  };

  //提交评论
  const commitComment = async () => {
    if (!commentTxt || commentTxt.trim() === "") {
      alert("不要偷懒，请填写评论内容😑！");
      return;
    }
    try {
      const result = await getCommentByOrderId(_id);
      if (result._id) {
        alert("您已评论过该订单咯😑！");
        //内容置空
        setIsComment(false);
        setCommentTxt("");
        return;
      }
      await addComment(room._id, user.phone, _id, commentTxt);
      alert("感谢您的评论😀");
      //内容置空
      setIsComment(false);
      setCommentTxt("");
    } catch (error) {
      return error;
    }
  };

  /* render 相关 */

  //取消订单相关
  const renderCancelBtn = () => {
    if (type === "success") {
      return (
        <span
          className="cancelOrderTxt"
          onClick={() => {
            setIsCancel(!isCancel);
            setIsComment(false);
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
          value={applyReason}
          onChange={(e) => setApplyReason(e.target.value)}
        />
        <div className="confirm" onClick={applyCancel}>
          发送请求
        </div>
      </div>
    );
  };

  //添加评论相关
  const renderCommentBtn = () => {
    if (type === "success") {
      return (
        <span
          className="commentOrderTxt"
          onClick={() => {
            setIsComment(!isComment);
            setIsCancel(false);
          }}
        >
          评论
        </span>
      );
    }
    return null;
  };

  const renderCommentDependent = () => {
    return (
      <div className="commentDependent">
        <textarea
          className="comment"
          placeholder="请输入评论内容"
          value={commentTxt}
          onChange={(e) => setCommentTxt(e.target.value)}
        />
        <div className="confirm" onClick={commitComment}>
          确认提交
        </div>
      </div>
    );
  };

  return (
    <OrderItemWrapper>
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
          <div className="line">
            <span className="buySum">
              购买数量: <i>{buySum}</i>
            </span>
            <span className="buyTime">
              购买时间: <i>{moment(buyTime).format("YYYY-MM-DD HH:mm:ss")}</i>
            </span>
            <span className="type">
              订单状态: <i>{formatShowOrderStatus(type)}</i>
            </span>
          </div>
          <div className="line">
            <span className="type">
              订单编号: <i>{_id}</i>
            </span>
            <span className="adminName">
              处理人: <i>{adminInfo.nickName}</i>
            </span>
            {adminInfo.phone && (
              <span className="adminPhone">
                联系方式: <i>{adminInfo.phone}</i>
              </span>
            )}
          </div>
          <div className="line">
            {applyTime && (
              <span className="applyTime">
                申请时间:{" "}
                <i>{moment(applyTime).format("YYYY-MM-DD HH:mm:ss")}</i>
              </span>
            )}
          </div>
          <div className="line applyReason">
            {order.applyReason && (
              <span>
                申请理由:{" "}
                <textarea readOnly value={order.applyReason}></textarea>
              </span>
            )}
          </div>
          <div className="line">
            {cancelTime && (
              <span className="cancelTime">
                撤销时间:{" "}
                <i>{moment(cancelTime).format("YYYY-MM-DD HH:mm:ss")}</i>
              </span>
            )}
          </div>
          <div className="line operation">
            {renderCancelBtn()}
            {renderCommentBtn()}
          </div>
          {isCancel && renderCancelDependent()}
          {isComment && renderCommentDependent()}
        </div>
      </InfoWrapper>
    </OrderItemWrapper>
  );
};

export default memo(ASOrderItem);
