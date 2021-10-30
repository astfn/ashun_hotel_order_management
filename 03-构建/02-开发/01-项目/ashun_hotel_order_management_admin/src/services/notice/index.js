import { interface1 } from "../request.js";

export function getNoticeByType(type) {
  return interface1({
    url: "/getNoticeByType",
    params: {
      type,
    },
  });
}

export function addNotice(adminInfo, content) {
  return interface1({
    method: "post",
    url: "/addNotice",
    data: {
      adminInfo,
      content,
    },
  });
}

export function cancelNotice(noticeId, adminInfo) {
  return interface1({
    method: "post",
    url: "/cancelNotice",
    data: {
      noticeId,
      adminInfo,
    },
  });
}
