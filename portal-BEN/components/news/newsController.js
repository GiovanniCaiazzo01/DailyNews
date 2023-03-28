const { KEY_NEWSDATA } = require("./config/config");
const { default: axios } = require("axios");
const { ERRORS } = require("../../utils/utils");

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
        throw new Error(ERRORS.UNRECOVERABLE_NEWS);
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
  filtered_list: async ({ language }) => {
    if (!language) {
      return { result: false, message: ERRORS.MISSING_LANGUAGE };
    }

    const languages = {
      Arabic: "ar",
      German: "de",
      English: "en",
      Spanish: "es",
      French: "fr",
      Hebrew: "he",
      Italian: "it",
      Dutch: "nl",
      Norwegian: "no",
      Portuguese: "pt",
      Russian: "ru",
      Swedish: "se",
      Chinese: "zh",
    };
    try {
      const headers = {
        "X-ACCESS-KEY": KEY_NEWSDATA,
      };
      const queryOptions = {
        queryLanguage: `language=${languages[language]}`,
      };

      const news = await axios.get(
        `https://newsdata.io/api/1/news?${queryOptions.queryLanguage}`,
        {
          headers,
        }
      );
      if (news.status !== 200) {
        throw new Error(ERRORS.UNRECOVERABLE_NEWS);
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
  // saved_list: async () => {
  //   try {
  //     const news = await global.db.collection("news").findOne({});
  //     return { result: true, data: news };
  //   } catch (error) {
  //     console.log("News => ", error);
  //     return false;
  //   }
  // },
};
