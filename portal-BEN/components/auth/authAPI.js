const express = require("express");
const { verify_token, login } = require("./authController");
const router = express.Router();

router.post("/login", async (req, res) => {
  const payload = {
    ...req.body,
  };

  const result = await login(payload);
  return res.send(result);
});

router.post("/verify-token", async (req, res) => {
  const { authorization } = req.headers;
  try {
    const result = await verify_token(authorization);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
