const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const users = require("./routes/users");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", users);
app.get("/", (req, res) => {
  res.send("Home");
});

// Connect to the database
mongoose
  .connect("mongodb://mongo:27017/aerolito", { useNewUrlParser: true })
  .then("Connected to the database.")
  .catch(error => console.log("Could not connect to the database!", error));

app.listen(5000, console.log("Backend listening on port 5000..."));
