const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server running ... ");
});

app.get("/contact", (req, res) => {
  res.send(`Select All`);
});

app.get("/contact/:id", (req, res) => {
  res.send(`Select ${req.params.id}`);
});

app.post("/contact/:id", (req, res) => {
  res.send(`Create ${req.params.id}`);
});

app.put("/contact/:id", (req, res) => {
  res.send(`Update ${req.params.id}`);
});

app.delete("/contact/:id", (req, res) => {
  res.send(`Delete ${req.params.id}`);
});
