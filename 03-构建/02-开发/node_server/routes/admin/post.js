const express = require("express");
const router = express.Router();

/*post*/
const { addAdmin } = require("../../models/admin/post.js");
/*get*/
const { getAdmin } = require("../../models/admin/get.js");

router.post("/addAdmin", async (req, res) => {
  try {
    const newAdmin = req.body.adminInfo;
    const addInfo = await addAdmin(newAdmin); //添加用户
    const result = await getAdmin(newAdmin.phone); //查询用户数据并返回
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
