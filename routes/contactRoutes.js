const express = require("express");
const {
  getAllContacts,
  postContacts,
} = require("../controller/contactController");

const router = express.Router();

router.route("/").get(getAllContacts).post(postContacts);

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Select ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Create ${req.params.id}`);
  });

module.exports = router;
