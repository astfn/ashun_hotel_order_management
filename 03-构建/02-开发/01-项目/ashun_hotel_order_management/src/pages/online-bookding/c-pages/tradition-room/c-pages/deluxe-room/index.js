import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { DeluxeRoomWrapper } from "./style.js";

import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASDeluxeRoom = (props) => {
  const { deluxeRooms } = useSelector(
    (state) => ({
      deluxeRooms: state.getIn(["goods", "traditionRoom", "deluxeRooms"]),
    }),
    shallowEqual
  );

  return (
    <DeluxeRoomWrapper>
      <div className="content-box">
        {deluxeRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>
    </DeluxeRoomWrapper>
  );
};

export default memo(ASDeluxeRoom);
