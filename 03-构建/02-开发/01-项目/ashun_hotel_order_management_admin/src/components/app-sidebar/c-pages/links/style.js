import styled from "styled-components";

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .link-box {
    margin-top: 5px;
  }

  .firstLink-box {
    font-size: 18px;
    height: 70px;
    line-height: 70px;
    .firstLink {
      padding: 0 20px;
      overflow: hidden;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #fff;

      &:hover,
      &.active {
        color: #000;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  .secondLink-box {
    font-size: 13px;
    height: 40px;
    line-height: 40px;

    .secondLink {
      margin-top: 5px;
      margin-left: 40px;
      padding: 0px 15px;
      overflow: hidden;
      display: inline-block;

      text-decoration: none;
      color: #fff;
      border-radius: 15px;
      -webkit-clip-path: polygon(
        0% 20%,
        60% 20%,
        60% 0%,
        100% 50%,
        60% 100%,
        60% 80%,
        0% 80%
      );
      clip-path: polygon(
        0% 20%,
        60% 20%,
        60% 0%,
        100% 50%,
        60% 100%,
        60% 80%,
        0% 80%
      );

      &:hover,
      &.active {
        color: #000;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
