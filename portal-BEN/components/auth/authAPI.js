const express = require("express");
const { verify_token } = require("./authController");
const router = express.Router();

router.post("/verify-token", async (req, res) => {
  const { authorization } = req.headers;
  const { name, email, age } = req.body.userInfo;
  try {
    const result = await verify_token(authorization, name, email, age);
    console.log("sono result", result);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
