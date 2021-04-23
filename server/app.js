const express = require("express");
const app = express();
const Axios = require("axios");
// const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const cors = require("cors");
const Tensor = require("./models/TensorSchema.js");

// const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const { ResumeToken } = require("mongodb");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const CONNECTION_URL =
  "mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/AuthTest?retryWrites=true&w=majority";

mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to DB");
    const fetching = async () => {
      var response = await fetch("https://gorest.co.in/public-api/users");
      var res = await response.json();
      res = res.data;
      res.forEach(function (entry) {
        new Tensor({
          id: entry.id,
          name: entry.name,
          email: entry.email,
          gender: entry.gender,
          status: entry.status,
        }).save();
      });
    };
    //fetching();
  }
);

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});
app.use(express.json());
app.get("/", async (req, res) => {
  var data = await Tensor.find({});
  res.send(data);
});

app.post("/", async (req, res) => {
  console.log(req.body.Email);
  const filter = { email: req.body.Email };
  const update = {
    name: req.body.Name,
    email: req.body.Email,
    gender: req.body.Gender,
  };
  let doc = await Tensor.findOneAndUpdate(filter, update);
  res.status(200).send({ msg: "success" });
});
//app.use("/api/posts", postRoute);
// app.use(bodyParser.OptionsUrlencoded({ extended: false }));

app.listen(5000, () => console.log("Server Runnning"));
