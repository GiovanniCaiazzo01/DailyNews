const jwt = require("jsonwebtoken");

module.exports = {
  SUCCESS: {
    SAVED_NEWS: "We have saved your news",
    DELETED_NEWS: "News deleted successfully",
    USER_CREATED: "User Created",
    USER_UPDATED: "User update successfully",
  },
  ERRORS: {
    MISSING_FIELD: (field) => {
      return `Please fill the ${field} field`;
    },
    DUPLICATED_NEWS: (duplicated_item) => {
      return `We can't save the news with title ${duplicated_item}, cause is already saved`;
    },
    GENERIC:
      "Something went wrong with an operation that you are trying to perform 👀, try it again or try later ",
    EMAIL_OR_PASSWORD: "Email or password are incorrect",

    UNRECOVERABLE_NEWS: "It was not possible to retrieve the latest news",
    MISSING_LANGUAGE: "Please fill the language field ",
    SAVED_NEWS: "Your saved news could not be retrieved",
    INVALID_AGE: "Please insert a valid age",
    NAME_TO_LONG: "The name seems to be to long!",
    USER_NOT_RETRIVABLE: "There is a problem retriving your user infomation 👀",
    PASSWORD_MISMATCH:
      "The passwords entered do not match. Please re-enter your password in both fields and ensure that they are identical.",
    EMAIL_ALREADY_EXISTS: "This e-mail already exists",
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
