import styled from "styled-components";

const themeColor = "#e60026";

export const OpinionWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  min-height: 450px;
  padding: 30px 15px;
  background-color: #f5f6fa;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #d3d3d3;
`;
export const ContentWrapper = styled.div`
  padding: 30px 15px;

  .desc {
    margin-bottom: 30px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  .avatar-box {
    width: 45px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .input-box {
    flex: 1;
    margin-left: 15px;
    textarea {
      padding: 10px;
      width: 100%;
      border: 1px solid #ddd;
      background-color: #fff;

      transition: 0.6s;
      &:focus {
        box-shadow: 0px 0px 5px 0px ${themeColor};
      }
    }
  }

  .commit-btn {
    margin: 20px 0px;
    padding: 8px 16px;
    width: 100px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background-color: ${themeColor};

    transition: 0.6s;
    &:hover {
      box-shadow: 0px 0px 5px 0px ${themeColor};
    }
  }
`;
