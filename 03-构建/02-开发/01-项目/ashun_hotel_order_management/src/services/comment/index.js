import { interface1 } from "../request.js";

export function addComment(goodsId, uid, orderId, content) {
  return interface1({
    method: "post",
    url: "/addComment",
    data: {
      commentData: {
        goodsId,
        uid,
        orderId,
        content,
      },
    },
  });
}

export function getCommentByOrderId(orderId) {
  return interface1({
    url: "/getCommentByOrderId",
    params: {
      orderId,
    },
  });
}
