const jwt = require("jsonwebtoken");

module.exports = {
  MISSING_FIELD: (field) => {
    return `Please fill the ${field} field `;
  },
  ERRORS: {
    GENERIC:
      "Something went wrong with an operation that you are trying to perform 👀, try it again or try later ",
    EMAIL_OR_PASSWORD: "Email or password are incorrect",
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
  checkForMissingField: (credentials) => {
    for (const field in credentials) {
      if (!credentials[field] || credentials[field].length < 1) {
        return { result: true, field };
      }
    }
    return false;
  },
};
