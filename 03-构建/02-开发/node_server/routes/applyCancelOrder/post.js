const express = require("express");
const router = express.Router();

/*post*/
const {
  deleteApplyByOrderId,
  addApplyCancel,
} = require("../../models/applyCancelOrder/post.js");

router.post("/addApplyCancel", async (req, res) => {
  try {
    const { applyCancelData } = req.body;
    const result = await addApplyCancel(applyCancelData);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/deleteApplyByOrderId", async (req, res) => {
  try {
    const { orderId } = req.body;
    const result = await deleteApplyByOrderId(orderId);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
