const { uuid } = require("uuidv4");

// todo QUESTO CHECK NON FUNZIONA
const checkForDuplicate = async (news) => {
  const titles = [];
  news.forEach((element) => titles.push(element.title));
  const duplicate = await global.db
    .collection("user_news")
    .find({ title: { $in: [...titles] } })
    .toArray();
  console.log(duplicate);
  duplicate || duplicate.length ? true : false;
};

module.exports = {
  list: async ({ ucode }) => {
    if (!ucode) {
      return { result: false, message: "Error occurred" };
    }

    try {
      const user_news = await global.db
        .collection("user_news")
        .findOne({ ucode });

      if (!user_news) {
        throw new Error("Your saved news could not be retrieved");
      }

      console.log(user_news);
      return { result: true, data: user_news };
    } catch (error) {
      console.log(error);
      return { result: false, message: error };
    }
  },

  save: async ({ news }) => {
    news.forEach((element) => {
      if (!element) {
        return { result: false, message: "Missing fields" };
      }
    });

    const duplicateCheck = await checkForDuplicate(news);

    if (duplicateCheck) {
      return { result: false, message: "This News is already saved" };
    }

    const ucode = news[0].ucode;

    news.forEach((element) => {
      element.ncode = uuid();
    });

    const news_to_save = {
      ucode,
      news: [...news],
    };
    try {
      const save_news = await global.db
        .collection("user_news")
        .insertOne({ ...news_to_save });

      if (!save_news) {
        throw new Error("Error occured");
      }
      return { result: true, message: "Saved" };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
