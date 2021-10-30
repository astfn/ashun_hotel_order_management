import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import moment from "moment";

import {
  OpinionWrapper,
  ContentWrapper,
  ListWrapepr,
  ItemWrapper,
} from "./style.js";
import ASThemeHeader from "@/components/theme-header";

import { updateAllOpinionAction_thunk } from "@/store/opinion/actionCreators.js";
import { useOfflineJumpLoginPage } from "@/common/hooks";

const ASOpinion = (props) => {
  /* redux hooks */
  const dispatch = useDispatch();
  const { opinion } = useSelector(
    (state) => ({
      opinion: state.getIn(["opinion"]),
    }),
    shallowEqual
  );

  /* 其它 hooks */
  useOfflineJumpLoginPage(props);

  useEffect(() => {
    dispatch(updateAllOpinionAction_thunk());
  }, [dispatch]);
  console.log(opinion);

  /* render相关 */
  const renderList = () => {
    return (
      <ListWrapepr>
        {opinion &&
          opinion.map((item, index) => {
            const { _id, userInfo, time, content } = item;
            const { nickName, phone } = userInfo;
            return (
              <ItemWrapper key={_id}>
                <div className="admin-info">
                  <span className="nickName">{nickName}</span>
                  <span className="phone">联系电话: {phone}</span>
                  <span className="time">
                    投递时间: {moment(time).format("YYYY-MM-DD HH:mm:ss")}
                  </span>
                </div>
                <div className="content-box">
                  <span className="opinion">{content}</span>
                </div>
              </ItemWrapper>
            );
          })}
      </ListWrapepr>
    );
  };
  return (
    <OpinionWrapper>
      <ASThemeHeader title="意见箱" />
      <ContentWrapper className="second-wraper">
        <div className="desc-box">
          <p>这里将统一展示用户发送的意见，可根据联系方式给予用户反馈！</p>
        </div>
        {renderList()}
      </ContentWrapper>
    </OpinionWrapper>
  );
};

export default withRouter(memo(ASOpinion));
