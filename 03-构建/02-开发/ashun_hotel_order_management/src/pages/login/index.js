import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { withRouter } from "react-router";

import { LoginWrapper } from "./style.js";

import { getUser } from "@/services/user";
import { setFormState } from "@/utils/setFormState.js";
import { useLocalStorange } from "@/common/hooks";
import { updateUserAction } from "@/store/user/actionCreators.js";

const ASLogin = (props) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  /* redux hooks */
  const dispatch = useDispatch();
  const { user_store } = useSelector(
    (state) => ({ user_store: state.getIn(["user"]) }),
    shallowEqual
  );

  /* 其它hook */
  const [localStorageUser, setLocalStorageUser] = useLocalStorange("user");

  useEffect(() => {
    if (localStorageUser && localStorageUser.phone !== user_store.phone) {
      dispatch(updateUserAction(localStorageUser));
      console.log(localStorageUser);
    }
  }, [dispatch, localStorageUser, user_store]);

  /* 其他业务 */
  const FormStates = [
    { name: "phone", setState: setPhone },
    { name: "password", setState: setPassword },
  ];
  const handelChangeForm = (e) => {
    setFormState(e.target.name, FormStates, e.target.value);
  };

  const handleLogin = () => {
    if (user_store.phone === phone) {
      alert("您已经在登录状态啦！");
      return;
    }
    getUser(phone).then(
      (user) => {
        if (!user) {
          alert("账号错误😣");
          return;
        } else {
          if (user.password !== password) {
            alert("密码错啦，好好想想🧠");
            return;
          }
          setLocalStorageUser(user);

          alert("登陆成功😀");
          props.history.replace("/");
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
          <div className="columns label">手机号</div>
          <div className="columns input">
            <input
              value={phone}
              onChange={(e) => handelChangeForm(e)}
              name="phone"
              type="text"
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
              name="password"
              type="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div className="rows">
          <div className="btnBox">
            <button type="button" onClick={handleLogin}>
              登录
            </button>
          </div>
          <span
            className="register"
            onClick={() => {
              props.history.replace("/register");
            }}
          >
            注册
          </span>
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
