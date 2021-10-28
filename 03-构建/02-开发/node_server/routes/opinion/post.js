const express = require("express");
const router = express.Router();

/*post*/
const { addOpinion, deleteOpinion } = require("../../models/opinion/post.js");

//addOpinion
router.post("/addOpinion", async (req, res) => {
  try {
    const { opinionData } = req.body;
    const result = await addOpinion(opinionData);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//deleteOpinion
router.post("/deleteOpinion", async (req, res) => {
  try {
    const { opinionId } = req.body;
    const result = await deleteOpinion(opinionId);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
