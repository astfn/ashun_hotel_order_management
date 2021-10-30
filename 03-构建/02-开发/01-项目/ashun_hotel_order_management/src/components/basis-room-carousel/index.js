import { useRef, memo, useState, useCallback } from "react";

import { Carousel } from "antd";
import { CarouselWrapper } from "./style.js";
import { getRoomImages } from "@/utils/getRoomImages.js";

const ASBasisRoomCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const handelChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  //render相关
  const Images = props.list.map((item, index) => getRoomImages(item.types)[0]);
  const height = props.height || "646px";

  return (
    <CarouselWrapper height={height}>
      <Carousel
        className="wrap-v2 carousel"
        ref={carouselRef}
        beforeChange={handelChange}
        effect="fade"
        autoplay
      >
        {props.list.map((item, index) => {
          return (
            <div className="item" key={item._id}>
              <img src={Images[index]} alt={item.info.name} />
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
      <div className="bg-blur-box">
        <img src={Images[currentIndex]} alt="xxx" />
      </div>
    </CarouselWrapper>
  );
};

export default memo(ASBasisRoomCarousel);
