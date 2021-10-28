import { interface1 } from "./base/request.js";

export function getName() {
  return interface1({
    url: "/ashun",
  });
}

export function getMuultiData() {
  return interface1({
    url: "/multidata",
  });
}
