const jwt = require("jsonwebtoken");

module.exports = {
  createToken: (name, age, email) => {
    const payload = {
      name,
      age,
      email,
    };

    const { SECRET_KEY } = process.env;
    const options = { expiresIn: "30s" };

    const token = jwt.sign(payload, SECRET_KEY, options);

    return token;
  },
};
