import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import moment from "moment";

import ASThemeHeader from "@/components/theme-header";

import { CommentWrapper, ContentWrapper } from "./style.js";
import { Comment, Tooltip, Avatar } from "antd";

import { getUserAvatar } from "@/utils/getUserAvatar.js";

const ASComment = (props) => {
  //redux hooks
  const { room } = useSelector(
    (state) => ({ room: state.getIn(["currentGoods"]) }),
    shallowEqual
  );
  const { comments } = room;
  // console.log(comments);
  //其它 hooks

  return (
    <CommentWrapper>
      <ASThemeHeader title="商品评论" />
      <ContentWrapper>
        {comments.map((item, index) => {
          const { nickName } = item.userInfo;
          return (
            <Comment
              key={item.orderId}
              author={nickName}
              avatar={<Avatar src={getUserAvatar()} alt={nickName} />}
              content={<p>{item.content}</p>}
              datetime={
                <Tooltip title={moment(item.time).format("YY-MM-DD HH:mm:ss")}>
                  <span>{moment(item.time).format("YY-MM-DD")}</span>
                </Tooltip>
              }
            />
          );
        })}
      </ContentWrapper>
    </CommentWrapper>
  );
};

export default memo(ASComment);
