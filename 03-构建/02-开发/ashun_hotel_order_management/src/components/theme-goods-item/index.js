import { memo } from "react";
import { withRouter } from "react-router";

import { GoodsItemWrapper } from "./style.js";

import { getRoomImages } from "@/utils/getRoomImages.js";
import { formatShowPrice, formatShowDuration } from "@/utils/format.js";

const ASThemeGoodsItem = (props) => {
  const { _id, types, info } = props.room;
  //其它业务
  const jumpDetail = (_id) => {
    props.history.push({ pathname: `/room-detail?_id=${_id}`, state: { _id } });
  };
  //render相关
  const width = props.width || "500px";
  const height = props.height || "280px";

  return (
    <GoodsItemWrapper key={_id} width={width} height={height}>
      <div className="top">
        <span className="name">{info.name}</span>
        <span className="duration">{formatShowDuration(info.duration)}</span>
      </div>
      <div
        className="img-box"
        onClick={() => {
          jumpDetail(_id);
        }}
      >
        <img src={getRoomImages(types)[0]} alt={info.name} />
      </div>
      <div className="info-box">
        <p className="desc">{info.desc}</p>
        <div className="important-info">
          <span className="price">
            价格: <i>{formatShowPrice(info.price)}</i>
          </span>
          <span className="sum">
            当前剩余: <i>{info.sum}</i>
          </span>
        </div>
      </div>
    </GoodsItemWrapper>
  );
};

export default withRouter(memo(ASThemeGoodsItem));
