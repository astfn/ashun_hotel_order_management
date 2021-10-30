const express = require("express");
const router = express.Router();

/*post*/
const { addNotice, cancelNotice } = require("../../models/notice/post.js");

//addNotice
router.post("/addNotice", async (req, res) => {
  try {
    const { adminInfo, content } = req.body;
    const result = await addNotice(adminInfo, content);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//cancelNotice
router.post("/cancelNotice", async (req, res) => {
  try {
    const { noticeId, adminInfo } = req.body;
    const result = await cancelNotice(noticeId, adminInfo);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
