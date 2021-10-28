import { memo, useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import { AllWrapper, MenuWrapper, ContentWrapper } from "./style.js";
import ASNoticeItem from "@/components/notice-item";

import { updateAllNotceAction_thunk } from "@/store/notice/actionCreators.js";
import { isEmptyJSX } from "@/utils/isEmptyJSX.js";
import { objectIsEmpty } from "@/utils/objectIsEmpty.js";

const ASAll = (props) => {
  const [cIndex, setCIndex] = useState(0);

  const mineMenuList = useMemo(
    () => [
      { title: "已发布", type: "successNoticeList" },
      { title: "已撤销", type: "cancelNoticeList" },
    ],
    []
  );

  /* redux hooks */
  const dispatch = useDispatch();
  const { notice } = useSelector(
    (state) => ({
      notice: state.getIn(["notice"]),
    }),
    shallowEqual
  );

  /* 其它 hooks */
  useEffect(() => {
    dispatch(updateAllNotceAction_thunk());
  }, [dispatch]);

  /* handle Event */
  const handleClickLink = (index) => {
    setCIndex(index);
  };

  /* render 相关 */
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

  const currentType = mineMenuList[cIndex].type;
  const currentNoticeList = notice[currentType];
  return (
    <AllWrapper className="second-wraper">
      <MenuWrapper>{renderMenu()}</MenuWrapper>
      <div className="desc-box">
        在这里，你可以查阅、操作所有管理员发布过的公告，所有操作都会有相应记录，请谨慎操作。
      </div>
      <ContentWrapper>
        {isEmptyJSX(
          objectIsEmpty(currentNoticeList),
          currentNoticeList.map((item, index) => {
            const { _id } = item;
            return <ASNoticeItem noticeInfo={item} key={_id} />;
          })
        )}
      </ContentWrapper>
    </AllWrapper>
  );
};

export default memo(ASAll);
