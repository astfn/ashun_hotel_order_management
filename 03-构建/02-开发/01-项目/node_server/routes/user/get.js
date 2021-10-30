const express = require("express");
const router = express.Router();
const { getUser } = require("../../models/user/get.js");

router.get("/getUser", async (req, res) => {
  try {
    const { phone } = req.query;
    const result = await getUser(phone);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
