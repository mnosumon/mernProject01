const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://mdnuruddin378350:zrZ3PQ5VQGu1uGwR@cluster0.91n45.mongodb.net/nav?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

app.use(cors());
app.use(express.json());

app.post("/navbar", function (req, res) {
  console.log(req.body);
});

app.listen(8000);
