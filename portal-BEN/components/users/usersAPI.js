const express = require("express");
const { login, register } = require("./usersController");
const router = express.Router();

router.post("/login", async (req, res) => {
  const payload = {
    ...req.body,
  };

  const result = await login(payload);
  return res.send(result);
});

router.post("/register", async (req, res) => {
  const payload = {
    ...req.body,
  };

  const result = await register(payload);
  return res.send(result);
});

module.exports = router;
