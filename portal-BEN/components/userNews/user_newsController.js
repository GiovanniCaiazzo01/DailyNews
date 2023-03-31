const { v4: uuidv4 } = require("uuid");
const { ERRORS, SUCCESS } = require("../../utils/utils");

const insertNews = async (news, ucode, update) => {
  news.forEach((element) => {
    element.ncode = uuidv4();
  });

  const news_to_save = {
    ucode,
    news: [...news],
  };
  if (!update) {
    const save_news = await global.db
      .collection("user_news")
      .insertOne({ ...news_to_save });
    if (!save_news) {
      throw new Error(ERRORS.GENERIC);
    }
    return true;
  }

  const update_news = await global.db
    .collection("user_news")
    .updateOne({ ucode }, { $set: { news: news } });
  if (!update_news) {
    throw new Error(ERRORS.GENERIC);
  }
  return true;
};

const checkForDuplicateNews = (user_news, incoming_news) => {
  let have_duplicate = false;
  let duplicated_value = "";
  const titles = [];
  for (const news of user_news.news) {
    const title = news.title;
    titles.push(title);
  }

  for (const inc_news of incoming_news) {
    titles.push(inc_news.title);
  }

  for (let i = 0; i < titles.length; i++) {
    for (let j = i + 1; j < titles.length; j++) {
      if (titles[i] === titles[j]) {
        duplicated_value = titles[i];
        return { have_duplicate: true, duplicated_value };
      }
    }
  }
  return have_duplicate;
};

module.exports = {
  list: async ({ ucode }) => {
    if (!ucode) {
      return { result: false, message: ERRORS.GENERIC };
    }

    try {
      const user_news = await global.db
        .collection("user_news")
        .findOne({ ucode });

      if (!user_news) {
        throw new Error(ERRORS.SAVED_NEWS);
      }

      return { result: true, data: user_news };
    } catch (error) {
      console.log(error);
      return { result: false, message: error };
    }
  },
  save: async ({ news }) => {
    if (!news) return { result: false, message: ERRORS.GENERIC };

    let user_news;
    const ucode = news.ucode;
    if (!ucode) return { result: false, message: ERRORS.GENERIC };

    try {
      user_news = await global.db.collection("user_news").findOne({ ucode });
      if (!user_news) {
        await insertNews([news], ucode);
        return { result: true, message: SUCCESS.SAVED_NEWS };
      }
    } catch (error) {
      return { result: false, message: error };
    }

    try {
      const duplicateNews = checkForDuplicateNews(user_news, [news]);
      if (duplicateNews.have_duplicate) {
        return {
          result: false,
          message: ERRORS.DUPLICATED_NEWS(duplicateNews.duplicated_value),
        };
      }
      user_news.news.push(news);
      await insertNews(user_news.news, ucode, true);
      return { result: true, message: SUCCESS.SAVED_NEWS };
    } catch (error) {
      return { result: false, message: error };
    }
  },
  save_list: async ({ news }) => {
    news.forEach((element) => {
      if (!element) {
        return { result: false, message: "Missing fields" };
      }
    });

    const ucode = news[0].ucode;
    let user_news;
    try {
      user_news = await global.db.collection("user_news").findOne({ ucode });
      if (!user_news) {
        await insertNews(news, ucode);
        return { result: true, message: SUCCESS.NEWS_SAVED };
      }
    } catch (error) {
      return { result: false, message: error };
    }

    try {
      const duplicateNews = checkForDuplicateNews(user_news, news);
      if (duplicateNews.have_duplicate) {
        return {
          result: false,
          message: ERRORS.DUPLICATED_NEWS(duplicateNews.duplicated_value),
        };
      }
      user_news.news.push(...news);
      await insertNews(user_news.news, ucode, true);
      return { result: true, message: SUCCESS.SAVED_NEWS };
    } catch (error) {
      return { result: false, message: error };
    }
  },
  remove_list: async ({ ucode, titles }) => {
    if (!ucode) {
      return { result: false, message: ERRORS.GENERIC };
    }

    try {
      const delete_news = await global.db
        .collection("user_news")
        .updateOne({ ucode }, { $pull: { news: { title: { $in: titles } } } });

      if (!delete_news.acknowledged) {
        throw new Error(ERRORS.GENERIC);
      }

      return { result: true, message: SUCCESS.DELETED_NEWS };
    } catch (error) {
      return { result: false, message: error };
    }
  },
  remove: async ({ ucode, title }) => {
    if (!(ucode && title)) {
      return { result: false, message: ERRORS.GENERIC };
    }

    try {
      const delete_news = await global.db
        .collection("user_news")
        .updateOne({ ucode }, { $pull: { news: { title: title } } });

      if (!delete_news.acknowledged) {
        throw new Error(ERRORS.GENERIC);
      }

      return { result: true, message: SUCCESS.DELETED_NEWS };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
