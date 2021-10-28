import { interface1 } from "../request.js";

export function getApplyByOrderId(orderId) {
  return interface1({
    url: "/getApplyByOrderId",
    params: {
      orderId,
    },
  });
}

export function addApplyCancel(orderId, reason) {
  return interface1({
    url: "/addApplyCancel",
    method: "post",
    data: {
      applyCancelData: {
        orderId,
        reason,
      },
    },
  });
}
