import styled from "styled-components";

export const EmptyWeapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .anticon.anticon-inbox {
    font-size: 25px;
    color: #c20c0c;
  }
  .text-box {
    font-size: 18px;

    color: transparent;
    background-image: linear-gradient(to right, pink, #ff416c, #ff4b2b);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: color_animat linear 1.5s infinite;

    @keyframes color_animat {
      to {
        background-position: -200% 0;
      }
    }
  }
`;
