const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { createToken } = require("../../utils/utils");

const checkEqualityPasswords = (password, repeatPassword) => {
  if (password !== repeatPassword) return false;
  return true;
};

const cryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return reject(err);
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  });
};

module.exports = {
  register: async ({
    name,
    surname,
    age,
    email,
    password,
    ["Repeat Password"]: repeatPassword,
  }) => {
    if (age <= 0 || age >= 200) {
      return { result: false, message: "Please insert a valid age" };
    }

    if (name.length > 50) {
      return { result: false, message: "The name seems to be to long!" };
    }

    const missingField = checkForMissingField({
      name,
      age,
      email,
      password,
      repeatPassword,
    });

    if (missingField) {
      return {
        result: false,
        message: `Please fill the ${missingField.field} field `,
      };
    }

    const passwordEquality = checkEqualityPasswords(password, repeatPassword);
    if (!passwordEquality) {
      return {
        result: false,
        message:
          "The passwords entered do not match. Please re-enter your password in both fields and ensure that they are identical.",
      };
    }

    try {
      const checkEmail = await global.db
        .collection("users")
        .findOne({ email }, { $project: { _id: 0, email: 1 } });
      if (checkEmail) {
        return { result: false, message: "This e-mail already exists" };
      }
    } catch (error) {
      return false;
    }

    const token = createToken(name, age, email);
    try {
      const cryptedPassword = await cryptPassword(password);
      const register = await global.db.collection("users").insertOne({
        name: name.trim(),
        surname: surname.trim() || null,
        age,
        email: email.trim(),
        password: cryptedPassword,
        ucode: uuidv4(),
        token,
      });

      if (!register.acknowledged) return new Error("Error Occured re-try");
      return { result: true, message: "User Created" };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};
