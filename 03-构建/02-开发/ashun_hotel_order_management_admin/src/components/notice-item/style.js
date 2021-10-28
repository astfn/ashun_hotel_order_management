import styled from "styled-components";

export const NoticeItemWrapper = styled.div`
  margin: 25px 45px 0px;

  .admin-info {
    margin: 0px 8px 8px 0px;

    .nickName {
      margin-right: 8px;
    }
    .time {
      color: #999;
      &.cancelTime {
        margin-left: 10px;
      }
    }
  }
  .content-box {
    padding: 10px;
    min-height: 100px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ddd;
    background-color: #fff;
    user-select: none;
    cursor: pointer;

    transition: 0.6s;
    &:hover {
      box-shadow: 0px 0px 5px 0px var(--color-shallow);
    }

    .notice {
    }
  }

  .operate-box {
    display: flex;
    justify-content: flex-end;
    .cancel-btn {
      margin: 10px 0px;
      padding: 8px 18px;
      font-size: 13px;
      border-radius: 5px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      background-color: var(--color-shallow);

      transition: 0.6s;
      &:hover {
        box-shadow: 0px 0px 5px 0px var(--color-shallow);
      }
    }
  }
`;
