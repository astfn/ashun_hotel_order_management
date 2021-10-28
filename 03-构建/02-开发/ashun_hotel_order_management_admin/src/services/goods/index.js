import { interface1 } from "../request.js";

export function getRoomById(goodsId) {
  return interface1({
    url: "/getRoomById",
    params: {
      goodsId,
    },
  });
}
