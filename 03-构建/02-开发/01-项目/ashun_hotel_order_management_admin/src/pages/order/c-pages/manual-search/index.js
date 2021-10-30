import { memo, useState } from "react";
import { ManualSearchWrapper, SearchBox, FilterDataBox } from "./style.js";
import ASThemeOrderItem from "@/components/theme-order-item";
import { isEmptyJSX } from "@/utils/isEmptyJSX.js";

import { getOneOrderById } from "@/services/order";
import {
  useUpdateStoreByLocalStorangeAdmin,
  useUpdateLocalStorangeAdminByDataBase,
} from "@/common/hooks";
import { objectIsEmpty } from "@/utils/objectIsEmpty.js";

const ASManualSearch = (props) => {
  const [orderId, setOrderId] = useState("");
  const [orderInfo, setOrderInfo] = useState({});

  /* handle event */
  const handleSearch = async () => {
    const order = await getOneOrderById(orderId);
    setOrderInfo(order);
  };

  /* 其它 hooks */
  //在首页进行一系列更新操作
  useUpdateStoreByLocalStorangeAdmin();
  useUpdateLocalStorangeAdminByDataBase();

  //其他业务

  /* render 相关 */

  //搜索相关
  const renderSearchRelevant = () => {
    return (
      <SearchBox>
        <div className="input-box">
          <input
            value={orderId}
            onChange={(e) => {
              setOrderId(e.target.value);
            }}
            type="text"
            placeholder="请输入订单编号"
          />
          <button type="button" onClick={handleSearch}>
            搜索
          </button>
        </div>
        <div className="desc-box">
          只需输入所要查询订单的编号，并点击搜索，即可获取该订单的详细信息。
        </div>
      </SearchBox>
    );
  };

  //展示订单相关
  const renderOrderInfo = () => {
    if (!objectIsEmpty(orderInfo)) {
      const { userInfo, roomInfo } = orderInfo;
      return (
        <ASThemeOrderItem
          order={orderInfo}
          user={userInfo}
          room={roomInfo}
          cancelCallback={handleSearch}
        />
      );
    }
    return "";
  };

  return (
    <ManualSearchWrapper className="second-wraper">
      {renderSearchRelevant()}
      <div className="title-box">
        <span>查询结果</span>
      </div>
      <FilterDataBox>
        {isEmptyJSX(objectIsEmpty(orderInfo), renderOrderInfo())}
      </FilterDataBox>
    </ManualSearchWrapper>
  );
};

export default memo(ASManualSearch);
