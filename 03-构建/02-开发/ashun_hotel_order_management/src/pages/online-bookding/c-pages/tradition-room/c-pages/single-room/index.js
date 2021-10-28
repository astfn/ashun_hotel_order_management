import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { SingleRoomWrapper } from "./style.js";
import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASSingleRoom = (props) => {
  const { singleRooms } = useSelector(
    (state) => ({
      singleRooms: state.getIn(["goods", "traditionRoom", "singleRooms"]),
    }),
    shallowEqual
  );

  return (
    <SingleRoomWrapper>
      <div className="content-box">
        {singleRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>
    </SingleRoomWrapper>
  );
};

export default memo(ASSingleRoom);
