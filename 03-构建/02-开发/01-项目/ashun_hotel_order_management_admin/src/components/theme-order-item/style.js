import styled from "styled-components";

export const ThemeOrderItemWrapper = styled.div`
  width: ${(props) => props.width};
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  .img-box {
    /* height: 160px; */
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 300px;
    }
  }
`;
export const InfoWrapper = styled.div`
  padding-left: 10px;
  flex: 1;

  .room-info {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    .name {
      font-size: 18px;
      font-weight: bold;
    }
    .desc {
      margin-top: 10px;
    }
    .price {
      align-self: flex-end;
    }
  }

  .order-info {
    margin-top: 5px;
    padding: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .line {
      &:nth-of-type(1) {
        margin-bottom: 5px;
      }
      span {
        margin-right: 15px;
        color: #999;
        i {
          color: #666;
        }
      }
    }
    .applyReason {
      width: 500px;
      overflow: hidden;
      textarea {
        padding: 10px;
        width: 100%;
        height: 30px;
        overflow: hidden;
        border-radius: 5px;
        color: #999;
      }
    }

    .operation {
      display: flex;
      justify-content: flex-end;
      .cancelOrderTxt {
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: #5f5f5f;
        }
      }
    }
    .cancelDependent {
      margin-top: 8px;
      display: flex;
      flex-direction: column;

      .reason {
        padding: 10px 20px;
        line-height: 20px;
      }

      .confirm {
        align-self: flex-end;
        margin-top: 8px;
        padding: 5px 10px;
        cursor: pointer;
        color: #fff;
        background-color: var(--color-deep);
        border-radius: 3px;
      }
    }
  }
`;
