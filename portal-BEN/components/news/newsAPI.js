const express = require("express");
const { list, filtered_list } = require("./newsController");
const router = express.Router();

router.get("/", async (req, res) => {
  const news = await list();
  return res.send(news);
});

router.get("/:language", async (req, res) => {
  const { language } = req.params;

  const payload = {
    language,
  };

  const news = await filtered_list(payload);
  return res.send(news);
});

module.exports = router;
