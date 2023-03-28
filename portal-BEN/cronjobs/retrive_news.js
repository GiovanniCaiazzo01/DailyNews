const cron = require("node-cron");
const { list } = require("../components/news/newsController");

//             ┌──────────── minute
//             │ ┌────────── hour
//             │ │ ┌──────── day of month
//             │ │ │ ┌────── month
//             │ │ │ │ ┌──── day of week
//             │ │ │ │ │
//             │ │ │ │ │
//             * * * * *

module.exports = {
  job_add_news: async (time) => {
    cron.schedule(`${time} * * * *`, async () => {
      const news = await list();
      if (!news) {
        return false;
      }

      try {
        await global.db.collection("news").insertOne({ news: news.data });
      } catch (error) {
        console.log(error);
      }
    });
  },
  job_delete_news: async () => {
    cron.schedule("2 * * * *", async () => {
      try {
        await global.db.collection("news").deleteOne({});
      } catch (error) {
        console.log(error);
      }
    });
  },
};
