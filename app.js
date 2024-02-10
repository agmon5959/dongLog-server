const express = require("express");
const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.send("Hello World");
});

router
  .route("/contact/:id")
  .get((req, res) => {
    res.send(`Select ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Create ${req.params.id}`);
  });

// app에 router 미들웨어를 사용했음을 알린다.
app.use(router);

app.listen(3000, () => {
  console.log("server running ... ");
});
