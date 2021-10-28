const express = require("express");
const _path = require("path");

const app = new express();
app.use(express.static(_path.join(__dirname, "views/public")));
app.use(express.json());

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
  if (req.method === "OPTIONS") res.send(200);
  /*让options请求快速返回*/ else next();
});

app.get("/ashun", (req, res) => {
  res.send("Ashuntefannao哈哈");
});
app.get("/multidata", (req, res) => {
  res.send(["as", "t", "f", "n"]);
});

app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});
