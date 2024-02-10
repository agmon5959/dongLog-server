const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`Select All Contacts`);
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Select ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Create ${req.params.id}`);
  });

module.exports = router;
