import { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { shallowEqual, useSelector } from "react-redux";

import { OnlineBookdingWrapper, TopMenu } from "./style.js";
import ASCarousel from "@/components/basis-room-carousel";

import { onlineBookdingMenu } from "@/common/local-data.js";
import { hotRooms } from "@/pages/hot-room/utils";
import { useUpdateGoodsByDataBase } from "@/common/hooks";

const ASOnlineBookding = (props) => {
  //redux hook
  const store = useSelector(
    (state) => state.getIn(["goods"]).toJS(),
    shallowEqual
  );
  //其它hooks
  useUpdateGoodsByDataBase();
  // console.log(hotRooms(store));
  return (
    <OnlineBookdingWrapper>
      <TopMenu>
        <div className="menu-content">
          {onlineBookdingMenu.map((item, index) => {
            return (
              <NavLink key={item.title} className="link" to={item.link} replace>
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      </TopMenu>
      <ASCarousel list={hotRooms(store)} height="400px" />
      {renderRoutes(props.route.routes)}
    </OnlineBookdingWrapper>
  );
};

export default memo(ASOnlineBookding);
