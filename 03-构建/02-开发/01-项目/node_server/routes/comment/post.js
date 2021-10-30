const express = require("express");
const router = express.Router();

/*post*/
const {
  InitialComments,
  addComment,
  removeComment,
} = require("../../models/comment/post.js");
/*get*/
const { getCommentByGoods } = require("../../models/comment/get.js");

//初始化comment
router.post("/InitialComments", async (req, res) => {
  try {
    const result = await InitialComments();
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//addComment
router.post("/addComment", async (req, res) => {
  try {
    const { commentData } = req.body;
    const result = await addComment(commentData);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//removeComment
router.post("/removeComment", async (req, res) => {
  try {
    const { goodsId, orderId } = req.body;
    const result = await removeComment(goodsId, orderId);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
