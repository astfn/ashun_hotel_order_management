const express = require("express");
const router = express.Router();
const { getAdmin } = require("../../models/admin/get.js");

router.get("/getAdmin", async (req, res) => {
  try {
    const { phone } = req.query;
    const result = await getAdmin(phone);
    //按接口文档拼接其他数据，最后返回（暂时未做）
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
