const express = require("express");

const indexRoutes = express.Router();

indexRoutes.get("/", (req, res) => {
  console.log("hiii");
});

module.exports = indexRoutes;
