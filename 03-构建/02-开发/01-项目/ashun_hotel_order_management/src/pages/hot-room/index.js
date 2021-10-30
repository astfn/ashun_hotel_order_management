import { memo, useEffect } from "react";
import { withRouter } from "react-router";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HotRoomWrapper, RoomItem } from "./style.js";
import ASCarousel from "@/components/basis-room-carousel";
import ASThemeHeader from "@/components/theme-header";

import { updateUserAction } from "@/store/user/actionCreators.js";

import { useLocalStorange, useUpdateGoodsByDataBase } from "@/common/hooks";
import { getRoomImages } from "@/utils/getRoomImages.js";
import { formatShowPrice } from "@/utils/format.js";
import { hotRooms } from "./utils";

const ASHotRoom = (props) => {
  //redux hook
  const dispatch = useDispatch();
  const store = useSelector(
    (state) => state.getIn(["goods"]).toJS(),
    shallowEqual
  );
  //其它hooks
  useUpdateGoodsByDataBase();

  const [localStorageUser] = useLocalStorange("user");

  useEffect(() => {
    //hot-room是主页，读取localStorage中的用户信息
    if (localStorageUser) {
      dispatch(updateUserAction(localStorageUser));
    }
  }, [dispatch, localStorageUser]);

  //其他业务
  const jumpDetail = (_id) => {
    props.history.push({ pathname: `/room-detail?_id=${_id}`, state: { _id } });
  };
  // console.log(hotRooms(store));
  return (
    <HotRoomWrapper>
      <ASCarousel list={hotRooms(store)} />
      <div className="content-box">
        <ASThemeHeader
          title={"火爆房型"}
          isMore={true}
          MoreLink="/online-bookding"
        />
        {hotRooms(store).map((room, index) => {
          const { _id, types, info } = room;
          return (
            <RoomItem key={_id}>
              <div className="top">
                <span className="name">{info.name}</span>
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
                    价格:<i>{formatShowPrice(info.price)}</i>
                  </span>
                  <span className="purchasesNum">
                    总销售量:<i>{info.purchasesNum}</i>
                  </span>
                  <span className="sum">
                    当前剩余:<i>{info.sum}</i>
                  </span>
                </div>
              </div>
            </RoomItem>
          );
        })}
      </div>
    </HotRoomWrapper>
  );
};

export default withRouter(memo(ASHotRoom));
