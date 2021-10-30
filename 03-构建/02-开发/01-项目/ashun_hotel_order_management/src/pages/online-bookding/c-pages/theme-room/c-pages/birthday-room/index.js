import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { BirthdayRoomWrapper } from "./style.js";
import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASBirthdayRoom = (props) => {
  const { birthdayRooms } = useSelector(
    (state) => ({
      birthdayRooms: state.getIn(["goods", "themeRoom", "birthdayRooms"]),
    }),
    shallowEqual
  );
  return (
    <BirthdayRoomWrapper>
      <div className="content-box">
        {birthdayRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>{" "}
    </BirthdayRoomWrapper>
  );
};

export default memo(ASBirthdayRoom);
