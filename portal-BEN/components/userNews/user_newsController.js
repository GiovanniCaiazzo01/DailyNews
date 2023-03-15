const { uuid } = require("uuidv4");
const checkForDuplicate = async (to_save) => {
  const check = await global.db
    .collection("user_news")
    .findOne({ title: { $in: [to_save.title] } });
  check ? true : false;
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
        .insertOne({ ...to_save.trim(), ncode: uuid() });

      if (!save_news) {
        throw new Error("Error occured");
      }
      return { result: true, message: "Saved" };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
