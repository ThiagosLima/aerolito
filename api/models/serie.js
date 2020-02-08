const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
  cover: {
    type: String,
    required: true
  },
  awsId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  authors: {
    type: String,
    required: true
  },
  drawings: {
    type: String,
    required: true
  },
  colors: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  }
});

const Serie = mongoose.model("Serie", serieSchema);

function validate(serie) {
  const schema = {
    cover: Joi.string().required(),
    awsId: Joi.string().required(),
    title: Joi.string().required(),
    authors: Joi.string().required(),
    drawings: Joi.string().required(),
    colors: Joi.string().required(),
    genre: Joi.string().required(),
    year: Joi.number().required(),
    pages: Joi.number().required(),
    synopsis: Joi.string().required()
  };

  return Joi.validate(serie, schema);
}

module.exports = { serieSchema, Serie, validate };
