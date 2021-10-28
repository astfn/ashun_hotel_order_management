import styled from "styled-components";

export const AllWrapper = styled.div`
  .desc-box {
    margin: 10px 0px 0px 0px;
    padding: 15px 15px;

    font-size: 13px;
    background-color: #ebf7f2;
    border-left: 5px solid #3eaf7c;
  }
`;

export const MenuWrapper = styled.div`
  height: 65px;
  background-color: var(--color-deep);
  .menu-content {
    display: flex;
    background-color: var(--color-shallow);
    .link-box {
      padding: 5px 30px;

      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      user-select: none;
      -webkit-clip-path: polygon(50% 100%, 5% 0, 95% 0);
      clip-path: polygon(50% 100%, 5% 0, 95% 0);

      transition: 0.6s;
      &.active {
        margin-top: 10px;
        color: var(--color-deep);
        background-color: var(--color-deep);
      }

      .link {
        font-size: 14px;
        padding: 5px 10px;
        background-color: white;
      }
    }
  }
`;

export const ContentWrapper = styled.div``;
