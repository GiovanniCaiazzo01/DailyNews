const { KEY_NEWSDATA } = require("./config/config");
const { default: axios } = require("axios");
const { languages } = require("./utils/languages");
const { ERRORS } = require("../../utils/utils");

module.exports = {
  list: async ({ language, nextPage }) => {
    try {
      const headers = {
        "X-ACCESS-KEY": KEY_NEWSDATA,
      };
      const queryOptions = {
        language: language ? `language=${languages[language]}` : "language=en",
        nextPage: nextPage ? nextPage : "",
      };
      const query = Object.values(queryOptions)
        .map((q) => q && (q[0] = "&" + q))
        .join("");

      const news = await axios.get(`https://newsdata.io/api/1/news?${query}`, {
        headers,
      });

      if (news.status !== 200) {
        throw new Error(ERRORS.UNRECOVERABLE_NEWS);
      }
      let to_return = {
        nextPage: news.data.nextPage,
        news: [],
      };
      to_return.news = news.data.results.map((n) => {
        const bg = `https://picsum.photos/id/${
          Math.floor(Math.random() * 100) + 1
        }/1920/1080`;

        return {
          title: n.title,
          description: n.description,
          pubication_date: n.pubDate.split(" ")[0],
          creator: n?.creator,
          source_id: n.source_id,
          link: n.link,
          image_url: n.image_url ? n.image_url : bg,
          category: n.category,
        };
      });

      return { result: true, data: to_return, length: news.data.length };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
