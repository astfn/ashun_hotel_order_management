import styled from "styled-components";

export const OrderWrapper = styled.div`
  padding: 20px 0px;

  .goodsControl {
    width: 100%;
    height: 40px;
    background-color: #5f5f5f;
    .menu {
      width: 450px;
      height: 100%;
      display: flex;
    }
    .link-box {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .link {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
      color: #ddd;

      &:hover > .title,
      &.active > .title {
        color: white;
        background-color: #242424;
      }
      .title {
        padding: 5px 13px;
        font-size: 13px;
        border-radius: 20px;
      }
      .line {
        padding: 0px 12px;
        color: #ccc;
      }
    }
  }
`;
