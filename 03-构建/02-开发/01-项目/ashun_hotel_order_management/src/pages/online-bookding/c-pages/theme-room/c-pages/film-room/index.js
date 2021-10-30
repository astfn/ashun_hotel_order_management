import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { FilmRoomWrapper } from "./style.js";
import ASThemeGoodsItem from "@/components/theme-goods-item";

const ASFilmRoom = (props) => {
  const { filmRooms } = useSelector(
    (state) => ({
      filmRooms: state.getIn(["goods", "themeRoom", "filmRooms"]),
    }),
    shallowEqual
  );
  return (
    <FilmRoomWrapper>
      <div className="content-box">
        {filmRooms.map((room, index) => {
          return <ASThemeGoodsItem key={room._id} room={room} />;
        })}
      </div>
    </FilmRoomWrapper>
  );
};

export default memo(ASFilmRoom);
