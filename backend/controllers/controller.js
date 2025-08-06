const model = require("../models/model");
const mongoose = require("mongoose");

const login = async (req, res) => {
  let { username, password } = req.body;

  let verify = await model.findOne({ username: username, password: password });

  if (!verify) {
    return res.json({
      msg: "Wrong username or password",
      var: "failed",
      stats: false,
    });
  }

  res.json({
    msg: "Login Successful",
    user: verify,
    var: "success",
    username: username,
    stats: true,
  });
};

const signup = async (req, res) => {
  let { username, email, password } = req.body;

  let verifyemail = await model.findOne({ email: email });

  if (verifyemail) {
    return res.json({
      msg: "Email is already used",
      var: "emailprob",
      stats: false,
    });
  }

  let verifyname = await model.findOne({ username: username });

  if (verifyname) {
    return res.json({
      msg: "Username is already used",
      var: "userprob",
      username: username,
      stats: true,
    });
  }

  await model.create({
    username: username,
    email: email,
    password: password,
  });
  let userinfo = await model.findOne({ username: username });
  res.json({ msg: "Account Created", user: userinfo });
};

const insertscore = async (req, res) => {
  let { id } = req.params;
  let { score, subject } = req.body;

  let verifyid = await model.findOne({ _id: id });

  if (!verifyid) {
    return res.json({ msg: "User Id doesnt exist" });
  }

  await model.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        Score: {
          value: score,
          subject: subject,
        },
      },
    },
    { new: true }
  );

  res.json({ msg: "progress has been saved" });
};

const getalldata = async (req, res) => {
  let data = await model.find().sort({ score: -1 });

  if (!data) {
    return res.json({ msg: "data doesnt exist" });
  }

  res.json({ data: data });
};

const getuserid = async (req, res) => {
  let { username } = req.body;

  let userinfo = await model.findOne({ username: username });

  res.json({ userinfo: userinfo });
};

module.exports = {
  login,
  signup,
  insertscore,
  getalldata,
  getuserid,
};
