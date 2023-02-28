const { KEY_MEDIASTACK } = require("./config/config");
const { default: axios } = require("axios");

module.exports = {
  list: async () => {
    try {
      const news = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${KEY_MEDIASTACK}&countries=us`
      );

      if (!news) {
        throw new Error("non è stato possibile recuperare le informazioni");
      }
      const to_return = news.data.data;
      return { result: true, data: to_return, length: news.data.length };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
