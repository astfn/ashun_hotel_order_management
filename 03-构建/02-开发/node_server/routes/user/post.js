const express = require("express");
const router = express.Router();

/*post*/
const {
  addUser,
  updateUserMoney,
  deleteUser,
} = require("../../models/user/post.js");
/*get*/
const { getUser } = require("../../models/user/get.js");

router.post("/addUser", async (req, res) => {
  try {
    const newUser = req.body.user;
    const addInfo = await addUser(newUser); //添加用户
    const result = await getUser(newUser.phone); //查询用户数据并返回
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/updateUserMoney", async (req, res) => {
  try {
    const { phone, money } = req.body;
    const result = await updateUserMoney(phone, money);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const result = await deleteUser(req.params["id"]);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
