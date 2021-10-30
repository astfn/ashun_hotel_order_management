import { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { ThemeRoomWrapper, TopMenu } from "./style.js";
import { onlineBookdingMenu } from "@/common/local-data.js";

const ASThemeRoom = (props) => {
  const ThemeRoomMenu = onlineBookdingMenu[1].child;
  return (
    <ThemeRoomWrapper>
      <TopMenu>
        <div className="menu-content">
          {ThemeRoomMenu.map((item, index, arr) => {
            return (
              <div key={item.title} className="link-box">
                <NavLink className="link" to={item.link} replace>
                  <span className="title"> {item.title}</span>
                </NavLink>
                {index !== arr.length - 1 && <span className="line">|</span>}
              </div>
            );
          })}
        </div>
      </TopMenu>
      {renderRoutes(props.route.routes)}
    </ThemeRoomWrapper>
  );
};

export default memo(ASThemeRoom);
