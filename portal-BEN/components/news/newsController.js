const { KEY_NEWSDATA } = require("./config/config");
const { default: axios } = require("axios");

module.exports = {
  list: async () => {
    try {
      const headers = {
        "X-ACCESS-KEY": KEY_NEWSDATA,
      };
      const queryOptions = {
        language: "language=en",
      };

      const news = await axios.get(
        `https://newsdata.io/api/1/news?${queryOptions.language}`,
        {
          headers,
        }
      );
      if (news.status !== 200) {
        console.log(news);
        throw new Error("It was not possible to retrieve the latest news");
      }

      const to_return = news.data.results.map((n) => {
        return {
          title: n.title,
          description: n.description,
          pubication_date: n.pubDate.split(" ")[0],
          creator: n?.creator,
          source_id: n.source_id,
          link: n.link,
          image_url: n.image_url,
          category: n.category,
          country: n.country,
          language: n.language,
        };
      });

      return { result: true, data: to_return, length: news.data.length };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
