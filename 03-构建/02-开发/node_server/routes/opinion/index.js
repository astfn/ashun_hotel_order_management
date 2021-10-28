const getRouters = require("./get.js");
const postRouters = require("./post.js");

module.exports = function opinionRouters(app) {
  app.use(getRouters);
  app.use(postRouters);
};
