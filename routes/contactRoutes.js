const express = require("express");
const { getAllContacts } = require("../controller/contactController");

const router = express.Router();

router
  .route("/")
  .get(getAllContacts)
  .post((req, res) => {
    console.log(req.body);
    const { name, age, weight } = req.body;
    res.send(`Create Contacts ${name} ${age} ${weight}`);
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
