import { interface1 } from "../request.js";

export function getAllRoom() {
  return interface1({
    url: "/getAllRoom",
  });
}

export function changeGoodsSum(goodsId, num) {
  return interface1({
    method: "post",
    url: "/changeGoodsSum",
    data: {
      goodsId,
      num,
    },
  });
}
