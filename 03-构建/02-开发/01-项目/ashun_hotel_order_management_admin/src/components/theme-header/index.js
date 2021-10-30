import { memo } from "react";

import { RightSquareOutlined } from "@ant-design/icons";
import { ThemeHeaderWrapper } from "./style.js";
import { withRouter } from "react-router";

const ASThemeHeader = (props) => {
  const { title = "", isMore = false, MoreLink } = props;
  //其他业务
  const jumpRouter = () => {
    props.history.replace(MoreLink);
  };
  //render
  return (
    <ThemeHeaderWrapper>
      <div className="pre-icon" />
      <div className="content">
        <div className="left">
          <h2 className="title">{title}</h2>
        </div>
        <div className="right">
          {isMore && (
            <span className="more" onClick={jumpRouter}>
              更多
              <RightSquareOutlined className="more-icon" />
            </span>
          )}
        </div>
      </div>
    </ThemeHeaderWrapper>
  );
};
export default withRouter(memo(ASThemeHeader));
