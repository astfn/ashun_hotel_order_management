const express = require("express");
const router = express.Router();
const { getAllOpinion } = require("../../models/opinion/get.js");

router.get("/getAllOpinion", async (req, res) => {
  try {
    const result = await getAllOpinion();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
