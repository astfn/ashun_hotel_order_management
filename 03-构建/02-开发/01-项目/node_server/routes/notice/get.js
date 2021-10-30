const express = require("express");
const router = express.Router();
const {
  getNoticeByType,
  getNoticeByAdminIDAndType,
} = require("../../models/notice/get.js");

router.get("/getNoticeByType", async (req, res) => {
  try {
    const { type } = req.query;
    const result = await getNoticeByType(type);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/getNoticeByAdminIDAndType", async (req, res) => {
  try {
    const { adminId, type } = req.query;
    const result = await getNoticeByAdminIDAndType(adminId, type);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
