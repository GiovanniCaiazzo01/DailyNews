const { default: axios } = require("axios");
const express = require("express");
const { KEY_MEDIASTACK } = require("./config/config");
const router = express.Router();

router.get("/", async (req, res) => {
  const news = await axios.get(
    "http://api.mediastack.com/v1/news?access_key=" + KEY_MEDIASTACK,
    "  & sources = cnn,bbc& categories = business,sports& countries = us,au& languages = en,-de& keywords = virus,-corona& sort = published_desc& offset = 0& limit = 100"
  );
  console.log(news.data);
  return res.send(news.data);
});

module.exports = router;
