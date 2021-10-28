import { interface1 } from "../request.js";

export function getNoticeByType(type) {
  return interface1({
    url: "/getNoticeByType",
    params: {
      type,
    },
  });
}
