import { memo } from "react";

import { RoomDetailWrapper, LeftWrapper, RightWrapper } from "./style.js";
import ASComment from "./c-cpns/comment";
import ASRoomInfo from "./c-cpns/room-info";
import ASSimilarRooms from "./c-cpns/similar-rooms";

import { useUpdateCurrentGoodsByGoods } from "@/common/hooks";
const ASRoomDetail = (props) => {
  const _id = props.match.params._id.replace("?_id=", "");
  //其它hooks
  useUpdateCurrentGoodsByGoods(_id);

  return (
    <RoomDetailWrapper>
      <div className="content-box">
        <LeftWrapper>
          <ASRoomInfo />
          <ASComment />
        </LeftWrapper>
        <RightWrapper>
          <ASSimilarRooms />
        </RightWrapper>
      </div>
    </RoomDetailWrapper>
  );
};

export default memo(ASRoomDetail);
