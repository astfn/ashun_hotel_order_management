import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 172px;
  border-top: 1px solid #d3d3d3;
  .content {
    height: 115px;
    padding-top: 13px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .left {
    line-height: 24px;
    color: #666;
    .servers {
      display: flex;
      flex-direction: row;
      a,
      .line {
        color: #999;
      }
      .line {
        margin: 0px 8px 0px 10px;
      }
    }
    .copyright > span:nth-of-type(2n-1),
    .report > span:nth-of-type(2n-1),
    .archives > span:nth-of-type(2n-1) {
      margin-right: 16px;
    }
  }

  .right {
    display: flex;
    justify-content: space-around;
  }
`;
