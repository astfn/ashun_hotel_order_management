import styled from "styled-components";

export const OnlineBookdingWrapper = styled.div``;

export const TopMenu = styled.div`
  width: 100%;
  height: 40px;
  background-color: #c20c0c;
  .menu-content {
    margin-top: -5px;
    margin-left: 250px;
    width: 300px;
    height: 100%;
    display: flex;

    .link {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      text-decoration: none;

      &:hover > span,
      &.active > span {
        background-color: #9b0909;
      }
      span {
        padding: 5px 13px;
        font-size: 13px;
        border-radius: 20px;
      }
    }
  }

  .carousel-wrapper {
    width: 100%;
    height: 200px;
  }
`;
