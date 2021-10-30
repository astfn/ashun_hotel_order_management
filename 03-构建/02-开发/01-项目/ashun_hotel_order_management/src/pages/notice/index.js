import { memo, useEffect, useState } from "react";
import { withRouter } from "react-router";
import moment from "moment";

import ASThemeHeader from "@/components/theme-header";
import { NoticeWrapper, NoticeItemWrapper, ContentWrapper } from "./style.js";

import { getUserAvatar } from "@/utils/getUserAvatar.js";
import { getNoticeByType } from "@/services/notice";

const ASNotice = (props) => {
  /* 记得封装一个hooks，在组件挂载的时候更新notice */
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    getNoticeByType("success").then((notices) => {
      setNotices(notices);
    });
  }, []);
  console.log(notices);
  return (
    <NoticeWrapper>
      <ASThemeHeader title={"系统公告 📬"} />
      <div className="desc">
        <p>系统的重要公告都会在此发布，感谢大家关注与支持！</p>
      </div>
      <ContentWrapper>
        {notices.map((item, index) => {
          const { _id, adminInfo, intoTime, content } = item;
          const { nickName } = adminInfo;
          return (
            <NoticeItemWrapper key={_id}>
              <div className="admin-info">
                <img src={getUserAvatar()} alt={nickName} />
                <span className="nickName">{nickName}</span>
                <span className="time">
                  {moment(intoTime).format("YYYY-MM-DD HH:mm:ss")}
                </span>
              </div>
              <div className="content-box">
                <span className="notice">{content}</span>
              </div>
            </NoticeItemWrapper>
          );
        })}
      </ContentWrapper>
    </NoticeWrapper>
  );
};

export default withRouter(memo(ASNotice));
