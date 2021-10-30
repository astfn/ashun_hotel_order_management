import { interface1 } from "../request";

export function getOneOrderById(orderId) {
  return interface1({
    url: "/getOneOrderById",
    params: {
      orderId,
    },
  });
}

export function cancelOrder(orderId, adminInfo, reason) {
  return interface1({
    method: "post",
    url: "/cancelOrder",
    data: {
      cancelData: {
        orderId,
        adminInfo,
        reason,
      },
    },
  });
}

export function getOrderByType(type) {
  return interface1({
    url: "/getOrderByType",
    params: {
      type,
    },
  });
}
