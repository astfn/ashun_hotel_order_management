import { interface1 } from "../request.js";

export function addOrder(phone, goodsId, buySum) {
  return interface1({
    method: "post",
    url: "/addOrder",
    data: {
      orderData: {
        uid: phone,
        goodsId,
        buySum,
      },
    },
  });
}
