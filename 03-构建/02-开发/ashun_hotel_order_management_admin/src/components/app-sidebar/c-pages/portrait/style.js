import styled from "styled-components";

export const PortraitWrapper = styled.div``;

export const InfoWrapper = styled.div`
  margin: 15px 0px 8px 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .avatar-box {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    overflow: hidden;
  }
  .info-box {
    flex: 1;
    margin: 5px 0px 0px 5px;
    display: flex;
    flex-direction: column;
    .nickName,
    .phone {
      margin: 0px 0px 8px 5px;
      font-size: 13px;
      color: #ddd;
      i {
        color: #fff;
      }
    }
  }
`;
export const LoginWrapper = styled.div`
  .login-btn {
    margin: 15px 20px 15px 15px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: var(--color-deep);
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    -webkit-clip-path: polygon(
      75% 0%,
      100% 50%,
      75% 100%,
      0% 100%,
      25% 50%,
      0% 0%
    );
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  }
`;
