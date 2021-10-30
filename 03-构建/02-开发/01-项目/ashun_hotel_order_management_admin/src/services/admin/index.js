import { interface1 } from "../request.js";

export function getAdmin(phone) {
  return interface1({
    url: "/getAdmin",
    params: {
      phone,
    },
  });
}

export function addAdmin(nickName, phone, password) {
  return interface1({
    method: "post",
    url: "/addAdmin",
    data: {
      adminInfo: {
        nickName,
        phone,
        password,
      },
    },
  });
}
