const jwt = require("jsonwebtoken");

module.exports = {
  SUCCESS: {
    SAVED_NEWS: "We have saved your news",
    DELETED_NEWS: "News deleted successfully",
  },
  ERRORS: {
    MISSING_FIELD: (field) => {
      return `Please fill the ${field} field`;
    },
    GENERIC:
      "Something went wrong with an operation that you are trying to perform 👀, try it again or try later ",
    EMAIL_OR_PASSWORD: "Email or password are incorrect",

    UNRECOVERABLE_NEWS: "It was not possible to retrieve the latest news",
    MISSING_LANGUAGE: "Please fill the language field ",
    SAVED_NEWS: "Your saved news could not be retrieved",
    DUPLICATED_NEWS: (duplicated_item) => {
      return `We can't save the news with title ${duplicated_item}, cause is already saved`;
    },
  },

  JWT_ERRORS: {
    TokenExpiredError: "TokenExpiredError",
    JsonWebTokenError: "JsonWebTokenError",
  },
  createToken: (name, age, email) => {
    const payload = {
      name,
      age,
      email,
    };

    const { SECRET_KEY } = process.env;
    const options = { expiresIn: "5m" };

    const token = jwt.sign(payload, SECRET_KEY, options);

    return token;
  },
  checkForMissingField: (fields) => {
    for (const field in fields) {
      if (!fields[field] || fields[field].length < 1) {
        return { result: true, field };
      }
    }
    return false;
  },
};
