const express = require("express");
const { list } = require("./newsController");
const router = express.Router();

router.get("/", async (req, res) => {
  const news = await list();
  return res.send(news);
});

module.exports = router;
