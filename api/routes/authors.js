const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const { Author, validate } = require("../models/author");
const router = express.Router();

const upload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Wrong file format! Please upload an image."));
    }

    cb(undefined, true);
  }
});

router.get("/:id/image", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author || !author.image) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(author.image);
  } catch (error) {
    res.status(404).send({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).select({
      image: 0
    });
    res.send(author);
  } catch (error) {
    res.status(404).send({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const author = await Author.find().select({
      image: 0
    });
    res.send(author);
  } catch (error) {
    res.status(404).send({ error });
  }
});

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    // Validate body
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const image = await sharp(req.file.buffer).png().toBuffer();

    // Save in DB
    const author = new Author({ ...req.body, image });
    await author.save();

    res.send(author);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.put("/:id", async (req, res) => {
  // Validate body
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const author = await Author.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );

  if (!author)
    return res.status(400).send("The author with the given id was not found!");

  return res.send(author);
});

router.delete("/:id", async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.id);
  return res.send(author);
});

module.exports = router;
