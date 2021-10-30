import { useRef, memo } from "react";

import { Carousel } from "antd";
import { CarouselWrapper } from "./style.js";

const ASBasisImageCarousel = (props) => {
  //其它hooks
  const carouselRef = useRef();

  //其它业务
  const handleClickIcon = (num) => {
    switch (num) {
      case 1: {
        carouselRef.current.next();
        break;
      }
      case -1: {
        carouselRef.current.prev();
        break;
      }
      default:
        break;
    }
  };

  //render相关
  const Images = props.list;
  const height = props.height || "646px";

  return (
    <CarouselWrapper height={height}>
      <Carousel
        className="wrap-v2 carousel"
        ref={carouselRef}
        effect="fade"
        autoplay
      >
        {Images.map((item, index) => {
          return (
            <div className="item" key={item}>
              <img src={item} alt={item} />
            </div>
          );
        })}
      </Carousel>
      <button className="icon preIcon" onClick={() => handleClickIcon(-1)}>
        &lt;
      </button>
      <button className="icon nextIcon" onClick={() => handleClickIcon(1)}>
        &gt;
      </button>
    </CarouselWrapper>
  );
};

export default memo(ASBasisImageCarousel);
