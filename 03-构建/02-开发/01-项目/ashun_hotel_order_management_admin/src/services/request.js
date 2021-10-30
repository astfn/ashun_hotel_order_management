import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config.js";

export function interface1(preset) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
  instance.interceptors.request.use(
    (config) => config,
    (err) => err
  );
  instance.interceptors.response.use(
    (result) => result.data,
    (err) => err
  );

  return instance(preset);
}
