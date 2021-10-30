const express = require("express");
const router = express.Router();

const { changeGoodsSum } = require("../../models/goods/post.js");

router.post("/changeGoodsSum", async (req, res) => {
  try {
    const { goodsId, num } = req.body;
    const result = await changeGoodsSum(goodsId, num);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
