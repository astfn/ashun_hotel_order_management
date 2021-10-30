import styled from "styled-components";

export const HotRoomWrapper = styled.div`
  .content-box {
    margin: 0 auto;
    width: 1200px;
    padding: 10px;
    background-color: #f5f6fa;
    border-left: 1px solid #e1e1e1;
    border-right: 1px solid #d3d3d3;
  }
`;

export const RoomItem = styled.div`
  margin: 30px auto;
  width: 1000px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.1);

  transition: box-shadow 0.6s;
  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  }
  .top {
    text-align: center;
    padding: 8px 0px;
    .name {
      font-size: 18px;
      font-weight: bold;
    }
  }
  &:hover > .img-box > img {
    transform: scale(1.3);
  }
  .img-box {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    img {
      width: 100%;
      transition: 0.6s;
    }
  }

  .info-box {
    .desc {
      font-size: 13px;
      color: #333;
      padding: 8px 5px;
      margin: 0px;
    }

    .important-info {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      .price,
      .purchasesNum,
      .sum {
        font-size: 14px;
        margin: 0px 5px;
        i {
          color: var(--text-focal-color);
        }
      }
    }
  }
`;
