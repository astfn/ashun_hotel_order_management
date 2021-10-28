import { memo } from "react";
import moment from "moment";

import { NoticeItemWrapper } from "./style.js";
import { Modal } from "antd";

import { cancelNotice } from "@/services/notice";

const ASNoticeItem = (props) => {
  const { noticeInfo } = props;
  const { _id, type, adminInfo, intoTime, cancelTime, content } = noticeInfo;
  const { nickName } = adminInfo;

  /* handle Event */

  const handelCancelNotice = (noticeId, adminInfo) => {
    const cancel = async () => {
      await cancelNotice(noticeId, adminInfo);
      console.log("确认取消");
      Modal.confirm({
        title: "撤销成功！",
      });
    };
    Modal.confirm({
      title: "您确认要撤销该公告吗？请谨慎选择！",
      cancelText: "取消",
      okText: "确认",
      onOk: cancel,
    });
  };

  return (
    <NoticeItemWrapper>
      <div className="admin-info">
        <span className="nickName">{nickName}</span>
        <span className="time">
          发布时间: {moment(intoTime).format("YYYY-MM-DD HH:mm:ss")}
        </span>
        {cancelTime && (
          <span className="time cancelTime">
            撤销时间: {moment(cancelTime).format("YYYY-MM-DD HH:mm:ss")}
          </span>
        )}
      </div>
      <div className="content-box">
        <span className="notice">{content}</span>
      </div>
      {type === "success" && (
        <div className="operate-box">
          <button
            className="cancel-btn"
            onClick={() => {
              handelCancelNotice(_id, adminInfo);
            }}
          >
            撤销
          </button>
        </div>
      )}
    </NoticeItemWrapper>
  );
};

export default memo(ASNoticeItem);
