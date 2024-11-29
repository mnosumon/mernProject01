const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.post("/navbar", function (req, res) {
  console.log("Navbar");
});

app.listen(8000);
