const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  facebook: {
    type: String
  },
  email: {
    type: String
  },
  instagram: {
    type: String
  },
  twitter: {
    type: String
  },
  youtube: {
    type: String
  },
  tumblr: {
    type: String
  },
  behance: {
    type: String
  }
});

const Author = mongoose.model("Author", authorSchema);

function validate(author) {
  const schema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    facebook: Joi.string(),
    email: Joi.string().email(),
    instagram: Joi.string(),
    twitter: Joi.string(),
    youtube: Joi.string(),
    tumblr: Joi.string(),
    behance: Joi.string()
  };

  return Joi.validate(author, schema);
}

module.exports = { authorSchema, Author, validate };
