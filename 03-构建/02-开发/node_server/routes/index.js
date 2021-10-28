const adminRoutes = require("./admin");
const userRoutes = require("./user");
const goodsRoutes = require("./goods");
const commentRoutes = require("./comment");
const orderRoutes = require("./order");
const applyCancelOrderRouters = require("./applyCancelOrder");
const noticeRoutes = require("./notice");
const opinionRoutes = require("./opinion");

module.exports = function useRouters(app) {
  adminRoutes(app);
  userRoutes(app);
  goodsRoutes(app);
  commentRoutes(app);
  orderRoutes(app);
  applyCancelOrderRouters(app);
  noticeRoutes(app);
  opinionRoutes(app);
};
