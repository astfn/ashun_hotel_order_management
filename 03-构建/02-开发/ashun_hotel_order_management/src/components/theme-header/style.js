import styled from "styled-components";

const themeColor = "#c10d0c";
export const ThemeHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  border-bottom: 2px solid ${themeColor};

  .pre-icon {
    margin: 0px 10px;
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${themeColor};
    &::before {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background-color: #fff;
    }
  }
  .content {
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left {
      .title {
        margin: 0px;
      }
    }
    .right {
      font-size: 13px;
      cursor: pointer;
      .more {
        color: #666;
        &:hover {
          text-decoration: underline;
        }
      }
      .more-icon {
        color: ${themeColor};
        margin-left: 5px;
      }
    }
  }
`;
