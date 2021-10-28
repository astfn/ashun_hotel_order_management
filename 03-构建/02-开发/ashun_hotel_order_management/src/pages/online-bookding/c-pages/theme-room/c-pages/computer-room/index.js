import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { ComputerRoomWrapper } from "./style.js";
import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASComputerRoom = (props) => {
  const { computerRooms } = useSelector(
    (state) => ({
      computerRooms: state.getIn(["goods", "themeRoom", "computerRooms"]),
    }),
    shallowEqual
  );

  return (
    <ComputerRoomWrapper>
      <div className="content-box">
        {computerRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>{" "}
    </ComputerRoomWrapper>
  );
};

export default memo(ASComputerRoom);
