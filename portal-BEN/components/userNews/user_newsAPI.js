const express = require("express");
const { list, save } = require("./user_newsController");
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
  return res.send("");
});

// router.get("/get/:id", async (req, res) => {
//   const { id } = req.params;
//   const news = await get(id);
//   return res.send(news);
// });
module.exports = router;
