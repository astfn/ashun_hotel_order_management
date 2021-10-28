import { interface1 } from "../request.js";

export function addOpinion(nickName, phone, content) {
  return interface1({
    method: "post",
    url: "/addOpinion",
    data: {
      opinionData: {
        userInfo: {
          nickName,
          phone,
        },
        content,
      },
    },
  });
}
