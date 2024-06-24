const express = require("express");
const pets = express.Router();
const petsArray = require("../models/pet");

// localhost:4001/pets/
pets.get("/", (req, res) => {
  res.json(petsArray);
});

pets.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (petsArray[arrayIndex]) {
    res.json(petsArray[arrayIndex]);
  } else {
    res.json({ error: "Not Found" });
  }
});

module.exports = pets;
