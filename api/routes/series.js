const express = require("express");
const router = express.Router();
const { Serie, validate } = require("../models/serie");

router.get("/", async (req, res) => {
  try {
    const series = await Serie.find();
    res.send(series);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  // Validate body
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Save in DB
  const serie = new Serie(req.body);
  await serie.save();

  res.send(serie);
});

module.exports = router;
