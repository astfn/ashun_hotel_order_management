const devServiceUrl = "http://localhost:3060";
const productServiceUrl = "http://localhost:3060";

const BASE_URL =
  process.env.NODE_ENV === "development" ? devServiceUrl : productServiceUrl;

const TIMEOUT = 5000;

export { BASE_URL, TIMEOUT };
