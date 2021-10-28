import { memo } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { EmptyWeapper } from "./style.js";
const ASEmpty = (props) => {
  const { title = "当前内容为空", width = "100%", height = "600px" } = props;
  return (
    <EmptyWeapper width={width} height={height}>
      <InboxOutlined />
      <div className="text-box">{title}</div>
    </EmptyWeapper>
  );
};
export default memo(ASEmpty);
