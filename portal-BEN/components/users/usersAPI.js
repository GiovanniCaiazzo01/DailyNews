const express = require("express");
const { register } = require("./usersController");
const router = express.Router();

router.post("/register", async (req, res) => {
  const payload = {
    ...req.body,
  };

  const result = await register(payload);
  return res.send(result);
});

module.exports = router;
