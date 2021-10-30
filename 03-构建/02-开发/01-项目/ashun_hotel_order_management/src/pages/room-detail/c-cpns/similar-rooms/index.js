import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import ASThemeHeader from "@/components/theme-header";
import ASThemeGoodsItem from "@/components/theme-goods-item";

import { SimilarRoomsWrapper, ContentWrapper } from "./style.js";

const ASSimilarRooms = (props) => {
  const { goods, room } = useSelector(
    (state) => ({
      goods: state.getIn(["goods"]).toJS(),
      room: state.getIn(["currentGoods"]),
    }),
    shallowEqual
  );
  //过滤得到SimilarRooms数据
  const types = room.types.split("/");

  let similarRooms =
    goods[types[0]] &&
    goods[types[0]][types[1]].filter((v) => v._id !== room._id);

  // console.log(similarRooms);

  return (
    <SimilarRoomsWrapper>
      <ASThemeHeader title="同类商品" />
      <ContentWrapper>
        {similarRooms &&
          similarRooms.map((room, index) => {
            return (
              <ASThemeGoodsItem
                key={room._id}
                room={room}
                width="220px"
                height="120px"
              />
            );
          })}
      </ContentWrapper>
    </SimilarRoomsWrapper>
  );
};

export default memo(ASSimilarRooms);
