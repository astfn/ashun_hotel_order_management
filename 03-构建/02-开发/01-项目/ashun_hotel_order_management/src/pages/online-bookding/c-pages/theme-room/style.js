import styled from "styled-components";

export const ThemeRoomWrapper = styled.div``;
export const TopMenu = styled.div`
  width: 100%;
  height: 40px;
  background-color: #5f5f5f;
  .menu-content {
    margin-left: 250px;
    width: 450px;
    height: 100%;
    display: flex;
  }
  .link-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ddd;

    &:hover > .title,
    &.active > .title {
      color: white;
      background-color: #242424;
    }
    .title {
      padding: 5px 13px;
      font-size: 13px;
      border-radius: 20px;
    }
    .line {
      padding: 0px 12px;
      color: #ccc;
    }
  }
`;
