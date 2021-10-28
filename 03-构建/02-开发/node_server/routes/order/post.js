const express = require("express");
const router = express.Router();

/*post*/
const { addOrder, cancelOrder } = require("../../models/order/post.js");

//addOrder
router.post("/addOrder", async (req, res) => {
  try {
    const { orderData } = req.body;
    console.log(orderData);
    const result = await addOrder(orderData);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//cancelOrder
router.post("/cancelOrder", async (req, res) => {
  try {
    const { cancelData } = req.body;
    const result = await cancelOrder(cancelData);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
