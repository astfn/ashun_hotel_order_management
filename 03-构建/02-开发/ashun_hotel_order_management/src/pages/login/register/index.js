import { memo, useState } from "react";
import { withRouter } from "react-router-dom";

import { LoginWrapper } from "./style.js";

import { addUser, getUser } from "@/services/user";
import { setFormState } from "@/utils/setFormState.js";

const ASLogin = (props) => {
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const FormStates = [
    { name: "nickName", setState: setNickName },
    { name: "phone", setState: setPhone },
    { name: "password", setState: setPassword },
  ];
  /* 其他业务 */
  const handelChangeForm = (e) => {
    setFormState(e.target.name, FormStates, e.target.value);
  };
  const handleRegister = () => {
    //判断输入信息
    if (!nickName || !phone || !password) {
      alert("不要偷懒哦，请填完所有信息😀");
      return;
    }
    const isPhoneReg = /\d{11}/;
    if (!isPhoneReg.test(phone)) {
      alert("请填写正确的手机号码🤔");
      return;
    }
    const user = {
      nickName,
      phone,
      password,
      accountInfo: {
        money: 0,
      },
    };
    //用户不存在，方可注册
    getUser(phone).then(
      (data) => {
        // console.log(data);
        let isRepeat = data ? true : false;
        if (isRepeat) {
          alert("该手机号已经被注册，换个试试吧😀");
        } else {
          addUser(user).then(
            (res) => {
              alert("注册成功，快去登陆吧😀");
              props.history.replace("/login");
            },
            (err) => err
          );
        }
      },
      (err) => err
    );
  };
  /* render相关 */
  const renderForm = () => {
    return (
      <form>
        <div className="rows">
          <div className="columns label">用户名</div>
          <div className="columns input">
            <input
              value={nickName}
              onChange={(e) => handelChangeForm(e)}
              type="text"
              name="nickName"
              placeholder="请输入用户名"
            />
          </div>
        </div>
        <div className="rows">
          <div className="columns label">手机号</div>
          <div className="columns input">
            <input
              value={phone}
              onChange={(e) => handelChangeForm(e)}
              type="text"
              name="phone"
              placeholder="请输入手机号"
            />
          </div>
        </div>
        <div className="rows">
          <div className="columns label">密码</div>
          <div className="columns input">
            <input
              value={password}
              onChange={(e) => handelChangeForm(e)}
              type="password"
              name="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div className="rows">
          <div className="btnBox">
            <button type="button" onClick={handleRegister}>
              注册
            </button>
          </div>
        </div>
      </form>
    );
  };
  return (
    <LoginWrapper>
      <div id="loginBox">
        <header></header>
        <strong>AshunHotel</strong>
        {renderForm()}
      </div>
    </LoginWrapper>
  );
};

export default withRouter(memo(ASLogin));
