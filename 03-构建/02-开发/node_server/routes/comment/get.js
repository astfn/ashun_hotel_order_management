const express = require("express");
const router = express.Router();
const {
  getCommentByGoods,
  getCommentByUidAndGoodsId,
  getCommentByOrderId,
} = require("../../models/comment/get.js");

router.get("/getCommentByGoods", async (req, res) => {
  try {
    const result = await getCommentByGoods();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getCommentByUidAndGoodsId", async (req, res) => {
  try {
    const { goodsId, uid } = req.query;
    const result = await getCommentByUidAndGoodsId(goodsId, uid);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getCommentByOrderId", async (req, res) => {
  try {
    const { orderId } = req.query;
    const result = await getCommentByOrderId(orderId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
