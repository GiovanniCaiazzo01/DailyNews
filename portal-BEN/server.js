const { DB_NAME, DB_URI, PORT } = require("./config/config.js");
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

// Endpoint Import
app.use("/user/saved-news", require("./components/userNews/user_newsAPI"));
app.use("/news", require("./components/news/newsAPI"));
const start = async () => {
  const dba = await MongoClient.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  global.db = dba.db(DB_NAME);

  try {
    await dba.connect();
    console.log("DATABASE CONNESSO CON SUCCESSO 📡");
  } catch (e) {
    console.error(e);
  }

  app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
  });
};

start();
