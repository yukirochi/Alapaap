const model = require("../models/model");
const mongoose = require("mongoose");

const login = async (req, res) => {
  let { username, password } = req.body;

  let verify = await model.findOne({ username: username, password: password });

  if (!verify) {
    return res.json({ msg: "Wrong username or password" });
  }

  res.json({ msg: "Login Successful", user: verify });
};

const signup = async (req, res) => {
  let { username, email, password } = req.body;

  let verifyemail = await model.findOne({ email: email });

  if (verifyemail) {
    return res.json({ msg: "Email is already used" });
  }

  let verifyname = await model.findOne({ username: username });

  if (verifyname) {
    return res.json({ msg: "Username is already used" });
  }

  await model.create({
    username: username,
    email: email,
    password: password,
  });

  res.json({ msg: "Account Created" });
};

const insertscore = async (req, res) => {
  let { id } = req.params;
  let { score } = req.body;

  let verifyid = await model.findOne({ _id: id });

  if (!verifyid) {
    return res.json({ msg: "User Id doesnt exist" });
  }

  await model.findOneAndUpdate(
    { _id: id },
    { $push: { Score: score } },
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

module.exports = {
  login,
  signup,
  insertscore,
  getalldata,
};
