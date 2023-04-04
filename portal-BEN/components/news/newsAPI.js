const express = require("express");
const { list } = require("./newsController");
const router = express.Router();

router.post("/", async (req, res) => {
  const { nextPage, language } = req.body;
  const payload = { nextPage, language };
  const news = await list(payload);
  return res.send(news);
});

module.exports = router;
