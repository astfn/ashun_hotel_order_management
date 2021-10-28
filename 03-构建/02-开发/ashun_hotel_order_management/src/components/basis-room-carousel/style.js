import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  .bg-blur-box {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img {
      position: relative;
      top: 0;
      width: 120%;
      height: 120%;
      filter: blur(10px);
    }
  }
  .carousel {
    position: relative;
    .item {
      height: ${(props) => props.height};
      text-align: center;
      background: transparent;
      img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
      }
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    cursor: pointer;
    font-size: 30px;
    color: #fff;
    background-color: transparent;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
    &.preIcon {
      left: 100px;
    }
    &.nextIcon {
      right: 100px;
    }
  }
`;
