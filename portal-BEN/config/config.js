require("dotenv").config({ path: "./.env" });
module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  DB_NAME: process.env.DB_NAME,
};
