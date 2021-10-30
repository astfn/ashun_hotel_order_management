import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { BigBedRoomWrapper } from "./style.js";
import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASBigBedRoom = (props) => {
  const { bigBedRooms } = useSelector(
    (state) => ({
      bigBedRooms: state.getIn(["goods", "traditionRoom", "bigBedRooms"]),
    }),
    shallowEqual
  );

  return (
    <BigBedRoomWrapper>
      <div className="content-box">
        {bigBedRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>
    </BigBedRoomWrapper>
  );
};

export default memo(ASBigBedRoom);
