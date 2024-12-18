const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Navbar = require("./model/navModel");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://mdnuruddin378350:zrZ3PQ5VQGu1uGwR@cluster0.91n45.mongodb.net/nav?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

app.use(cors());
app.use(express.json());

app.post("/navbar", function (req, res) {
  console.log(req.body);
  let data = new Navbar(req.body);
  data.save();
  res.send("submited");
});

app.get("/navitem", async function (req, res) {
  let data = await Navbar.findOne({});
  res.send(data);
});

app.put("/navbar/:id", function (req, res) {
  console.log(req.params.id);
  Navbar.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send("Update");
  });
});

app.listen(8000);
