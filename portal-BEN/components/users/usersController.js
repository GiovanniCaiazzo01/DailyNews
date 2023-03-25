const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const {
  createToken,
  checkForMissingField,
  ERRORS,
  SUCCESS,
} = require("../../utils/utils");

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

const validateNameAndAge = (name, age) => {
  if (parseInt(age) <= 0 || parseInt(age) >= 200) {
    return { result: false, message: ERRORS.INVALID_AGE };
  }

  if (name.length > 50) {
    return { result: false, message: ERRORS.NAME_TO_LONG };
  }
};

module.exports = {
  get: async (email) => {
    if (!email) {
      return {
        result: false,
        message: ERRORS.USER_NOT_RETRIVABLE,
      };
    }

    try {
      const user = await global.db.collection("users").findOne({ email });
      if (!user) {
        throw new Error(ERRORS.GENERIC);
      }
      const to_return = {
        ucode: user.ucode,
        name: user.name,
        age: user.age,
        surname: user.surname,
        email: user.email,
        language: user.language,
      };
      return { result: true, data: to_return };
    } catch (error) {
      console.log(error);
      return { result: false, message: error };
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
    const missingField = checkForMissingField({
      name,
      age,
      email,
      password,
      repeatPassword,
    });
    const validate = validateNameAndAge(name, age);

    if (validate?.result === false) {
      return validate;
    }
    if (missingField) {
      return {
        result: false,
        message: ERRORS.MISSING_FIELD(missingField.field),
      };
    }

    const passwordEquality = checkEqualityPasswords(password, repeatPassword);
    if (!passwordEquality) {
      return {
        result: false,
        message: ERRORS.PASSWORD_MISMATCH,
      };
    }

    try {
      const checkEmail = await global.db
        .collection("users")
        .findOne({ email }, { $project: { _id: 0, email: 1 } });
      if (checkEmail) {
        return { result: false, message: ERRORS.EMAIL_ALREADY_EXISTS };
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

      if (!register.acknowledged) throw new Error(ERRORS.GENERIC);
      return { result: true, message: SUCCESS.USER_CREATED };
    } catch (error) {
      return { result: false, message: error };
    }
  },
  update: async ({ name, surname, age, email, language }) => {
    const missingField = checkForMissingField({
      name,
      age,
      email,
      language,
    });

    if (missingField) {
      return {
        result: false,
        message: ERRORS.MISSING_FIELD(missingField.field),
      };
    }
    const validate = validateNameAndAge(name, age);
    if (validate?.result === false) {
      return validate;
    }

    try {
      const update_user = await global.db
        .collection("users")
        .updateOne(
          { email },
          { $set: { name, surname, age, email, language } }
        );
      if (!update_user.acknowledged) throw new Error(ERRORS.GENERIC);

      return { result: true, message: SUCCESS.USER_UPDATED };
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
