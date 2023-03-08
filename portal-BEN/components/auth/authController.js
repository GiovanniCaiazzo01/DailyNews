const jwt = require("jsonwebtoken");
module.exports = {
  verify_token: async (token) => {
    token = token.split(" ")[1];
    return new Promise((resolve, reject) => {
      const { SECRET_KEY } = process.env;
      jwt.verify(token, SECRET_KEY, function (err, decoded) {
        const expired = "TokenExpiredError";

        if (err?.name === expired) {
          resolve(false);
        }

        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  },
};
