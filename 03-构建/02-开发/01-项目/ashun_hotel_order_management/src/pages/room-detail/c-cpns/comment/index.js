import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import moment from "moment";

import ASThemeHeader from "@/components/theme-header";

import { CommentWrapper, ContentWrapper } from "./style.js";
import ASEmpty from "@/components/empty";
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

  const renderCommentList = () => {
    if (comments.length === 0) {
      return <ASEmpty height="500px" />;
    }
    return (
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
    );
  };
  return (
    <CommentWrapper>
      <ASThemeHeader title="商品评论" />
      {renderCommentList()}
    </CommentWrapper>
  );
};

export default memo(ASComment);
