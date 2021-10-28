import { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { PublishWrapper, InputWrapper } from "./style.js";

import { getUserAvatar } from "@/utils/getUserAvatar.js";
import { addNotice } from "@/services/notice";

const ASPublish = (props) => {
  const [notice, setNotice] = useState("");

  /* redux hooks */
  const { admin } = useSelector(
    (state) => ({
      admin: state.getIn(["admin"]),
    }),
    shallowEqual
  );
  const { phone, nickName } = admin;

  // useEffect(() => {
  //   if (!phone) props.history.push("/not-login");
  // }, [phone, props]);

  /* handel Event */
  const handelChange = (e) => {
    setNotice(e.target.value);
  };
  const handelSubmit = async () => {
    if (!notice || notice.trim() === "") {
      alert("不要偷懒哇，填写后再提交哦~");
      return;
    }
    const adminInfo = {
      nickName,
      phone,
    };
    console.log(admin.phone, nickName);

    await addNotice(adminInfo, notice);
    setNotice("");
    alert("发布成功😀！");
  };
  /* render 相关 */
  const rednerInputs = () => {
    return (
      <InputWrapper>
        <div className="avatar-box">
          <img src={getUserAvatar()} alt={"nickName"} />
        </div>
        <div className="input-box">
          <textarea rows={4} value={notice} onChange={(e) => handelChange(e)} />
          <div className="commit-btn" onClick={handelSubmit}>
            确认发布
          </div>
        </div>
      </InputWrapper>
    );
  };

  return (
    <PublishWrapper className="second-wraper">
      <div className="desc">
        <p>你可以在这里发布公告，该公告会公开给用户，请谨慎发布！</p>
      </div>
      {rednerInputs()}
    </PublishWrapper>
  );
};

export default memo(ASPublish);
