const express = require("express");
const router = express.Router();
const { getApplyByOrderId } = require("../../models/applyCancelOrder/get.js");

router.get("/getApplyByOrderId", async (req, res) => {
  try {
    const { orderId } = req.query;
    const result = await getApplyByOrderId(orderId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
