import styled from "styled-components";

export const LinksWrapper = styled.div`
  min-width: 500px;
  display: flex;
  .link-box {
    height: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 70px;
    position: relative;
    .link {
      padding: 0 30px;
      overflow: hidden;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #ccc;

      &:hover,
      &.active {
        color: #fff;
        background-color: #000;
      }
    }
    .hot {
      position: absolute;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 8px;
      right: -20px;
      width: 40px;
      height: 20px;
      color: #fff;
      background-color: #c20c0c;
      font-size: 12px;
      border-radius: 20px;
      transform: scale(0.7);
    }
  }
`;
