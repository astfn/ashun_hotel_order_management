import styled from "styled-components";

export const NotLoginWeapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f5f6fa;
  .content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin: 10px 0px;
      padding: 10px 50px;

      width: 100%;
      max-width: 300px;

      cursor: pointer;
      border-radius: 2px;
      font-size: 18px;
      color: #fff;
      background-color: var(--text-focal-color);
    }
    span {
      font-size: 14px;
      color: #666;
    }
  }
`;
