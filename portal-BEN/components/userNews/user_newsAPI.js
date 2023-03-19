const express = require("express");
const { list, save, remove } = require("./user_newsController");
const router = express.Router();

router.get("/:ucode", async (req, res) => {
  const { ucode } = req.params;
  const payload = {
    ucode,
  };
  const news = await list(payload);
  return res.send(news);
});

router.post("/save", async (req, res) => {
  const payload = {
    news: req.body,
  };
  const save_news = await save(payload);
  return res.send(save_news);
});

router.delete("/delete/:ucode", async (req, res) => {
  const { ucode } = req.params;
  const { titles } = req.body;
  const payload = {
    ucode,
    titles,
  };
  const delete_news = await remove(payload);
  console.log(delete_news);
  return res.send(delete_news);
});
module.exports = router;
