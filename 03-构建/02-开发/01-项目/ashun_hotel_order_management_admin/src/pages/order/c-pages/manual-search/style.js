import styled from "styled-components";

export const ManualSearchWrapper = styled.div`
  .title-box {
    margin-top: 10px;
    font-size: 15px;
    span {
      padding: 0px 150px 5px 0px;
      border-bottom: 1px solid var(--color-shallow);
    }
  }
`;

export const SearchBox = styled.div`
  .input-box {
    display: flex;
    align-items: center;
    input {
      padding: 0px 15px;
      width: 300px;
      height: 50px;
      font-size: 20px;

      border: 1px solid var(--color-shallow);
      background-color: #fff;
      transition: 0.6s;
      &:focus {
        box-shadow: 0px 0px 5px 0px var(--color-shallow);
      }
    }
    button {
      margin: 3px 0px 0px 10px;
      padding: 8px 20px;
      font-size: 14px;

      cursor: pointer;
      border-radius: 5px;
      background-color: var(--color-shallow);
      color: #fff;
      transition: 0.6s;
      &:hover {
        box-shadow: 0px 0px 5px 0px var(--color-deep);
      }
    }
  }
  .desc-box {
    margin: 10px 0px 0px 0px;
    padding: 15px 15px;

    font-size: 13px;
    background-color: #ebf7f2;
    border-left: 5px solid #3eaf7c;
  }
`;

export const FilterDataBox = styled.div``;
