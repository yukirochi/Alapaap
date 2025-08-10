const express = require("express");
const {
  login,
  signup,
  insertscore,
  getalldata,
  getuserid,
  updatepassword
} = require("../controllers/controller");

const router = express.Router();

router.get("/leaderboard", getalldata);

router.post("/login", login);

router.post("/signup", signup);

router.patch("/game/:id", insertscore);

router.post("/getuserid", getuserid);

router.patch("/profile/:id", updatepassword);

module.exports = router;
