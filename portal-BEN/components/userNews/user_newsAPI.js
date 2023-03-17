const express = require("express");
const { list, save } = require("./user_newsController");
const router = express.Router();

router.get("/:ucode", async (req, res) => {
  const { ucode } = req.params;
  const payload = {
    ucode,
  };
  const news = await list(payload);
  console.log(news);
  return res.send(news);
});

router.post("/save", async (req, res) => {
  const payload = {
    news: req.body,
  };
  const save_news = await save(payload);
  console.log(save_news);
  return res.send(save_news);
});

module.exports = router;
