const { DB_NAME, DB_URI, PORT } = require("./config/config.js");
const { MongoClient } = require("mongodb");
const compression = require("compression");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "https://daily-news-vds8.onrender.com"],
  })
);

app.disable("x-powered-by");

// general securuty/cache releted headers + server header
app.use((req, res, next) => {
  let x_frame_options = "DENY";

  if (
    typeof process.env.X_FRAME_OPTIONS !== "undefined" &&
    process.env.X_FRAME_OPTIONS
  ) {
    x_frame_options = process.env.X_FRAME_OPTIONS;
  }

  res.set({
    "X-XSS-Protection": "1; mode=block",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": x_frame_options,
    "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
    Pragma: "no-cache",
    Expires: 0,
  });

  next();
});

app.use(bodyParser.json());
// Endpoint Import
app.use("/user/saved-news", require("./components/userNews/user_newsAPI"));
app.use("/news", compression(), require("./components/news/newsAPI"));
app.use("/users", require("./components/users/usersAPI"));
app.use("/auth", require("./components/auth/authAPI"));

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
