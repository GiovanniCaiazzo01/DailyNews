const express = require("express");
const { verify_token } = require("./authController");
const router = express.Router();

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
