import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { DoubleRoomWrapper } from "./style.js";
import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASDoubleRoom = (props) => {
  const { doubleRooms } = useSelector(
    (state) => ({
      doubleRooms: state.getIn(["goods", "traditionRoom", "doubleRooms"]),
    }),
    shallowEqual
  );

  return (
    <DoubleRoomWrapper>
      <div className="content-box">
        {doubleRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>
    </DoubleRoomWrapper>
  );
};

export default memo(ASDoubleRoom);
