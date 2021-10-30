import styled from "styled-components";

export const RoomInfoWrapper = styled.div``;

export const ContentWrapper = styled.div`
  margin: 30px 5px;
  padding: 20px 5px;
  display: flex;
  align-items: center;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.3),
    inset -5px -5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  .pre-carousel-box {
    width: 500px;
  }

  .info-box {
    flex: 1;
    padding: 0px 12px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .important-info {
        display: flex;
        flex-direction: column;
        span {
          font-size: 18px;
          color: #333;
          margin: 5px 0px;
          i {
            margin-left: 3px;
            font-size: 16px;
            font-weight: bold;
            color: var(--text-focal-color);
          }
        }
      }
      .other-info {
        margin: 5px 0px;

        span {
          font-size: 18px;
          color: #333;
          i {
            margin-left: 5px;
            font-size: 16px;
            font-weight: bold;
          }
          &:nth-of-type(n + 2) {
            margin-left: 10px;
          }
        }
      }
      .desc-box {
        span {
          display: inline-block;
          margin: 8px 0px;
          font-size: 18px;
          color: #333;
        }
        .desc {
          font-size: 14px;
        }
      }
    }

    .disable-btn,
    .buy-btn {
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      background-color: var(--text-focal-color);
      color: #fff;
    }
    .disable-btn {
      background-color: #aaa;
    }

    .buy-box {
      display: flex;

      .counter-box {
        .sub,
        .add {
          padding: 8px 10px;
          border-radius: 3px;
          background-color: #eee;
          cursor: pointer;
        }
        .counter {
          padding: 0px 5px;
          font-size: 13px;
        }
      }
      .buy-btn {
        flex: 1;
        margin-left: 5px;
      }
    }
  }
`;
