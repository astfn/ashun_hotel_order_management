const express = require("express");
const router = express.Router();
const {
  getOrderByGoods,
  getOrderByUidAndGoodsId,
  getOneOrderById,
  getOrderByType,
  getOrderByUidAndType,
} = require("../../models/order/get.js");

router.get("/getOrderByGoods", async (req, res) => {
  try {
    const result = await getOrderByGoods();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getOrderByUidAndGoodsId", async (req, res) => {
  try {
    const { goodsId, uid } = req.query;
    const result = await getOrderByUidAndGoodsId(goodsId, uid);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getOneOrderById", async (req, res) => {
  try {
    const { orderId } = req.query;
    const result = await getOneOrderById(orderId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getOrderByType", async (req, res) => {
  try {
    const { type } = req.query;
    const result = await getOrderByType(type);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getOrderByUidAndType", async (req, res) => {
  try {
    const { uid, type } = req.query;
    const result = await getOrderByUidAndType(uid, type);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
