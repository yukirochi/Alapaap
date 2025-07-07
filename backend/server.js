require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const ALroutes = require("./routes/Routes");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/questions", ALroutes);

mongoose
  .connect(process.env.dbUri)
  .then(() => {
    console.log("Db connected");

    app.listen(process.env.PORT, () => {
      console.log("app is listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
