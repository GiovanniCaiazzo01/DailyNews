import { v4 as uuidv4 } from "uuid";
const checkForDuplicate = async (to_save) => {
  const check = await global.db
    .collection("user_news")
    .findOne({ title: { $in: [to_save.title] } });
  check ? true : false;
};

module.exports = {
  list: async () => {
    try {
      const news = await global.db.collection("user_news").find({});
      if (!news) throw new Error("Error occurred");
      return { result: true, data: news, length: news.length };
    } catch (error) {
      return { result: false, message: error };
    }
  },

  save: async (news) => {
    if (!news) {
      return { result: false, message: "Missing fields" };
    }

    const to_save = { ...news };
    const duplicateCheck = await checkForDuplicate(to_save);

    if (duplicateCheck) {
      return { result: false, message: "This News is already saved" };
    }

    try {
      const save_news = await global.db
        .collection("user_news")
        .insertOne({ ...to_save.trim(), ncode: uuidv4() });

      if (!save_news) {
        throw new Error("Error occured");
      }
      return { result: true, message: "Saved" };
    } catch (error) {
      return { result: false, message: error };
    }
  },
  // get: async ({ id }) => {
  //   if (!id) return { result: false, message: "Missing news id" };
  //   try {
  //     const news = await global.db.collection("user_news").findOne({ id });
  //     if (!news) throw new Error("Error occurred");
  //     return { result: true, data: news, length: news.length };
  //   } catch (error) {
  //     return { result: false, message: error };
  //   }
  // },
};
