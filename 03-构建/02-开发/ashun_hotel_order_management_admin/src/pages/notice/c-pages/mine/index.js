import { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";

import { MineWrapper, MenuWrapper, ContentWrapper } from "./style.js";
import ASNoticeItem from "@/components/notice-item";

import { isEmptyJSX } from "@/utils/isEmptyJSX.js";
import { objectIsEmpty } from "@/utils/objectIsEmpty.js";

const ASMine = (props) => {
  const [cIndex, setCIndex] = useState(0);

  /* redux hooks */
  const { admin } = useSelector(
    (state) => ({
      admin: state.getIn(["admin"]),
    }),
    shallowEqual
  );
  const { noticeList } = admin;
  /* handle Event */
  const handleClickLink = (index) => {
    setCIndex(index);
  };

  /* render 相关 */
  const mineMenuList = [
    { title: "已发布", type: "successNoticeList" },
    { title: "已撤销", type: "cancelNoticeList" },
  ];
  const currentType = mineMenuList[cIndex].type;
  const currentNoticeList = noticeList[currentType];

  const renderMenu = () => {
    return (
      <div className="menu-content">
        {mineMenuList.map((item, index) => (
          <div
            className={classNames("link-box", { active: index === cIndex })}
            key={item.title}
            onClick={() => {
              handleClickLink(index);
            }}
          >
            <span className="link">{item.title}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <MineWrapper className="second-wraper">
      <MenuWrapper>{renderMenu()}</MenuWrapper>
      <ContentWrapper>
        {isEmptyJSX(
          objectIsEmpty(currentNoticeList),
          currentNoticeList.map((item, index) => {
            const { _id } = item;
            return <ASNoticeItem noticeInfo={item} key={_id} />;
          })
        )}
      </ContentWrapper>
    </MineWrapper>
  );
};

export default memo(ASMine);
