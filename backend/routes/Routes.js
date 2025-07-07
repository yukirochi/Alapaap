const express = require("express");
const {
  login,
  signup,
  insertscore,
  getalldata,
} = require("../controllers/controller");

const router = express.Router();

router.get("/", getalldata);

router.post("/login", login);

router.post("/signup", signup);

router.patch("/:id", insertscore);

module.exports = router;
