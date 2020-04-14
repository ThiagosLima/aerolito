const express = require("express");
const router = express.Router();
const { Author, validate } = require("../models/author");

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.send(author);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const author = await Author.find();
    res.send(author);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  // Validate body
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Save in DB
  const author = new Author(req.body);
  await author.save();

  res.send(author);
});

module.exports = router;
