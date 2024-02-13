const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const dbConnect = require("./config/dbConnect");

const app = express();
dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app에 router 미들웨어를 사용했음을 알린다.
app.use("/contact", contactRoutes);

app.listen(3000, () => {
  console.log("server running ... ");
});
