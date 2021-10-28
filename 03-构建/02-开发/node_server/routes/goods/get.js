const express = require("express");
const router = express.Router();
const { getAllRoom, getRoomById } = require("../../models/goods/get.js");

router.get("/getAllRoom", async (req, res) => {
  try {
    const result = await getAllRoom();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getRoomById", async (req, res) => {
  try {
    const { goodsId } = req.query;
    const result = await getRoomById(goodsId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
