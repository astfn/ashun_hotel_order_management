import { memo, useEffect, useState } from "react";
import { UserApplyWrapper } from "./style.js";
import ASThemeOrderItem from "@/components/theme-order-item";
import { isEmptyJSX } from "@/utils/isEmptyJSX.js";

import { getOrderByType } from "@/services/order";
import { objectIsEmpty } from "@/utils/objectIsEmpty.js";

const ASUserApply = (props) => {
  function updatePendingOrders() {
    getOrderByType("pending").then((pendingOrders) => {
      setPendingOrders(pendingOrders);
    });
  }
  const [pendingOrders, setPendingOrders] = useState([]);
  useEffect(() => {
    updatePendingOrders();
  }, []);

  return (
    <UserApplyWrapper className="second-wraper">
      {isEmptyJSX(
        objectIsEmpty(pendingOrders),
        pendingOrders.map((order) => {
          const { userInfo, roomInfo, _id } = order;
          return (
            <ASThemeOrderItem
              key={_id}
              order={order}
              user={userInfo}
              room={roomInfo}
              cancelCallback={updatePendingOrders}
            />
          );
        })
      )}
    </UserApplyWrapper>
  );
};

export default memo(ASUserApply);
