import { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { withRouter } from "react-router";

import { LoginWrapper } from "./style.js";

import { getAdmin } from "@/services/admin";
import { setFormState } from "@/utils/setFormState.js";
import {
  useLocalStorange,
  useUpdateStoreByLocalStorangeAdmin,
} from "@/common/hooks";

const ASLogin = (props) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  /* redux hooks */
  const { admin } = useSelector(
    (state) => ({ admin: state.getIn(["admin"]) }),
    shallowEqual
  );

  /* 其它hook */
  const [, setLocalStorageAdmin] = useLocalStorange("admin");
  useUpdateStoreByLocalStorangeAdmin();

  /* 其他业务 */
  const FormStates = [
    { name: "phone", setState: setPhone },
    { name: "password", setState: setPassword },
  ];
  const handelChangeForm = (e) => {
    setFormState(e.target.name, FormStates, e.target.value);
  };

  const handleLogin = () => {
    if (admin.phone === phone) {
      alert("您已经在登录状态啦！");
      return;
    }
    getAdmin(phone).then(
      (admin) => {
        if (!admin) {
          alert("账号错误😣");
          return;
        } else {
          if (admin.password !== password) {
            alert("密码错啦，好好想想🧠");
            return;
          }
          setLocalStorageAdmin(admin);

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
