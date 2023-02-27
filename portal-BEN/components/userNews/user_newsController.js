module.exports = {
  list: async () => {
    try {
      const news = await global.db.collection("news").find({});
      if (!news) throw new Error("Error occurred");
      return { result: true, data: news, length: news.length };
    } catch (error) {
      return { result: false, message: error };
    }
  },
  get: async ({ id }) => {
    if (!id) return { result: false, message: "Missing news id" };
    try {
      const news = await global.db.collection("news").findOne({ id });
      if (!news) throw new Error("Error occurred");
      return { result: true, data: news, length: news.length };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
