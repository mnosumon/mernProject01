const express = require("express");
const app = express();

app.get("/navbar", function (req, res) {
  res.send("Hello World");
});

app.listen(8000);
