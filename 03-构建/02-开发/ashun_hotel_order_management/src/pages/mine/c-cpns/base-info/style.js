import styled from "styled-components";

export const BaseInfoWrapper = styled.div`
  display: flex;
  padding: 15px 10px;
  background-color: #f7f7f7;
  .avatar {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    border-radius: 50%;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
    img {
      width: 100%;
    }
  }
  .info-box {
    width: 200px;
    font-size: 13px;
    padding: 10px 0px 0px 15px;
    color: #0c73c2;
    .prev-txt {
      color: #999;
    }
    .money-box {
      p {
        margin: 0;
      }
      .recharge {
        margin: 5px 0px 15px 0px;
        padding: 5px 0px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        background-color: var(--text-focal-color);
      }
    }
  }
`;
