import styled from "styled-components";
import { getUserAvatar } from "@/utils/getUserAvatar.js";

export const PortraitWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .login-box {
    margin: 8px 0 0 30px;
    width: 90px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid rgb(79, 79, 79);
    line-height: 33px;
    text-align: center;
    color: rgb(204, 204, 204);
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      border-color: #fff;
      & > .login {
        color: #fff;
      }
    }
    .login {
      color: #ccc;
      text-decoration: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .user-info {
    margin-left: 20px;
    display: flex;
    align-items: flex-end;
    .nickName {
      max-width: 100px;
      margin: 0px 0px 8px 5px;
      color: #fff;
      font-size: 13px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      background-color: yellowgreen;
      background: url(${getUserAvatar()}) no-repeat 0 0/ 100%;
    }
  }
`;
