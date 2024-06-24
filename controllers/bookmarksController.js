const express = require("express");
// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router();

// Import the bookmarks model
const bookmarksArray = require("../models/bookmark");

// Index Routes: gets all of the bookmarks
// localhost:4001/bookmarks/
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

//SHOW Route: gets ONE of the bookmarks
bookmarks.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (bookmarksArray[arrayIndex]) {
    res.json(bookmarksArray[arrayIndex]);
  } else {
    res.json({ error: "Not Found" });
  }
});

// CREATE Route: creates a new bookmark

module.exports = bookmarks;
