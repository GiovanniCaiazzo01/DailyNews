const express = require("express");
const { list, get } = require("./user_newsController");
const router = express.Router();

router.get("/", async (req, res) => {
  const news = await list();
  return res.send(news);
});

router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  const news = await get(id);
  return res.send(news);
});
module.exports = router;
