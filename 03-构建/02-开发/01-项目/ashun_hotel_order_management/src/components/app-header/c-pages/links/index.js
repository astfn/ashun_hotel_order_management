import { memo } from "react";
import { LinksWrapper } from "./style.js";
import { headerLinks } from "@/common/local-data.js";
import { NavLink } from "react-router-dom";

const ASLinks = (props) => {
  return (
    <LinksWrapper>
      {headerLinks.map((item, index) => (
        <div className="link-box" key={item.link}>
          <NavLink className="link text-nowrap" to={item.link} replace>
            {item.title}
          </NavLink>
          {item.isHot && <i className="hot">HOT</i>}
        </div>
      ))}
    </LinksWrapper>
  );
};

export default memo(ASLinks);
