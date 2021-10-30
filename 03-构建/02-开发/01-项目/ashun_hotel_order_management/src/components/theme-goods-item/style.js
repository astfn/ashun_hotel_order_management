import styled from "styled-components";

export const GoodsItemWrapper = styled.div`
  margin: 30px;
  width: ${(props) => props.width};
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
    display: flex;
    flex-direction: column;
    .name {
      font-size: 18px;
      font-weight: bold;
    }
    .duration {
      font-size: 13px;
      font-weight: bold;
    }
  }
  &:hover > .img-box > img {
    transform: scale(1.3);
  }
  .img-box {
    width: 100%;
    height: ${(props) => props.height};
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
      margin: 8px 5px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      font-size: 13px;
      color: #333;
      text-indent: 30px;
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
          color: red;
        }
      }
    }
  }
`;
