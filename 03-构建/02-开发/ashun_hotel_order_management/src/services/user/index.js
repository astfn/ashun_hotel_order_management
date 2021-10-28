import { interface1 } from "../request.js";

export function getUser(phone) {
  return interface1({
    url: "/getUser",
    params: {
      phone,
    },
  });
}

export function addUser(user) {
  return interface1({
    method: "post",
    url: "/addUser",
    data: {
      user,
    },
  });
}

export function updateUserMoney(phone, money) {
  return interface1({
    method: "post",
    url: "/updateUserMoney",
    data: {
      phone,
      money,
    },
  });
}
