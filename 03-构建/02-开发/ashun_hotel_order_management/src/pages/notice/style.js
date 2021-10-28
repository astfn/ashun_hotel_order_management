import styled from "styled-components";
const themeColor = "#e60026";

export const NoticeWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  min-height: 450px;
  padding: 30px 15px;
  background-color: #f5f6fa;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #d3d3d3;

  .desc {
    margin: 10px 15px;
    margin-bottom: 30px;
    font-size: 14px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 30px 15px;
`;

export const NoticeItemWrapper = styled.div`
  .admin-info {
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .nickName {
      margin: 0px 8px;
    }
    .time {
      color: #999;
    }
  }
  .content-box {
    margin: 5px 45px;
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
      box-shadow: 0px 0px 5px 0px ${themeColor};
    }

    .notice {
    }
  }
`;
