const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const app = express();

// Validate jwt
if (!process.env.JWT_PRIVATE_KEY) {
  console.error("FATAL ERROR: JWT_PRIVATE_KEY is not defined.");
  process.exit(1);
}

// Connect to the database
mongoose
  .connect("mongodb://mongo:27017/aerolito", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then("Connected to the database.")
  .catch(error => console.log("Could not connect to the database!", error));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", users);
app.use("/auth", auth);

app.listen(5000, console.log("Backend listening on port 5000..."));
