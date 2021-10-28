import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;

  .carousel {
    width: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    .item {
      height: ${(props) => props.height};
      background: transparent;
      img {
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
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
      left: 0px;
    }
    &.nextIcon {
      right: 0px;
    }
  }
`;
