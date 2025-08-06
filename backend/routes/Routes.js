const express = require("express");
const {
  login,
  signup,
  insertscore,
  getalldata,
  getuserid,
} = require("../controllers/controller");

const router = express.Router();

router.get("/", getalldata);

router.post("/login", login);

router.post("/signup", signup);

router.patch("/game/:id", insertscore);

router.post("/getuserid", getuserid);

module.exports = router;
