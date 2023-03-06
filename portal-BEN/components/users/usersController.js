const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");

const checkForMissingField = (credentials) => {
  for (const field in credentials) {
    if (!credentials[field] || credentials[field].length < 1) {
      return { result: true, field };
    }
  }
  return false;
};

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
      const user = await global.db
        .collection("users")
        .findOne({ email }, { $project: { _id: 0, email: 1, password: 1 } });
      if (!user) {
        return { result: false, message: "Email or password are incorrect" };
      }

      const comparedPassword = await comparePassword(password, user.password);
      if (!comparedPassword) {
        return { result: false, message: "Email or password are incorrect" };
      }
      return { result: true };
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  register: async ({
    name,
    surname,
    age,
    email,
    password,
    ["Repeat Password"]: repeatPassword,
  }) => {
    console.log(age);
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

    try {
      const cryptedPassword = await cryptPassword(password);
      const register = await global.db.collection("users").insertOne({
        name: name.trim(),
        surname: surname.trim() || null,
        age,
        email: email.trim(),
        password: cryptedPassword,
        ucode: uuid(),
      });

      if (!register.acknowledged) return new Error("Error Occured re-try");
      return { result: true, message: "User Created" };
    } catch (error) {
      return { result: false, message: error };
    }
  },
};