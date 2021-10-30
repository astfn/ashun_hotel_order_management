import { interface1 } from "../request.js";

export function getAllOpinion() {
  return interface1({
    url: "/getAllOpinion",
  });
}
