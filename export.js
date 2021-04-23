const mongoose = require("mongoose");
const ObjectsToCsv = require("objects-to-csv");

const CONNECTION_URL =
  "mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/AuthTest?retryWrites=true&w=majority";

mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to DB");
  }
);
const Tensor = require("./models/TensorSchema.js");
const data = async () => {
  var res = await Tensor.find({});
  //console.log(res);
  res = JSON.stringify(res);
  res = JSON.parse(res);
  console.log(res);
  var csv = await new ObjectsToCsv(res);
  csv.toDisk("./test.csv");
};
data();
