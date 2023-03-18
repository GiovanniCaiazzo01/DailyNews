const express = require("express");
const { register, update, get } = require("./usersController");
const router = express.Router();

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  const payload = email;

  const result = await get(payload);
  return res.send(result);
});

router.post("/register", async (req, res) => {
  const payload = {
    ...req.body,
  };

  const result = await register(payload);
  return res.send(result);
});

router.put("/update", async (req, res) => {
  const payload = {
    ...req.body,
  };

  const result = await update(payload);
  return res.send(result);
});
module.exports = router;
