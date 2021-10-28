import { interface1 } from "../request.js";

export function getUser(phone) {
  return interface1({
    url: "/getUser",
    params: {
      phone,
    },
  });
}
