import { memo, useState } from "react";
import { withRouter } from "react-router";
import { shallowEqual, useSelector } from "react-redux";

import ASThemeHeader from "@/components/theme-header";
import { OpinionWrapper, ContentWrapper, InputWrapper } from "./style.js";

import { getUserAvatar } from "@/utils/getUserAvatar.js";
import { addOpinion } from "@/services/opinion";
import { useOfflineJumpLoginPage } from "@/common/hooks";

const ASOpinion = (props) => {
  const [opinion, setOpinion] = useState("");

  /* redux hooks */
  const { user } = useSelector(
    (state) => ({
      user: state.getIn(["user"]),
    }),
    shallowEqual
  );
  const { phone, nickName } = user;

  //其它hooks
  useOfflineJumpLoginPage(props);

  /* handel Event */
  const handelChange = (e) => {
    setOpinion(e.target.value);
  };
  const handelSubmit = async () => {
    if (!opinion || opinion.trim() === "") {
      alert("不要偷懒哇，填写后再提交哦~");
      return;
    }
    await addOpinion(nickName, phone, opinion);
    setOpinion("");
    alert("提交成功，感谢您的建议😀！");
  };

  /* render 相关 */
  const rednerInputs = () => {
    return (
      <InputWrapper>
        <div className="avatar-box">
          <img src={getUserAvatar()} alt={nickName} />
        </div>
        <div className="input-box">
          <textarea
            rows={4}
            value={opinion}
            onChange={(e) => handelChange(e)}
          />
          <div className="commit-btn" onClick={handelSubmit}>
            提交
          </div>
        </div>
      </InputWrapper>
    );
  };
  return (
    <OpinionWrapper>
      <ASThemeHeader title={"意见提交📝"} />
      <ContentWrapper>
        <div className="desc">
          <p>
            对于你的光临，我们感到非常荣幸，你提出的意见也将是我们最宝贵的财富。
          </p>
        </div>
        {rednerInputs()}
      </ContentWrapper>
    </OpinionWrapper>
  );
};

export default withRouter(memo(ASOpinion));
