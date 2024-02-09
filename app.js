const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server running ... ");
});

app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact");
});
