const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createToken } = require("../../utils/utils");

const comparePassword = async (incomingPassword, storedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(incomingPassword, storedPassword, function (err, result) {
      if (err) reject(err);
      else if (result) {
        resolve(result);
      } else {
        resolve(false);
      }
    });
  });
};
const verifyToken = async (token, name, email, age) => {
  return new Promise((resolve, reject) => {
    const { SECRET_KEY } = process.env;
    jwt.verify(token, SECRET_KEY, function (err, decoded) {
      const expired = "TokenExpiredError";

      if (err?.name === expired) {
        const new_token = createToken(name, age, email);
        new_token ? resolve(new_token) : reject("Error occurred");
      }

      if (err) {
        return reject(err);
      }
      return resolve(decoded);
    });
  });
};

const checkForMissingField = (credentials) => {
  for (const field in credentials) {
    if (!credentials[field] || credentials[field].length < 1) {
      return { result: true, field };
    }
  }
  return false;
};

module.exports = {
  login: async ({ email, password }) => {
    const missingField = checkForMissingField({ email, password });
    if (missingField.result) {
      return {
        result: false,
        message: `Please fill the ${missingField.field} field `,
      };
    }

    try {
      const user = await global.db.collection("users").findOne(
        { email },
        {
          $project: {
            _id: 0,
            name: 1,
            age: 1,
            email: 1,
            password: 1,
            token: 1,
          },
        }
      );
      if (!user) {
        return { result: false, message: "Email or password are incorrect" };
      }

      const comparedPassword = await comparePassword(password, user.password);
      if (!comparedPassword) {
        return { result: false, message: "Email or password are incorrect" };
      }

      const validToken = await verifyToken(
        user.token,
        user.name,
        user.email,
        user.age
      );
      user.token = validToken;
      const to_return = {
        name: user.name,
        token: user.token,
        email: user.email,
        age: user.age,
      };
      return { result: true, data: to_return };
    } catch (error) {
      console.log(error);
      return false;
    }
  },
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
