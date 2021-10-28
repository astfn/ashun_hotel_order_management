const developServer = "http://localhost:3060/";
const productServer = "http://localhost:3060/";
const BASE_URL =
  process.env.NODE_ENV === "development" ? developServer : productServer;

const TIMEOUT = 5000;
export { BASE_URL, TIMEOUT };
