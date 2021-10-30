import { memo } from "react";
import { LinksWrapper } from "./style.js";
import { sidebarLinks } from "@/common/local-data.js";
import { NavLink } from "react-router-dom";

const ASLinks = (props) => {
  return (
    <LinksWrapper>
      {
        // 一级路由
        sidebarLinks.map((first, index) => (
          <div className="link-box" key={first.link}>
            <div className="firstLink-box">
              <NavLink className="firstLink text-nowrap" to={first.link}>
                {first.title}
              </NavLink>
            </div>

            {/* 二级路由 */}
            {first.child &&
              first.child.map((second, index) => (
                <div className="secondLink-box" key={second.link}>
                  <NavLink className="secondLink text-nowrap" to={second.link}>
                    {second.title}
                  </NavLink>
                </div>
              ))}
          </div>
        ))
      }
    </LinksWrapper>
  );
};

export default memo(ASLinks);
