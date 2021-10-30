import styled from "styled-components";

export const OpinionWrapper = styled.div``;

export const ContentWrapper = styled.div`
  .desc-box {
    margin: 10px 0px 20px 0px;
    padding: 15px 15px 8px;

    font-size: 13px;
    background-color: #ebf7f2;
    border-left: 5px solid #3eaf7c;
  }
`;

export const ListWrapepr = styled.div``;

export const ItemWrapper = styled.div`
  .admin-info {
    margin: 0px 8px 8px 0px;

    .nickName {
    }
    .phone {
      margin: 0px 8px;
    }
    .time,
    .phone {
      color: #999;
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

    .opinion {
    }
  }
`;
