const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app에 router 미들웨어를 사용했음을 알린다.
app.use("/contact", contactRoutes);

app.listen(3000, () => {
  console.log("server running ... ");
});
