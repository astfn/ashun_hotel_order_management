const express = require("express");
const routes = require("./routes");

const app = new express();
const port = 3060;

// 允许跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  // res.header("Access-Control-Allow-Origin", '*');
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method === "OPTIONS") res.sendStatus(200);
  /*让options请求快速返回*/ else next();
});

app.use(express.json());
//配置路由
routes(app);

app.listen(port, () => {
  console.log("服务器启动成功", `http://localhost:${port}`);
});
