import styled from "styled-components";

export const LogoWrapper = styled.div`
  padding: 8px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 3px solid skyblue;
  &:hover .logo-box {
    transform: rotate(360deg);
  }
  .logo-box {
    width: 40px;
    height: 40px;
    transition: all.6s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    color: white;
    margin: 0px 10px 0px 5px;
    font-size: 20px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    user-select: none;
  }
`;
